import './style.css';
import { auth } from './src/config/firebase.js';
import { CVGenerator } from './src/pages/CVGenerator.js';
import { CVResult } from './src/pages/CVResult.js';
import { JobMatches } from './src/pages/JobMatches.js';
import { LoginForm, RegisterForm } from './src/components/AuthForms.js';
import { handleSignIn, handleSignUp, handleSignOut } from './src/services/auth.js';
import { generateCV } from './src/services/cv.js';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
let currentPage = 'cv-generator';
let generatedCV = null;
let jobMatches = null;

// Utility to display a modal
function showAuthModal(content) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
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
    <header class="bg-purple-600 text-white py-4 shadow-md">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Aspire AI Hub</h1>
        <div id="auth-buttons" class="space-x-4">
          <button id="login" class="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            Login
          </button>
          <button id="signup" class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Sign Up
          </button>
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
        try {
          const email = loginForm.querySelector('#login-email').value;
          const password = loginForm.querySelector('#login-password').value;
          await handleSignIn(email, password);
          modal.remove();
        } catch (error) {
          alert(error.message);
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
        try {
          const email = registerForm.querySelector('#register-email').value;
          const password = registerForm.querySelector('#register-password').value;
          const confirmPassword = registerForm.querySelector('#register-confirm-password').value;

          if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
          }

          await handleSignUp(email, password);
          modal.remove();
        } catch (error) {
          alert(error.message);
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
      try {
        const formData = {
          fullName: cvForm.querySelector('#fullName').value,
          address: cvForm.querySelector('#address').value,
          contactInfo: cvForm.querySelector('#contactInfo').value,
          jobType: cvForm.querySelector('#jobType').value || null,
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
        jobMatches = await fetchJobs(formData.cvType);

        currentPage = 'cv-result';
        renderPage();
      } catch (error) {
        alert('Error generating CV: ' + error.message);
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
        <span class="mr-4">Welcome, ${user.email}</span>
        <button id="logout" class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Logout
        </button>
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
