export function JobCard({ job }) {
  return `
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="font-semibold text-xl text-gray-800">${job.title}</h3>
          <p class="text-purple-600 font-medium">${job.company}</p>
        </div>
        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
          ${job.type}
        </span>
      </div>
      <div class="mb-4">
        <p class="text-gray-600">📍 ${job.location}</p>
        <p class="text-gray-600">💰 ${job.salary}</p>
      </div>
      <p class="text-gray-700 mb-4">${job.description}</p>
      <div class="border-t pt-4">
        <button class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
          Apply Now
        </button>
      </div>
    </div>
  `;
}