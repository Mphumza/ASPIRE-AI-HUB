import jsPDF from 'jspdf';
function formatCVContent(html, formData) {
  return `
  <div class="cv-document">
      <!-- Header Section -->
      <div class="cv-header text-center mb-8 pb-6 border-b-2 border-gray-300">
        <!-- Name -->
        <h1 class="text-4xl font-bold text-gray-900 mb-2 text-center">
          ${formData?.fullName || 'Your Name'}
        </h1>
        
        <!-- Blue design line under name -->
        <div class="w-24 h-1 mx-auto bg-blue-500 mb-4"></div>
        
        <!-- Contact Info -->
        <div class="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-700">
          ${formData?.contactInfo ? `<span class="flex items-center gap-1"> Contact: ${formData.contactInfo}</span>` : ''}
          ${formData?.address ? `<span class="flex items-center gap-1"> Location: ${formData.address}</span>` : ''}
        </div>
      </div>

      <!-- CV Content -->
      <div class="cv-body text-justify leading-relaxed">
        ${html}
      </div>
    </div>
  `;
}

export function downloadCVAsPDF(formData) {
  const cvElement = document.querySelector('.cv-content .cv-document') || document.querySelector('.cv-content');
  if (!cvElement) {
    alert('CV content not found');
    return;
  }

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 10;
  const usableWidth = pageWidth - margin * 2;
  let y = margin;

  doc.setFont('helvetica');

  const nameEl = cvElement.querySelector('.cv-header h1');
  const name = (formData?.fullName) || (nameEl && nameEl.textContent.trim()) || 'Your Name';
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(name, pageWidth / 2, y + 8, { align: 'center' });
  y += 14;

  const subtitle = formData?.cvType ? `${formData.cvType.charAt(0).toUpperCase() + formData.cvType.slice(1)}` : '';
  if (subtitle) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(subtitle, pageWidth / 2, y, { align: 'center' });
    y += 8;
  }

  const contactParts = [];
  if (formData?.contactInfo) contactParts.push(formData.contactInfo);
  if (formData?.address) contactParts.push(formData.address);
  const contactLine = contactParts.join(' | ');
  if (contactLine) {
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
    y += 10;
  }

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  function drawJustifiedText(text, x, maxWidth) {
    const lines = doc.splitTextToSize(text.replace(/\s+/g, ' ').trim(), maxWidth);
    lines.forEach((line, idx) => {
      if (y > pageHeight - 25) { doc.addPage(); y = margin; }
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);

      if (idx === lines.length - 1) {
        doc.text(line, x, y, { align: 'left' });
      } else {
        const words = line.split(' ').filter(Boolean);
        const lineWidth = doc.getTextWidth(line);
        const gaps = Math.max(words.length - 1, 1);
        const extraSpace = (maxWidth - lineWidth) / gaps;
        let cursor = x;
        words.forEach((w, wi) => {
          doc.text(w, cursor, y, { align: 'left' });
          const wWidth = doc.getTextWidth(w);
          const normalSpace = doc.getTextWidth(' ');
          cursor += wWidth + normalSpace + extraSpace;
        });
      }
      y += 5;
    });
    y += 2;
  }

  function renderTextNode(text, options = {}) {
    const t = (text || '').replace(/\s+/g, ' ').trim();
    if (!t) return;
    const useJustify = !!options.justify;
    const x = options.x ?? margin;
    const width = options.width ?? usableWidth;
    const bold = !!options.bold;
    const italic = !!options.italic;

    let fontStyle = 'normal';
    if (bold && italic) fontStyle = 'bolditalic';
    else if (bold) fontStyle = 'bold';
    else if (italic) fontStyle = 'italic';

    if (useJustify) {
    
      const lines = doc.splitTextToSize(t, width);
      lines.forEach((line, idx) => {
        if (y > pageHeight - 25) { doc.addPage(); y = margin; }
        doc.setFontSize(10);
        doc.setFont('helvetica', fontStyle);
        doc.setTextColor(40, 40, 40);
        if (idx === lines.length - 1) doc.text(line, x, y, { align: 'left' });
        else {
      
          const words = line.split(' ').filter(Boolean);
          const lineWidth = doc.getTextWidth(line);
          const gaps = Math.max(words.length - 1, 1);
          const extraSpace = (width - lineWidth) / gaps;
          let cursor = x;
          words.forEach((w) => {
            doc.text(w, cursor, y, { align: 'left' });
            const wWidth = doc.getTextWidth(w);
            const normalSpace = doc.getTextWidth(' ');
            cursor += wWidth + normalSpace + extraSpace;
          });
        }
        y += 5;
      });
      y += 2;
    } else {
      const lines = doc.splitTextToSize(t, width);
      lines.forEach(line => {
        if (y > pageHeight - 25) { doc.addPage(); y = margin; }
        doc.setFontSize(10);
        doc.setFont('helvetica', fontStyle);
        doc.setTextColor(40, 40, 40);
        doc.text(line, x, y, { align: 'left' });
        y += 5;
      });
      y += 2;
    }
  }

  function traverse(node, opts = {}) {
    const xOffset = opts.x ?? margin;
    const width = opts.width ?? usableWidth;

    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {

      let bold = false;
      let italic = false;
      let cur = node.parentNode;
      while (cur && cur.nodeType === Node.ELEMENT_NODE) {
        const t = cur.tagName;
        if (t === 'STRONG' || t === 'B') bold = true;
        if (t === 'EM' || t === 'I') italic = true;
        cur = cur.parentNode;
      }
      renderTextNode(node.textContent || '', { bold, italic, x: xOffset, width });
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.tagName;
    if (tag === 'STYLE' || tag === 'SCRIPT') return;

   if (/H[1-6]/.test(tag)) {
  const text = node.textContent.trim();
  if (!text) return;
   y += 3;

  doc.setFontSize(tag === 'H2' ? 12 : 11);
  doc.setFont('helvetica', 'bold');

  doc.setTextColor(60, 120, 200);

  const split = doc.splitTextToSize(text.toUpperCase(), usableWidth);

  split.forEach(line => {
    if (y > pageHeight - 25) { doc.addPage(); y = margin; }
    doc.text(line, margin, y);
    y += 5;
  });

  doc.setDrawColor(180, 200, 230);
  doc.setLineWidth(0.3);
  doc.line(margin, y - 2, pageWidth - margin, y - 2);

  y += 5;
  return;
}
    if (tag === 'P') {
      const text = node.textContent.trim();
      if (!text) return;

      let prev = node.previousElementSibling;
      let belongsToSummary = false;
      while (prev) {
        if (/H[1-6]/.test(prev.tagName)) {
          const htxt = (prev.textContent || '').toLowerCase();
          if (htxt.includes('professional summary')) belongsToSummary = true;
          break;
        }
        prev = prev.previousElementSibling;
      }

      if (belongsToSummary) {
        renderTextNode(text, { justify: true, x: margin, width: usableWidth });
      } else {
        renderTextNode(text);
      }
      return;
    }

    if (tag === 'DIV' || tag === 'SECTION' || tag === 'MAIN') {

  if (node.classList && node.classList.contains('cv-header')) {
    return;
  }

  Array.from(node.childNodes).forEach(child => traverse(child));
  return;
}

    if (tag === 'UL' || tag === 'OL') {
      const items = Array.from(node.children).filter(ch => ch.tagName === 'LI');
      items.forEach(li => {
        if (!li.textContent.trim()) return;
        if (y > pageHeight - 25) { doc.addPage(); y = margin; }
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 40, 40);
        doc.text('•', margin + 2, y);

        traverse(li, { x: margin + 8, width: usableWidth - 8 });

        y += 2; 
      });
      y += 2; 
      return;
    }

    Array.from(node.childNodes).forEach(child => traverse(child, { x: xOffset, width }));
  }

  traverse(cvElement);

  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(130, 130, 130);
    doc.text(`Page ${i} of ${totalPages} — Ispani`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  }

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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button id="download-cv" 
              class="bg-white border-2 border-gray-300 text-gray-800 py-5 px-8 rounded-2xl font-bold hover:shadow-lg hover:border-gray-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Download as PDF</span>
            </button>
            <button id="practice-interview" 
              class="bg-white border-2 border-gray-300 text-gray-800 py-5 px-8 rounded-2xl font-bold hover:shadow-lg hover:border-gray-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8m8-8v8M3 21h18" />
              </svg>
              <span>Practice Interview</span>
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
