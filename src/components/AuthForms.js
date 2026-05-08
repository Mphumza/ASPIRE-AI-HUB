export function LoginForm() {
  return `
    <div class="bg-white rounded-3xl p-10 max-w-md w-full mx-4 border border-gray-200 shadow-xl modal-content">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p class="text-gray-600">Sign in to continue your journey</p>
      </div>
      <form id="login-form" class="space-y-5">
        <div>
          <label for="login-email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input type="email" id="login-email" required
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <label for="login-password" class="block text-sm font-semibold text-gray-700">Password</label>
            <button type="button" id="show-forgot-password" class="text-xs text-primary-600 hover:text-primary-700 font-semibold">Forgot password?</button>
          </div>
          <input type="password" id="login-password" required
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <button type="submit" 
          class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02]">
          Sign In
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Don't have an account? 
        <button id="show-register" class="text-primary-600 hover:text-primary-700 font-bold">Create one now</button>
      </p>
    </div>
  `;
}

export function RegisterForm() {
  return `
    <div class="bg-white rounded-3xl p-10 max-w-md w-full mx-4 border border-gray-200 shadow-xl modal-content">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Join Ispani AI</h2>
        <p class="text-gray-600">Start your career transformation today</p>
      </div>
      <form id="register-form" class="space-y-5">
        <div>
          <label for="register-email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input type="email" id="register-email" required
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <div>
          <label for="register-password" class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input type="password" id="register-password" required minlength="6"
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <div>
          <label for="register-confirm-password" class="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
          <input type="password" id="register-confirm-password" required minlength="6"
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <button type="submit" 
          class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02]">
          Create Account
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account? 
        <button id="show-login" class="text-primary-600 hover:text-primary-700 font-bold">Sign in</button>
      </p>
    </div>
  `;
}

export function ForgotPasswordForm() {
  return `
    <div class="bg-white rounded-3xl p-10 max-w-md w-full mx-4 border border-gray-200 shadow-xl modal-content">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600 mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
        <p class="text-gray-600">Enter your email and we'll send you a reset link</p>
      </div>
      <form id="forgot-password-form" class="space-y-5">
        <div>
          <label for="forgot-email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input type="email" id="forgot-email" required
            class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
        </div>
        <button type="submit"
          class="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02]">
          Send Reset Link
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Remember your password?
        <button id="show-login-from-forgot" class="text-primary-600 hover:text-primary-700 font-bold">Sign in</button>
      </p>
    </div>
  `;
}