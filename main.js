import './style.css';
import { auth } from './src/config/firebase.js';
import { CVGenerator } from './src/pages/CVGenerator.js';
import { CVResult, downloadCVAsPDF } from './src/pages/CVResult.js';
import { JobMatches } from './src/pages/JobMatches.js';
import { LoginForm, RegisterForm } from './src/components/AuthForms.js';
import { handleSignIn, handleSignUp, handleSignOut } from './src/services/auth.js';
import { generateCV } from './src/services/cv.js';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
let currentPage = 'cv-generator';
let generatedCV = null;
let jobMatches = null;
let isLoading = false;

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

// Fetch job data based on job type
async function fetchJobs(jobType = 'software developer') {
  const APP_ID = '50f33641';
  const API_KEY = '41178ebea8323e7b56402fad09f73ef4';
  const API_URL = `https://api.adzuna.com/v1/api/jobs/za/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=10&what=${encodeURIComponent(jobType)}`;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      console.warn('No jobs found for the given job type.');
      return [];
    }

    return data.results.map((job) => ({
      title: job.title,
      company: job.company?.display_name || 'Unknown',
      location: job.location?.display_name || 'Location not provided',
      description: job.description,
      tags: job.category?.label ? job.category.label.split(', ') : [],
      url: job.redirect_url,
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    return [];
  }
}

// Render the current page
function renderPage() {
  const app = document.getElementById('app');
  const header = `
    <header class="glass-dark backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-white neon-text">Aspire AI Hub</h1>
          </div>
          <div id="auth-buttons" class="flex items-center space-x-3">
            <button id="login" class="glass px-6 py-2.5 rounded-xl text-primary-700 font-semibold hover:bg-white transition-all">
              Login
            </button>
            <button id="signup" class="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-6 py-2.5 rounded-xl font-semibold pulse-btn">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  let content;
  switch (currentPage) {
    case 'cv-generator':
      content = CVGenerator();
      break;
    case 'cv-result':
      content = CVResult(generatedCV);
      break;
    case 'job-matches':
      content = JobMatches({ jobs: jobMatches });
      break;
    default:
      content = CVGenerator();
  }

  app.innerHTML = header + content;
  initializeEventListeners();
}

// Initialize event listeners
function initializeEventListeners() {
  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

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
          modal.remove();
          showToast('Welcome back!', 'success');
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
          modal.remove();
          showToast('Account created successfully!', 'success');
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
          summary: cvForm.querySelector('#summary').value,
          skills: Array.from(cvForm.querySelector('#skills').selectedOptions).map(opt => opt.value),
          experience: cvForm.querySelector('#experience').value,
          education: cvForm.querySelector('#education').value,
          certifications: cvForm.querySelector('#certifications').value,
          awards: cvForm.querySelector('#awards').value,
        };

        const result = await generateCV(formData);
        generatedCV = {
          markdown: result.cv,
          html: md.render(result.cv),
          formData,
        };
        
        // Fetch jobs in parallel for better performance
        jobMatches = await fetchJobs(formData.cvType);

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
}

// Initialize the app

document.addEventListener('DOMContentLoaded', () => {
  renderPage();

  auth.onAuthStateChanged((user) => {
    const authButtons = document.getElementById('auth-buttons');
    if (user) {
      authButtons.innerHTML = `
        <div class="flex items-center space-x-4">
          <span class="text-white glass-dark px-4 py-2 rounded-xl border border-white/30">✨ ${user.email}</span>
          <button id="logout" class="glass px-6 py-2.5 rounded-xl text-white font-semibold hover:bg-white/20 transition-all">
            Logout
          </button>
        </div>
      `;
      document.getElementById('logout').addEventListener('click', async () => {
        try {
          await handleSignOut();
        } catch (error) {
          alert(error.message);
        }
      });
    } else {
      renderPage();
    }
  });
});
