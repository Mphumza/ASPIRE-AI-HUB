export function JobMatches({ jobs }) {
  // Handle the case where there are no job matches
  if (!jobs || jobs.length === 0) {
    return `
      <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">No Job Matches Found</h1>
          <p class="text-gray-600">Please generate your CV first to see matching jobs.</p>
        </div>
      </div>
    `;
  }

  // Render job matches
  return `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Your Job Matches</h1>
            <button id="back-to-cv" 
              class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Back to CV
            </button>
          </div>
          
          <div class="space-y-6">
            ${jobs.map(job => `
              <div class="bg-white rounded-lg shadow-md p-6">
                <!-- Job Header -->
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800">${job.title}</h2>
                    <p class="text-purple-600">${job.company}</p>
                  </div>
                  <div class="flex gap-2">
                    ${job.remote ? `
                      <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                    ` : ''}
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      ${job.type}
                    </span>
                  </div>
                </div>
                
                <!-- Job Details -->
                <div class="mb-4">
                  <p class="text-gray-600">📍 ${job.location || 'Not Specified'}</p>
                  <p class="text-gray-600">💰 ${job.salary || 'Negotiable'}</p>
                </div>

                <!-- Job Description -->
                <div class="mb-4">
                  <p class="text-gray-700">${job.description || 'No description provided.'}</p>
                </div>

                <!-- Match Analysis -->
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 class="font-semibold text-gray-800 mb-2">Match Analysis</h3>
                  <pre class="whitespace-pre-wrap text-gray-700 font-mono text-sm">
${job.matchAnalysis || 'No match analysis available.'}
                  </pre>
                </div>

                <!-- Job Requirements -->
                <div class="flex flex-wrap gap-2 mb-4">
                  ${job.requirements && job.requirements.length > 0 ? job.requirements.map(req => `
                    <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      ${req}
                    </span>
                  `).join('') : '<p class="text-gray-600">No specific requirements listed.</p>'}
                </div>

                <!-- Apply Button -->
                <div class="border-t pt-4 flex justify-end">
                  <a href="${job.url}" target="_blank" rel="noopener noreferrer"
                    class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Apply Now
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
