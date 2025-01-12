export function LoginForm() {
  return `
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      <form id="login-form" class="space-y-4">
        <div>
          <label for="login-email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="login-email" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <div>
          <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="login-password" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <button type="submit" 
          class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
          Login
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? 
        <button id="show-register" class="text-purple-600 hover:text-purple-700">Register</button>
      </p>
    </div>
  `;
}

export function RegisterForm() {
  return `
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Register</h2>
      <form id="register-form" class="space-y-4">
        <div>
          <label for="register-email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="register-email" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <div>
          <label for="register-password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="register-password" required minlength="6"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <div>
          <label for="register-confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="register-confirm-password" required minlength="6"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <button type="submit" 
          class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
          Register
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account? 
        <button id="show-login" class="text-purple-600 hover:text-purple-700">Login</button>
      </p>
    </div>
  `;
}