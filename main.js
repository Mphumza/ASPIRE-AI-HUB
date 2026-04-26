import './style.css';
import { auth } from './src/config/firebase.js';
import { Landing } from './src/pages/Landing.js';
import { Dashboard } from './src/pages/Dashboard.js';
import { AccountSettings } from './src/pages/AccountSettings.js';
import { CVGenerator } from './src/pages/CVGenerator.js';
import { CVResult, downloadCVAsPDF } from './src/pages/CVResult.js';
import { JobMatches } from './src/pages/JobMatches.js';
import { InterviewPrep } from './src/pages/InterviewPrep.js';
import { LoginForm, RegisterForm } from './src/components/AuthForms.js';
import { handleSignIn, handleSignUp, handleSignOut } from './src/services/auth.js';
import { generateCV, convertMarkdownToHTML, saveCV, updateCV } from './src/services/cv.js';
import {
  generateInterviewQuestions,
  evaluateAnswer,
  splitInterviewQuestionSections,
  extractQuestionForEvaluation,
} from './src/services/interview.js';
import {
  canGenerateCV,
  canUseInterviewCoaching,
  incrementCVGeneration,
  incrementInterviewSession,
  getPaymentLink,
  getUserUsage,
  hasActiveSubscription,
  activateSubscription,
  cancelSubscription,
  updateUserProfile,
} from './src/services/subscription.js';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
let currentPage = 'landing';
let generatedCV = null;
let jobMatches = null;
let interviewQuestions = '';
let isLoading = false;
let currentUserData = null;
let authInitialized = false;

// ── State persistence (survives page refresh) ────────────────────────────────
const STORAGE_CV_KEY = 'ispani_cv';
const STORAGE_JOBS_KEY = 'ispani_jobs';

function persistState() {
  if (generatedCV) {
    try {
      localStorage.setItem(STORAGE_CV_KEY, JSON.stringify({
        markdown: generatedCV.markdown,
        html: generatedCV.html,
        originalHtml: generatedCV.originalHtml,
        editedHtml: generatedCV.editedHtml,
        formData: generatedCV.formData,
        firestoreId: generatedCV.firestoreId || null,
      }));
    } catch (_) { /* storage quota — ignore */ }
  }
  if (Array.isArray(jobMatches) && jobMatches.length) {
    try {
      localStorage.setItem(STORAGE_JOBS_KEY, JSON.stringify(jobMatches));
    } catch (_) { /* ignore */ }
  }
}

function loadPersistedState() {
  try {
    const cvRaw = localStorage.getItem(STORAGE_CV_KEY);
    if (cvRaw) generatedCV = JSON.parse(cvRaw);
  } catch (_) { generatedCV = null; }
  try {
    const jobsRaw = localStorage.getItem(STORAGE_JOBS_KEY);
    if (jobsRaw) jobMatches = JSON.parse(jobsRaw);
  } catch (_) { jobMatches = []; }
}

function clearPersistedState() {
  localStorage.removeItem(STORAGE_CV_KEY);
  localStorage.removeItem(STORAGE_JOBS_KEY);
}
// ─────────────────────────────────────────────────────────────────────────────

// Loading overlay component
function showLoadingOverlay(message = 'Processing...', subMessage = '') {
  const existing = document.getElementById('loading-overlay');
  if (existing) existing.remove();
  
  const overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]';
  overlay.innerHTML = `
    <div class="glass rounded-3xl p-10 text-center max-w-sm mx-4 border-2 border-white/30">
      <div class="relative inline-block mb-6">
        <div class="w-16 h-16 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-2xl">✨</span>
        </div>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">${message}</h3>
      ${subMessage ? `<p class="text-gray-600">${subMessage}</p>` : ''}
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.remove(), 300);
  }
}

// Toast notification system
function showToast(message, type = 'info') {
  const existing = document.querySelectorAll('.toast-notification');
  existing.forEach(t => t.remove());
  
  const colors = {
    success: 'from-green-500 to-emerald-600',
    error: 'from-red-500 to-rose-600',
    info: 'from-primary-500 to-primary-600',
    warning: 'from-amber-500 to-orange-600'
  };
  
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast-notification fixed bottom-6 right-6 z-[101] transform translate-y-4 opacity-0 transition-all duration-300`;
  toast.innerHTML = `
    <div class="glass rounded-2xl p-4 flex items-center gap-3 shadow-2xl border-2 border-white/30 max-w-sm">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${colors[type]} flex items-center justify-center text-white font-bold">
        ${icons[type]}
      </div>
      <p class="text-gray-800 font-medium flex-1">${message}</p>
      <button onclick="this.parentElement.parentElement.remove()" class="text-gray-500 hover:text-gray-700 p-1">✕</button>
    </div>
  `;
  document.body.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });
  
  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Utility to display a modal
function showAuthModal(content) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50';
  modal.innerHTML = content;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  return modal;
}

// ── Stripe payment return handler ────────────────────────────────────────────
// Stripe payment link should be configured in the dashboard with a success URL:
//   https://yourdomain.com/?payment_success=true&session_id={CHECKOUT_SESSION_ID}
async function handlePaymentReturn() {
  const params = new URLSearchParams(window.location.search);
  const paymentSuccess = params.get('payment_success');
  const sessionId = params.get('session_id');

  // Validate a real Stripe Checkout session ID is present
  if (paymentSuccess !== 'true' || !sessionId || !/^cs_(test|live)_[A-Za-z0-9]+/.test(sessionId)) {
    return;
  }

  // Remove params from the URL without triggering a reload
  window.history.replaceState({}, '', window.location.pathname);

  try {
    const alreadySubscribed = await hasActiveSubscription();
    if (!alreadySubscribed) {
      await activateSubscription();
      currentUserData = await getUserUsage();
      showToast('Subscription activated! Welcome to Premium!', 'success');
    }
  } catch (err) {
    console.error('Error activating subscription after payment:', err);
    showToast('Payment received but activation failed. Please contact support.', 'error');
  }
}
// ─────────────────────────────────────────────────────────────────────────────

// Subscription paywall modal
function showSubscriptionModal(feature = 'CV generation') {
  const paymentLink = getPaymentLink();
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="glass rounded-3xl p-8 max-w-md mx-4 border-2 border-white/30 text-center">
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-800 mb-3">Upgrade to Premium</h2>
      <p class="text-gray-600 mb-6">
        You've used your free ${feature} trial. Subscribe to unlock unlimited access to all premium features!
      </p>
      
      <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 mb-6 border border-primary-200">
        <div class="text-3xl font-black text-primary-600 mb-2">R50<span class="text-lg font-normal text-gray-500">/month</span></div>
        <ul class="text-left text-gray-700 space-y-2">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Unlimited CV generations
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Unlimited interview coaching
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Free job search (always included)
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Priority AI processing
          </li>
        </ul>
      </div>
      
      <div class="flex flex-col gap-3">
        <a href="${paymentLink}" target="_blank" rel="noopener noreferrer"
          class="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 inline-block">
          Subscribe Now
        </a>
        <button id="close-subscription-modal" class="text-gray-500 hover:text-gray-700 font-medium py-2">
          Maybe Later
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  modal.querySelector('#close-subscription-modal').addEventListener('click', () => {
    modal.remove();
  });

  return modal;
}

// Render the current page
function renderPage() {
  const app = document.getElementById('app');
  const user = auth.currentUser;
  
  // Show loading screen while auth is initializing
  if (!authInitialized) {
    app.innerHTML = `
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin"></div>
          <p class="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    `;
    return;
  }
  
  // Protected routes - redirect to landing if not logged in
  const protectedRoutes = ['dashboard', 'account-settings', 'cv-generator', 'cv-result', 'interview-prep'];
  if (!user && protectedRoutes.includes(currentPage)) {
    currentPage = 'landing';
  }
  
  // If logged in user is on landing, redirect to dashboard
  if (user && currentPage === 'landing') {
    currentPage = 'dashboard';
  }
  
  const header = `
    <header class="glass-dark backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <button id="home-btn" class="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-white neon-text">Ispani AI</h1>
          </button>
          <div id="auth-buttons" class="flex items-center space-x-3">
            ${user ? `
              <span class="text-white glass-dark px-4 py-2 rounded-xl border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 mr-2 text-purple-900 align-middle" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="2.2" />
                  <path d="M5.5 18.8C6.5 15.8 9 14 12 14C15 14 17.5 15.8 18.5 18.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                </svg>
                ${user.email}
              </span>
              <button id="logout" class="glass px-6 py-2.5 rounded-xl text-gray-400 font-semibold hover:bg-white/20 transition-all">
                Logout
              </button>
            ` : `
              <button id="login" class="glass px-6 py-2.5 rounded-xl text-primary-700 font-semibold hover:bg-white transition-all">
                Login
              </button>
              <button id="signup" class="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-6 py-2.5 rounded-xl font-semibold pulse-btn">
                Sign Up
              </button>
            `}
          </div>
        </div>
      </div>
    </header>
  `;

  let content;
  switch (currentPage) {
    case 'landing':
      content = Landing();
      break;
    case 'dashboard':
      content = Dashboard(currentUserData);
      break;
    case 'account-settings':
      content = AccountSettings(currentUserData);
      break;
    case 'cv-generator':
      content = CVGenerator();
      break;
    case 'cv-result':
      content = CVResult(generatedCV);
      break;
    case 'job-matches':
      content = JobMatches({ jobs: jobMatches });
      break;
    case 'interview-prep':
      content = InterviewPrep({ questions: interviewQuestions });
      break;
    default:
      content = auth.currentUser ? Dashboard(currentUserData) : Landing();
  }

  app.innerHTML = header + content;
  initializeEventListeners();
}

// Initialize event listeners
function initializeEventListeners() {
  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');
  const logoutBtn = document.getElementById('logout');
  const homeBtn = document.getElementById('home-btn');
  const cancelCvBtn = document.getElementById('cancel-cv');

  // Home button - return to dashboard if logged in, else landing
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      if (auth.currentUser) {
        currentPage = 'dashboard';
      } else {
        currentPage = 'landing';
        generatedCV = null;
        jobMatches = null;
        interviewQuestions = '';
      }
      renderPage();
    });
  }

  // Cancel CV button - return to dashboard
  if (cancelCvBtn) {
    cancelCvBtn.addEventListener('click', () => {
      currentPage = auth.currentUser ? 'dashboard' : 'landing';
      renderPage();
    });
  }

  // Logout button
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        await handleSignOut();
        currentPage = 'landing';
        generatedCV = null;
        jobMatches = null;
        interviewQuestions = '';
        currentUserData = null;
        clearPersistedState();
        showToast('Logged out successfully', 'success');
        renderPage();
      } catch (error) {
        showToast(error.message, 'error');
      }
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const modal = showAuthModal(LoginForm());
      const loginForm = modal.querySelector('#login-form');
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Signing in...</span>';
        
        try {
          const email = loginForm.querySelector('#login-email').value;
          const password = loginForm.querySelector('#login-password').value;
          await handleSignIn(email, password);
          // Fetch user data for dashboard
          currentUserData = await getUserUsage();
          modal.remove();
          showToast('Welcome back!', 'success');
          currentPage = 'dashboard';
          renderPage();
        } catch (error) {
          showToast(error.message, 'error');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Sign In';
        }
      });

      modal.querySelector('#show-register').addEventListener('click', () => {
        modal.remove();
        signupBtn.click();
      });
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      const modal = showAuthModal(RegisterForm());
      const registerForm = modal.querySelector('#register-form');
      registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Creating account...</span>';
        
        try {
          const email = registerForm.querySelector('#register-email').value;
          const password = registerForm.querySelector('#register-password').value;
          const confirmPassword = registerForm.querySelector('#register-confirm-password').value;

          if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
          }

          await handleSignUp(email, password);
          // Fetch user data for dashboard
          currentUserData = await getUserUsage();
          modal.remove();
          showToast('Account created successfully!', 'success');
          currentPage = 'dashboard';
          renderPage();
        } catch (error) {
          showToast(error.message, 'error');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Create Account';
        }
      });

      modal.querySelector('#show-login').addEventListener('click', () => {
        modal.remove();
        loginBtn.click();
      });
    });
  }

  const cvForm = document.getElementById('cv-form');
  if (cvForm) {
    cvForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      if (isLoading) return;
      
      // Check if user is logged in
      if (!auth.currentUser) {
        showToast('Please log in to generate a CV', 'warning');
        return;
      }
      
      // Check subscription/trial status
      try {
        const cvPermission = await canGenerateCV();
        if (!cvPermission.allowed) {
          showSubscriptionModal('CV generation');
          return;
        }
        
        // Show trial notice if using free trial
        if (cvPermission.reason === 'free_trial') {
          showToast(`This is your free CV generation trial!`, 'info');
        }
      } catch (err) {
        console.error('CV permission check error:', err);
        showToast('Error checking subscription status: ' + (err.message || 'Please try again'), 'error');
        return;
      }
      
      isLoading = true;
      
      const submitBtn = cvForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="flex items-center justify-center gap-3">
          <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Generating Your CV...</span>
        </span>
      `;
      submitBtn.disabled = true;
      
      showLoadingOverlay('Creating Your Professional CV', 'Our AI is crafting the perfect resume for you...');
      
      try {
        const formData = {
          fullName: cvForm.querySelector('#fullName').value,
          address: cvForm.querySelector('#address').value,
          contactInfo: cvForm.querySelector('#contactInfo').value,
          jobType: cvForm.querySelector('#jobType')?.value || null,
          cvType: cvForm.querySelector('#cvType').value,
          field: cvForm.querySelector('#field')?.value || '',
          summary: cvForm.querySelector('#summary').value,
          skills: Array.from(cvForm.querySelector('#skills').selectedOptions).map(opt => opt.value),
          experience: cvForm.querySelector('#experience').value,
          education: cvForm.querySelector('#education').value,
          certifications: cvForm.querySelector('#certifications').value,
          awards: cvForm.querySelector('#awards').value,
          references: cvForm.querySelector('#references')?.value || '',
          additionalDetails: cvForm.querySelector('#additionalDetails')?.value || '',
        };

        const result = await generateCV(formData);
        const generatedHtml = convertMarkdownToHTML(result.cv);
        generatedCV = {
          markdown: result.cv,
          html: generatedHtml,
          originalHtml: generatedHtml,
          editedHtml: null,
          formData,
        };

        // Ranked using full CV + profile in jobMatching (not only cvType)
        jobMatches = Array.isArray(result.jobMatches) ? result.jobMatches : [];
        
        // Increment usage counter after successful generation
        await incrementCVGeneration();

        // Persist CV to Firestore and save state locally
        try {
          const docId = await saveCV({ ...generatedCV, cv: result.cv });
          generatedCV.firestoreId = docId;
        } catch (saveErr) {
          console.warn('Could not persist CV to Firestore:', saveErr?.message);
        }
        persistState();

        hideLoadingOverlay();
        showToast('CV generated successfully!', 'success');
        
        currentPage = 'cv-result';
        renderPage();
      } catch (error) {
        hideLoadingOverlay();
        showToast('Error generating CV: ' + error.message, 'error');
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
      } finally {
        isLoading = false;
      }
    });
  }

  const viewMatchesBtn = document.getElementById('view-matches');
  if (viewMatchesBtn) {
    viewMatchesBtn.addEventListener('click', () => {
      currentPage = 'job-matches';
      renderPage();
    });
  }

  const practiceBtn = document.getElementById('practice-interview');
  if (practiceBtn) {
    practiceBtn.addEventListener('click', async () => {
      if (!generatedCV || !generatedCV.formData) {
        showToast('Generate a CV first to get tailored questions', 'error');
        return;
      }
      
      // Check if user is logged in
      if (!auth.currentUser) {
        showToast('Please log in to use interview coaching', 'warning');
        return;
      }
      
      // Check subscription/trial status for interview coaching
      try {
        const interviewPermission = await canUseInterviewCoaching();
        if (!interviewPermission.allowed) {
          showSubscriptionModal('interview coaching');
          return;
        }
        
        // Show trial notice if using free trial
        if (interviewPermission.reason === 'free_trial') {
          showToast(`This is your free interview coaching trial!`, 'info');
        }
      } catch (err) {
        showToast('Error checking subscription status', 'error');
        return;
      }

      showLoadingOverlay('Generating Interview Questions', 'AI is creating tailored questions...');
      try {
        const profile = generatedCV.formData;
        const result = await generateInterviewQuestions(profile);
        interviewQuestions = result || 'No questions generated';
        
        // Increment usage counter after successful generation
        await incrementInterviewSession();
        
        hideLoadingOverlay();
        showToast('Interview questions are ready', 'success');
        currentPage = 'interview-prep';
        renderPage();
      } catch (err) {
        hideLoadingOverlay();
        showToast('Error generating interview questions: ' + (err.message || err), 'error');
      }
    });
  }

  // CV editing toolbar
  function applyInlineFormatting(tagName) {
    const editable = document.getElementById('editable-cv');
    if (!editable) return;

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);
    if (range.collapsed) return;

    if (!editable.contains(range.commonAncestorContainer)) return;

    const wrapper = document.createElement(tagName);
    wrapper.appendChild(range.extractContents());
    range.insertNode(wrapper);

    // Keep inline structure and avoid block-level wrapping in header/body
    editable.normalize();

    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    sel.removeAllRanges();
    sel.addRange(newRange);
  }

  const boldBtn = document.getElementById('format-bold');
  if (boldBtn) {
    boldBtn.addEventListener('click', (event) => {
      event.preventDefault();
      applyInlineFormatting('strong');
    });
  }

  const italicBtn = document.getElementById('format-italic');
  if (italicBtn) {
    italicBtn.addEventListener('click', (event) => {
      event.preventDefault();
      applyInlineFormatting('em');
    });
  }

  const underlineBtn = document.getElementById('format-underline');
  if (underlineBtn) {
    underlineBtn.addEventListener('click', (event) => {
      event.preventDefault();
      applyInlineFormatting('u');
    });
  }

  const saveCvBtn = document.getElementById('save-cv');
  if (saveCvBtn) {
    saveCvBtn.addEventListener('click', () => {
      const editable = document.getElementById('editable-cv');
      if (!editable) {
        showToast('Editable CV region not found', 'error');
        return;
      }

      const html = editable.innerHTML;
      if (!generatedCV) {
        showToast('No CV loaded to save', 'error');
        return;
      }

      generatedCV.editedHtml = html;
      generatedCV.html = html;

      // Persist locally and sync to Firestore if we have a document ID
      persistState();
      if (generatedCV.firestoreId) {
        updateCV(generatedCV.firestoreId, html).catch(err =>
          console.warn('Could not sync CV edit to Firestore:', err?.message)
        );
      }

      showToast('CV changes saved successfully', 'success');
      currentPage = 'cv-result';
      renderPage();
    });
  }

  const resetCvBtn = document.getElementById('reset-cv');
  if (resetCvBtn) {
    resetCvBtn.addEventListener('click', () => {
      if (!generatedCV) {
        showToast('No CV loaded to reset', 'error');
        return;
      }

      generatedCV.editedHtml = null;
      generatedCV.html = generatedCV.originalHtml || generatedCV.html;

      showToast('CV reset to AI-generated version', 'info');
      currentPage = 'cv-result';
      renderPage();
    });
  }

  // Download CV button
  const downloadCVBtn = document.getElementById('download-cv');
  if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
      if (generatedCV && generatedCV.formData) {
        downloadCVBtn.innerHTML = `
          <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <span>Generating PDF...</span>
        `;
        
        setTimeout(() => {
          try {
            downloadCVAsPDF(generatedCV.formData);
            showToast('CV downloaded successfully!', 'success');
          } catch (error) {
            showToast('Error downloading CV: ' + error.message, 'error');
          }
          
          downloadCVBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span>Download as PDF</span>
          `;
        }, 100);
      } else {
        showToast('No CV data available', 'error');
      }
    });
  }

  const backToCVBtn = document.getElementById('back-to-cv');
  if (backToCVBtn) {
    backToCVBtn.addEventListener('click', () => {
      currentPage = 'cv-result';
      renderPage();
    });
  }

  // Dashboard navigation buttons
  const goCVGeneratorBtn = document.getElementById('go-cv-generator');
  if (goCVGeneratorBtn) {
    goCVGeneratorBtn.addEventListener('click', () => {
      currentPage = 'cv-generator';
      renderPage();
    });
  }

  const goInterviewPrepBtn = document.getElementById('go-interview-prep');
  if (goInterviewPrepBtn) {
    goInterviewPrepBtn.addEventListener('click', async () => {
      if (!generatedCV || !generatedCV.formData) {
        showToast('Please generate a CV first to get tailored interview questions', 'info');
        currentPage = 'cv-generator';
        renderPage();
        return;
      }
      
      // Check permission and go to interview prep
      if (!auth.currentUser) {
        showToast('Please log in to use interview coaching', 'warning');
        return;
      }
      
      try {
        const interviewPermission = await canUseInterviewCoaching();
        if (!interviewPermission.allowed) {
          showSubscriptionModal('interview coaching');
          return;
        }
        
        if (interviewPermission.reason === 'free_trial') {
          showToast('This is your free interview coaching trial!', 'info');
        }
      } catch (err) {
        showToast('Error checking subscription status', 'error');
        return;
      }

      showLoadingOverlay('Generating Interview Questions', 'AI is creating tailored questions...');
      try {
        const profile = generatedCV.formData;
        const result = await generateInterviewQuestions(profile);
        interviewQuestions = result || 'No questions generated';
        await incrementInterviewSession();
        hideLoadingOverlay();
        showToast('Interview questions are ready', 'success');
        currentPage = 'interview-prep';
        renderPage();
      } catch (err) {
        hideLoadingOverlay();
        showToast('Error generating interview questions: ' + (err.message || err), 'error');
      }
    });
  }

  const goAccountSettingsBtn = document.getElementById('go-account-settings');
  if (goAccountSettingsBtn) {
    goAccountSettingsBtn.addEventListener('click', async () => {
      // Refresh user data before showing settings
      if (auth.currentUser) {
        try {
          currentUserData = await getUserUsage();
        } catch (err) {
          console.error('Error refreshing user data:', err);
        }
      }
      currentPage = 'account-settings';
      renderPage();
    });
  }

  const goJobSearchBtn = document.getElementById('go-job-search');
  if (goJobSearchBtn) {
    goJobSearchBtn.addEventListener('click', () => {
      if (jobMatches && jobMatches.length > 0) {
        currentPage = 'job-matches';
        renderPage();
      } else {
        showToast('Generate a CV first to get personalized job matches', 'info');
        currentPage = 'cv-generator';
        renderPage();
      }
    });
  }

  // Account Settings event listeners
  const backToDashboardBtn = document.getElementById('back-to-dashboard');
  if (backToDashboardBtn) {
    backToDashboardBtn.addEventListener('click', () => {
      currentPage = 'dashboard';
      renderPage();
    });
  }

  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const displayName = document.getElementById('displayName').value.trim();
      const saveBtn = document.getElementById('save-profile');
      
      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Saving...';
      
      try {
        await updateUserProfile(displayName);
        currentUserData = await getUserUsage();
        showToast('Profile updated successfully!', 'success');
        renderPage();
      } catch (err) {
        showToast('Error updating profile: ' + (err.message || err), 'error');
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Save Changes';
      }
    });
  }

  const cancelSubscriptionBtn = document.getElementById('cancel-subscription');
  if (cancelSubscriptionBtn) {
    cancelSubscriptionBtn.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to cancel your subscription? You will lose access to premium features.')) {
        return;
      }
      
      cancelSubscriptionBtn.disabled = true;
      cancelSubscriptionBtn.innerHTML = 'Cancelling...';
      
      try {
        await cancelSubscription();
        currentUserData = await getUserUsage();
        showToast('Subscription cancelled successfully', 'success');
        renderPage();
      } catch (err) {
        showToast('Error cancelling subscription: ' + (err.message || err), 'error');
        cancelSubscriptionBtn.disabled = false;
        cancelSubscriptionBtn.innerHTML = 'Cancel Subscription';
      }
    });
  }

  const upgradeSubscriptionLink = document.getElementById('upgrade-subscription');
  if (upgradeSubscriptionLink) {
    upgradeSubscriptionLink.href = getPaymentLink();
  }

  const deleteAccountBtn = document.getElementById('delete-account');
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        return;
      }
      
      if (!confirm('This will permanently delete all your data. Type DELETE to confirm.')) {
        return;
      }
      
      deleteAccountBtn.disabled = true;
      deleteAccountBtn.innerHTML = 'Deleting...';
      
      try {
        // Delete user from Firebase Auth
        const user = auth.currentUser;
        if (user) {
          await user.delete();
        }
        currentUserData = null;
        currentPage = 'landing';
        showToast('Account deleted successfully', 'success');
        renderPage();
      } catch (err) {
        if (err.code === 'auth/requires-recent-login') {
          showToast('Please log out and log back in, then try again', 'error');
        } else {
          showToast('Error deleting account: ' + (err.message || err), 'error');
        }
        deleteAccountBtn.disabled = false;
        deleteAccountBtn.innerHTML = 'Delete Account';
      }
    });
  }

  // global function used by InterviewPrep template to submit answers
  window.submitAnswer = async function(index) {
    const textarea = document.getElementById(`answer-${index}`);
    const answer = textarea?.value?.trim();
    if (!answer) {
      showToast('Please type your answer before requesting feedback', 'warning');
      return;
    }

    const sections = splitInterviewQuestionSections(interviewQuestions || '');
    const section = sections[index] || '';
    const questionText = extractQuestionForEvaluation(section);

    showLoadingOverlay('Evaluating answer', 'AI is providing feedback...');
    try {
      const feedback = await evaluateAnswer(questionText || section.slice(0, 500), answer);
      const feedbackWrapper = document.getElementById(`feedback-${index}`);
      if (feedbackWrapper) {
        feedbackWrapper.classList.remove('hidden');
        const inner = feedbackWrapper.querySelector('div');
        if (inner) inner.innerHTML = md.render(feedback || '');
      }
      hideLoadingOverlay();
    } catch (err) {
      hideLoadingOverlay();
      showToast('Error evaluating answer: ' + (err.message || err), 'error');
    }
  };
}

// Initialize the app

document.addEventListener('DOMContentLoaded', () => {
  // Restore CV/job state from previous session before first render
  loadPersistedState();

  // Show loading while checking auth
  renderPage();

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Fetch user data when logged in
      try {
        currentUserData = await getUserUsage();
        currentUserData.email = user.email; // Ensure email is always available
      } catch (err) {
        console.error('Error fetching user data:', err);
        // Create minimal user data if fetch fails
        currentUserData = {
          email: user.email,
          usage: { cvGenerations: 0, interviewSessions: 0 },
          subscription: { isActive: false }
        };
      }

      // Handle return from Stripe payment page
      await handlePaymentReturn();

      // Redirect to dashboard if on landing page
      if (currentPage === 'landing') {
        currentPage = 'dashboard';
      }
    } else {
      currentUserData = null;
      // Redirect to landing if on protected pages
      const protectedRoutes = ['dashboard', 'account-settings', 'cv-generator', 'cv-result', 'interview-prep'];
      if (protectedRoutes.includes(currentPage)) {
        currentPage = 'landing';
      }
    }
    
    authInitialized = true;
    renderPage();
  });
});
