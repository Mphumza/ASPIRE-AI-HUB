export function AccountSettings(userData = {}) {
  const email = userData.email || '';
  const displayName = userData.displayName || '';
  const isSubscribed = userData.subscription?.isActive || false;
  const subscribedAt = userData.subscription?.subscribedAt 
    ? new Date(userData.subscription.subscribedAt).toLocaleDateString() 
    : null;
  const expiresAt = userData.subscription?.expiresAt 
    ? new Date(userData.subscription.expiresAt).toLocaleDateString() 
    : null;
  const cvCount = userData.usage?.cvGenerations || 0;
  const interviewCount = userData.usage?.interviewSessions || 0;

  return `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Header -->
          <div class="mb-8">
            <button id="back-to-dashboard" class="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-4 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Dashboard
            </button>
            <h1 class="text-3xl font-bold text-gray-900">Account Settings</h1>
            <p class="text-gray-600 mt-2">Manage your profile and subscription</p>
          </div>

          <!-- Profile Section -->
          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              Profile Information
            </h2>
            
            <form id="profile-form" class="space-y-5">
              <div>
                <label for="displayName" class="block text-sm font-semibold text-gray-700 mb-2">Display Name</label>
                <input type="text" id="displayName" value="${displayName}" placeholder="Enter your name"
                  class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" value="${email}" placeholder="Enter your email"
                  class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
                <p class="mt-2 text-sm text-gray-500">Changing your email will require re-verification</p>
              </div>
              
              <button type="submit" id="save-profile"
                class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg">
                Save Changes
              </button>
            </form>
          </div>

          <!-- Subscription Section -->
          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              Subscription
            </h2>
            
            ${isSubscribed ? `
              <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-green-800">Premium Plan Active</h3>
                    <p class="text-green-600 text-sm">R50/month • Unlimited access</p>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="text-gray-500">Subscribed on:</span>
                    <span class="font-medium text-gray-700 ml-2">${subscribedAt}</span>
                  </div>
                  <div>
                    <span class="text-gray-500">Renews on:</span>
                    <span class="font-medium text-gray-700 ml-2">${expiresAt}</span>
                  </div>
                </div>
              </div>
              
              <button id="cancel-subscription" 
                class="w-full border-2 border-red-200 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl font-semibold transition-all">
                Cancel Subscription
              </button>
            ` : `
              <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800">Free Plan</h3>
                    <p class="text-gray-500 text-sm">Limited features</p>
                  </div>
                </div>
                <p class="text-gray-600 text-sm">
                  Upgrade to Premium for unlimited CV generations and interview coaching sessions.
                </p>
              </div>
              
              <a id="upgrade-subscription" href="#"
                class="block w-full text-center bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.01] transition-all">
                Upgrade to Premium — R50/month
              </a>
            `}
          </div>

          <!-- Usage Stats Section -->
          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              Usage Statistics
            </h2>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-xl p-5 text-center">
                <div class="text-3xl font-bold text-primary-600 mb-1">${cvCount}</div>
                <div class="text-gray-600 text-sm">CVs Generated</div>
              </div>
              <div class="bg-gray-50 rounded-xl p-5 text-center">
                <div class="text-3xl font-bold text-accent-600 mb-1">${interviewCount}</div>
                <div class="text-gray-600 text-sm">Interview Sessions</div>
              </div>
            </div>
          </div>

          <!-- Danger Zone -->
          <div class="bg-white rounded-2xl p-8 border border-red-200 shadow-sm">
            <h2 class="text-xl font-bold text-red-600 mb-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              Danger Zone
            </h2>
            <p class="text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button id="delete-account" 
              class="border-2 border-red-300 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl font-semibold transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
