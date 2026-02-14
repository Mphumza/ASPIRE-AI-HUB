export function JobMatches({ jobs }) {
  // Handle the case where there are no job matches
  if (!jobs || jobs.length === 0) {
    return `
      <div class="min-h-screen py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div class="w-20 h-20 rounded-2xl bg-accent-600 flex items-center justify-center mx-auto mb-6">
              <span class="text-4xl">💼</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">No Job Matches Yet</h1>
            <p class="text-gray-600 text-lg">Generate your CV first to discover amazing opportunities!</p>
          </div>
        </div>
      </div>
    `;
  }

  // Render job matches
  return `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="bg-white rounded-3xl p-8 mb-8 border border-gray-200 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 class="text-4xl font-black text-gray-900 mb-2">Your Perfect Matches</h1>
                <p class="text-gray-600 text-lg">Found ${jobs.length} opportunities tailored for you</p>
              </div>
              <button id="back-to-cv" 
                class="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back to CV</span>
              </button>
            </div>
          </div>
          
          <!-- Job Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${jobs.map((job, index) => `
              <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all" style="animation-delay: ${index * 0.1}s">
                <!-- Job Header -->
                <div class="flex justify-between items-start mb-4">
                  <div class="flex-1">
                    <h2 class="text-2xl font-bold text-gray-900 mb-1">${job.title}</h2>
                    <p class="text-primary-600 font-semibold text-lg">${job.company}</p>
                  </div>
                </div>
                
                <!-- Job Details -->
                <div class="space-y-2 mb-5">
                  <p class="text-gray-700 flex items-center gap-2">
                    <span class="text-lg">📍</span>
                    <span class="font-medium">${job.location || 'Location not specified'}</span>
                  </p>
                  ${job.salary ? `
                  <p class="text-gray-700 flex items-center gap-2">
                    <span class="text-lg">💰</span>
                    <span class="font-medium">${job.salary}</span>
                  </p>
                  ` : ''}
                </div>

                <!-- Job Description -->
                <div class="mb-5">
                  <p class="text-gray-600 line-clamp-3">${job.description || 'No description available.'}</p>
                </div>

                ${job.tags && job.tags.length > 0 ? `
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-5">
                  ${job.tags.slice(0, 4).map(tag => `
                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold">
                      ${tag}
                    </span>
                  `).join('')}
                  ${job.tags.length > 4 ? `<span class="text-gray-500 text-xs">+${job.tags.length - 4} more</span>` : ''}
                </div>
                ` : ''}

                <!-- Apply Button -->
                <div class="border-t border-gray-200 pt-4">
                  <a href="${job.url}" target="_blank" rel="noopener noreferrer"
                    class="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02] text-center">
                    Apply Now →
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
