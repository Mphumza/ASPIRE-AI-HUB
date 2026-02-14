
import jsPDF from 'jspdf';

// Format CV HTML for better display
function formatCVContent(html, formData) {
  return `
    <div class="cv-document">
      <!-- Header Section -->
      <div class="cv-header text-center mb-8 pb-6 border-b-2 border-gray-300">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">${formData?.fullName || 'Your Name'}</h1>
        <p class="text-lg text-gray-600">${formData?.cvType ? formData.cvType.charAt(0).toUpperCase() + formData.cvType.slice(1) + ' Professional' : 'Professional'}</p>
        <div class="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-700">
          ${formData?.contactInfo ? `<span class="flex items-center gap-1">📧 ${formData.contactInfo}</span>` : ''}
          ${formData?.address ? `<span class="flex items-center gap-1">📍 ${formData.address}</span>` : ''}
        </div>
      </div>

      <!-- CV Content -->
      <div class="cv-body text-justify leading-relaxed">
        ${html}
      </div>
    </div>
  `;
}

// Download CV as PDF
export function downloadCVAsPDF(formData) {
  const cvContent = document.querySelector('.cv-content');
  if (!cvContent) {
    alert('CV content not found');
    return;
  }

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Set default font
  doc.setFont('helvetica');

  // Header with name
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(51, 51, 51);
  const name = formData?.fullName || 'Professional CV';
  doc.text(name, pageWidth / 2, yPosition + 10, { align: 'center' });
  yPosition += 18;

  // Subtitle
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  const subtitle = formData?.cvType ? `${formData.cvType.charAt(0).toUpperCase() + formData.cvType.slice(1)} Professional` : 'Professional';
  doc.text(subtitle, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 8;

  // Contact Info
  if (formData?.contactInfo || formData?.address) {
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    const contactInfo = [formData?.contactInfo, formData?.address].filter(Boolean).join(' | ');
    doc.text(contactInfo, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;
  }

  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Get text content from CV
  const cvText = cvContent.innerText || cvContent.textContent;
  const sections = cvText.split(/\n(?=[A-Z][A-Za-z\s]+:?$)/gm);

  sections.forEach((section, index) => {
    if (!section.trim()) return;

    const lines = section.split('\n').filter(line => line.trim());
    
    lines.forEach((line, lineIndex) => {
      // Check for page break
      if (yPosition > pageHeight - 25) {
        doc.addPage();
        yPosition = margin;
      }

      const trimmedLine = line.trim();
      
      // Check if it's a section header (all caps or ends with colon)
      const isHeader = /^[A-Z\s&]+:?$/.test(trimmedLine) || 
                       /^(Summary|Experience|Education|Skills|Certifications|Awards|Contact|Professional|Achievements|Projects|Languages|References)/i.test(trimmedLine);
      
      if (isHeader && trimmedLine.length > 2) {
        yPosition += 4;
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(102, 126, 234); // Primary color
        doc.text(trimmedLine.replace(':', '').toUpperCase(), margin, yPosition);
        yPosition += 2;
        
        // Underline for headers
        doc.setDrawColor(102, 126, 234);
        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, margin + 50, yPosition);
        yPosition += 6;
      } else if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
        // Bullet points
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        
        const bulletText = trimmedLine.replace(/^[•\-\*]\s*/, '');
        const wrappedLines = doc.splitTextToSize(bulletText, contentWidth - 10);
        
        wrappedLines.forEach((wLine, wIndex) => {
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
          }
          if (wIndex === 0) {
            doc.text('•', margin + 2, yPosition);
          }
          doc.text(wLine, margin + 8, yPosition);
          yPosition += 5;
        });
      } else if (trimmedLine) {
        // Regular text
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        
        const wrappedLines = doc.splitTextToSize(trimmedLine, contentWidth);
        wrappedLines.forEach(wLine => {
          if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = margin;
          }
          doc.text(wLine, margin, yPosition);
          yPosition += 5;
        });
      }
    });
    
    yPosition += 3;
  });

  // Footer
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    doc.text('Generated by Aspire AI Hub', pageWidth / 2, pageHeight - 6, { align: 'center' });
  }

  // Save the PDF
  const fileName = formData?.fullName ? `${formData.fullName.replace(/\s+/g, '_')}_CV.pdf` : 'Professional_CV.pdf';
  doc.save(fileName);
}

export function CVResult(cvData) {
  if (!cvData) {
    return `
      <div class="min-h-screen py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div class="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-6">
              <span class="text-4xl">📄</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">No CV Generated Yet</h1>
            <p class="text-gray-600 text-lg">Let's create your professional CV to get started!</p>
          </div>
        </div>
      </div>
    `;
  }

  const formattedCV = formatCVContent(cvData.html, cvData.formData);

  return `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Success Banner -->
          <div class="bg-gray-800 rounded-3xl p-8 mb-8 text-center border border-gray-700">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-electric-500 mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-white mb-2">Your CV is Ready! 🎉</h2>
            <p class="text-gray-300 text-lg">Professionally crafted and ready to impress employers</p>
          </div>

          <!-- CV Display -->
          <div class="bg-white rounded-3xl p-10 mb-8 border border-gray-200 shadow-sm" id="cv-container">
            <div class="cv-content bg-white rounded-2xl p-8 shadow-inner" style="min-height: 600px;">
              <!-- CV Styles -->
              <style>
                .cv-document { font-family: 'Georgia', 'Times New Roman', serif; color: #333; }
                .cv-document h1 { font-size: 2rem; margin-bottom: 0.5rem; }
                .cv-document h2 { font-size: 1.25rem; color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 0.5rem; margin-top: 1.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
                .cv-document h3 { font-size: 1.1rem; color: #444; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: 600; }
                .cv-document p { text-align: justify; margin-bottom: 0.75rem; line-height: 1.7; }
                .cv-document ul { list-style-type: none; padding-left: 0; margin-bottom: 1rem; }
                .cv-document ul li { position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; text-align: justify; line-height: 1.6; }
                .cv-document ul li:before { content: "▸"; position: absolute; left: 0; color: #667eea; font-weight: bold; }
                .cv-document strong { color: #333; font-weight: 600; }
                .cv-document em { font-style: italic; color: #666; }
                .cv-body { text-align: justify; }
                .cv-body > * { margin-bottom: 1rem; }
              </style>
              ${formattedCV}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button id="download-cv" 
              class="bg-white border-2 border-gray-300 text-gray-800 py-5 px-8 rounded-2xl font-bold hover:shadow-lg hover:border-gray-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Download as PDF</span>
            </button>
            <button id="view-matches" 
              class="bg-primary-600 hover:bg-primary-700 text-white py-5 px-8 rounded-2xl font-bold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>View Job Matches</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


document.getElementById('download-cv')?.addEventListener('click', downloadCV);

