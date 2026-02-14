export function JobCard({ job }) {
  return `
    <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
      <div class="flex justify-between items-start mb-4">
        <div class="flex-1">
          <h3 class="font-bold text-xl text-gray-900 mb-1">${job.title}</h3>
          <p class="text-primary-600 font-semibold text-lg">${job.company}</p>
        </div>
        <span class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ml-3">
          ${job.type || 'Full-time'}
        </span>
      </div>
      <div class="space-y-2 mb-4">
        <p class="text-gray-700 flex items-center gap-2">
          <span class="text-lg">📍</span>
          <span class="font-medium">${job.location}</span>
        </p>
        ${job.salary ? `
        <p class="text-gray-700 flex items-center gap-2">
          <span class="text-lg">💰</span>
          <span class="font-medium">${job.salary}</span>
        </p>
        ` : ''}
      </div>
      <p class="text-gray-600 mb-5 line-clamp-3">${job.description}</p>
      ${job.tags && job.tags.length > 0 ? `
      <div class="flex flex-wrap gap-2 mb-5">
        ${job.tags.map(tag => `
          <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold">
            ${tag}
          </span>
        `).join('')}
      </div>
      ` : ''}
      <div class="border-t border-gray-200 pt-4">
        <a href="${job.url}" target="_blank" class="block">
          <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all w-full transform hover:scale-[1.02]">
            Apply Now →
          </button>
        </a>
      </div>
    </div>
  `;
}