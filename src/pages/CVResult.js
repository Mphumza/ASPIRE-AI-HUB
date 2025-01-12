
import jsPDF from 'jspdf';

const downloadCV = () => {
  const doc = new jsPDF();
  
  doc.html(document.querySelector('.cv-content'), {
    callback: function (doc) {
   
      doc.save('CV.pdf');
    },
    x: 10,
    y: 10,
  });
};

export function CVResult(cvData) {
  if (!cvData) {
    return `
      <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">No CV Generated</h1>
          <p class="text-gray-600">Please generate your CV first.</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-md p-8 mb-6">
            <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">
              Curriculum Vitae
            </h1>
            <div class="w-full border-t-4 border-purple-600 mb-4"></div>
            <div class="prose max-w-none justify-around cv-content">
              ${cvData.html}
            </div>
          </div>

          <div class="flex space-x-4">
            <button id="download-cv" 
              class="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Download CV
            </button>
            <button id="view-matches" 
              class="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
              View Job Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.getElementById('download-cv')?.addEventListener('click', downloadCV);

