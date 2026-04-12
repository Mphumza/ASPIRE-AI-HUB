import jsPDF from 'jspdf';
function formatCVContent(html, formData) {
  return `
  <div class="cv-document">
      
      <!-- Header Section -->
      <div class="cv-header text-center mb-8 pb-6 border-b-2 border-gray-300">
        
        <!-- Name (EDITABLE) -->
        <h1 class="text-4xl font-bold text-gray-900 mb-2 text-center" contenteditable="true">
          ${formData?.fullName || 'Your Name'}
        </h1>
        
        <!-- Blue line -->
        <div class="w-24 h-1 mx-auto bg-blue-500 mb-4"></div>
        
        <!-- Contact Info (EDITABLE) -->
        <div class="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-700 cv-contact-info">
          
          <span class="editable-contact" contenteditable="true">
            ${formData?.contactInfo || 'Your contact info'}
          </span>

          <span class="editable-address" contenteditable="true">
            ${formData?.address || 'Your address'}
          </span>

        </div>
      </div>

      <!-- CV Content -->
      <div class="cv-body text-justify leading-relaxed">
        ${html}
      </div>
    </div>
  `;
}
export function removeEmptySections(html) {
  const container = document.createElement('div');
  container.innerHTML = html;

  const headers = container.querySelectorAll('h2');

  headers.forEach(header => {
    let next = header.nextElementSibling;
    let hasContent = false;

    while (next && next.tagName !== 'H2') {
      if (next.textContent.trim() !== '') {
        hasContent = true;
        break;
      }
      next = next.nextElementSibling;
    }

    // If no content → remove header + its section
    if (!header.textContent.trim() && !hasContent) {
      next = header.nextElementSibling;
      header.remove();

      while (next && next.tagName !== 'H2') {
        const temp = next.nextElementSibling;
        next.remove();
        next = temp;
      }
    }
  });

  return container.innerHTML;
  }
export function downloadCVAsPDF(formData) {
  const editableContainer = document.getElementById('editable-cv');
  const cvElement = editableContainer?.querySelector('.cv-document') || document.querySelector('.cv-content .cv-document') || document.querySelector('.cv-content');
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

  // Thin underline, tight to baseline (professional look)
  const UNDERLINE_GAP_MM = 0.35;
  const UNDERLINE_STROKE_MM = 0.12;

  doc.setFont('helvetica');

  /** Inline styles from semantic tags / explicit underline only (not whole-block inherited bold) */
  function styleFromTextNode(textNode) {
    let bold = false;
    let italic = false;
    let underline = false;
    let cur = textNode.parentNode;
    while (cur && cur.nodeType === Node.ELEMENT_NODE) {
      const t = cur.tagName;
      if (t === 'STRONG' || t === 'B') bold = true;
      if (t === 'EM' || t === 'I') italic = true;
      if (t === 'U') underline = true;
      const st = cur.style;
      if (st) {
        if (st.textDecoration?.includes('underline') || st.textDecorationLine?.includes('underline')) {
          underline = true;
        }
      }
      cur = cur.parentNode;
    }
    return { bold, italic, underline };
  }

  function collectTextSegments(root) {
    const segments = [];
    function walk(n) {
      if (!n) return;
      if (n.nodeType === Node.TEXT_NODE) {
        const text = n.textContent ?? '';
        if (text === '') return;
        segments.push({ text, ...styleFromTextNode(n) });
        return;
      }
      if (n.nodeType !== Node.ELEMENT_NODE) return;
      if (n.tagName === 'STYLE' || n.tagName === 'SCRIPT') return;
      Array.from(n.childNodes).forEach(walk);
    }
    walk(root);
    return segments;
  }

  function mergeAdjacentSegments(segments) {
    const out = [];
    for (const seg of segments) {
      if (!seg.text) continue;
      const prev = out[out.length - 1];
      if (
        prev &&
        prev.bold === seg.bold &&
        prev.italic === seg.italic &&
        prev.underline === seg.underline
      ) {
        prev.text += seg.text;
      } else {
        out.push({ text: seg.text, bold: seg.bold, italic: seg.italic, underline: seg.underline });
      }
    }
    return out;
  }

  /** Draw one horizontal line with per-run bold/italic/underline; centered on page */
  function drawRichLineCentered(segments, yPos, fontSize, rgb) {
    const merged = mergeAdjacentSegments(segments);
    if (!merged.length) return;
    doc.setFontSize(fontSize);
    let totalW = 0;
    merged.forEach((seg) => {
      let fs = 'normal';
      if (seg.bold && seg.italic) fs = 'bolditalic';
      else if (seg.bold) fs = 'bold';
      else if (seg.italic) fs = 'italic';
      doc.setFont('helvetica', fs);
      totalW += doc.getTextWidth(seg.text);
    });
    let x = pageWidth / 2 - totalW / 2;
    merged.forEach((seg) => {
      let fs = 'normal';
      if (seg.bold && seg.italic) fs = 'bolditalic';
      else if (seg.bold) fs = 'bold';
      else if (seg.italic) fs = 'italic';
      doc.setFont('helvetica', fs);
      doc.setTextColor(rgb[0], rgb[1], rgb[2]);
      doc.text(seg.text, x, yPos);
      const w = doc.getTextWidth(seg.text);
      if (seg.underline) {
        doc.setDrawColor(45, 45, 45);
        doc.setLineWidth(UNDERLINE_STROKE_MM);
        doc.line(x, yPos + UNDERLINE_GAP_MM, x + w, yPos + UNDERLINE_GAP_MM);
      }
      x += w;
    });
  }

  // Name: preserve B/I/U per word from live DOM only
  const nameEl = cvElement.querySelector('.cv-header h1');
  const nameFallback = (formData?.fullName || 'Your Name').trim();
  const nameY = y + 10;
  if (nameEl && nameEl.textContent.trim()) {
    const nameSegments = collectTextSegments(nameEl).map(seg => ({ ...seg, bold: true }));
    if (nameSegments.length) {
      drawRichLineCentered(nameSegments, nameY, 22, [20, 20, 20]);
    }
  } else {
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(20, 20, 20);
    doc.text(nameFallback, pageWidth / 2, nameY, { align: 'center' });
  }
  y = nameY + 14;

  const contactEl = cvElement.querySelector('.editable-contact');
const addressEl = cvElement.querySelector('.editable-address');

const updatedContact = contactEl?.textContent.trim() || '';
const updatedAddress = addressEl?.textContent.trim() || '';

const contactParts = [];
if (updatedContact) contactParts.push(updatedContact);
if (updatedAddress) contactParts.push(updatedAddress);

const contactLine = contactParts.join(' | ');

if (contactLine) {
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  y += 10;
}

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  function fontStyleToken(t) {
    if (t.bold && t.italic) return 'bolditalic';
    if (t.bold) return 'bold';
    if (t.italic) return 'italic';
    return 'normal';
  }

  function tokenizeMergedSegments(segments) {
    const merged = mergeAdjacentSegments(segments);
    const tokens = [];
    for (const seg of merged) {
      if (!seg.text) continue;
      const parts = seg.text.split(/(\s+)/);
      for (const p of parts) {
        if (p === '') continue;
        tokens.push({
          text: p,
          bold: seg.bold,
          italic: seg.italic,
          underline: seg.underline,
          isSpace: /^\s+$/.test(p),
        });
      }
    }
    return tokens;
  }

  function breakOversizedToken(token, maxW) {
    doc.setFontSize(10);
    doc.setFont('helvetica', fontStyleToken(token));
    if (doc.getTextWidth(token.text) <= maxW) return [token];
    const out = [];
    let buf = '';
    for (const ch of token.text) {
      const test = buf + ch;
      if (doc.getTextWidth(test) <= maxW) buf = test;
      else {
        if (buf) out.push({ ...token, text: buf });
        buf = ch;
      }
    }
    if (buf) out.push({ ...token, text: buf });
    return out;
  }

  function buildWrappedLines(tokens, maxW) {
    const lines = [];
    let line = [];
    let lineW = 0;

    function flushLine() {
      while (line.length && line[0].isSpace) line.shift();
      while (line.length && line[line.length - 1].isSpace) line.pop();
      if (line.length) lines.push([...line]);
      line = [];
      lineW = 0;
    }

    for (const t of tokens) {
      const pieces = breakOversizedToken(t, maxW);
      for (const piece of pieces) {
        doc.setFontSize(10);
        doc.setFont('helvetica', fontStyleToken(piece));
        const pw = doc.getTextWidth(piece.text);

        if (line.length === 0) {
          if (piece.isSpace) continue;
          line.push(piece);
          lineW = pw;
          continue;
        }

        if (lineW + pw <= maxW) {
          line.push(piece);
          lineW += pw;
        } else {
          flushLine();
          if (piece.isSpace) continue;
          line.push(piece);
          lineW = pw;
        }
      }
    }
    flushLine();
    return lines;
  }

  function drawLeftAlignedLine(tokens, x0, y0) {
    let x = x0;
    tokens.forEach((t) => {
      doc.setFontSize(10);
      doc.setFont('helvetica', fontStyleToken(t));
      doc.setTextColor(40, 40, 40);
      doc.text(t.text, x, y0);
      const w = doc.getTextWidth(t.text);
      if (t.underline && !t.isSpace) {
        doc.setLineWidth(UNDERLINE_STROKE_MM);
        doc.setDrawColor(45, 45, 45);
        doc.line(x, y0 + UNDERLINE_GAP_MM, x + w, y0 + UNDERLINE_GAP_MM);
      }
      x += w;
    });
  }

  function drawJustifiedInlineLine(tokens, x0, y0, maxW) {
    const spaceToks = tokens.filter((t) => t.isSpace);
    if (!spaceToks.length) {
      drawLeftAlignedLine(tokens, x0, y0);
      return;
    }
    let total = 0;
    tokens.forEach((t) => {
      doc.setFontSize(10);
      doc.setFont('helvetica', fontStyleToken(t));
      total += doc.getTextWidth(t.text);
    });
    const extra = Math.max(0, maxW - total);
    const addEach = extra / spaceToks.length;
    let x = x0;
    tokens.forEach((t) => {
      doc.setFontSize(10);
      doc.setFont('helvetica', fontStyleToken(t));
      doc.setTextColor(40, 40, 40);
      doc.text(t.text, x, y0);
      const w = doc.getTextWidth(t.text);
      if (t.underline && !t.isSpace) {
        doc.setLineWidth(UNDERLINE_STROKE_MM);
        doc.setDrawColor(45, 45, 45);
        doc.line(x, y0 + UNDERLINE_GAP_MM, x + w, y0 + UNDERLINE_GAP_MM);
      }
      x += w + (t.isSpace ? addEach : 0);
    });
  }

  /** Full <p> with per-run bold/italic/underline; optional justified lines (summary) */
  function renderInlineParagraph(pElement, justify, x0, maxW) {
    const segments = collectTextSegments(pElement);
    if (!segments.length) return;
    const tokens = tokenizeMergedSegments(segments);
    if (!tokens.length) return;
    const lines = buildWrappedLines(tokens, maxW);
    lines.forEach((lineTokens, idx) => {
      if (y > pageHeight - 25) {
        doc.addPage();
        y = margin;
      }
      const isLast = idx === lines.length - 1;
      if (justify && !isLast && lineTokens.length) {
        drawJustifiedInlineLine(lineTokens, x0, y, maxW);
      } else {
        drawLeftAlignedLine(lineTokens, x0, y);
      }
      y += 4.5;
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
    const underline = !!options.underline;

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
        if (idx === lines.length - 1) {
          doc.text(line, x, y, { align: 'left' });
          if (underline) {
            const lineWidth = doc.getTextWidth(line);
            doc.setLineWidth(UNDERLINE_STROKE_MM);
            doc.setDrawColor(45, 45, 45);
            doc.line(x, y + UNDERLINE_GAP_MM, x + lineWidth, y + UNDERLINE_GAP_MM);
          }
        } else {
      
          const words = line.split(' ').filter(Boolean);
          const lineWidth = doc.getTextWidth(line);
          const gaps = Math.max(words.length - 1, 1);
          const extraSpace = (width - lineWidth) / gaps;
          let cursor = x;
          words.forEach((w, wi) => {
            doc.text(w, cursor, y, { align: 'left' });
            if (underline) {
              const wWidth = doc.getTextWidth(w);
              doc.setLineWidth(UNDERLINE_STROKE_MM);
              doc.setDrawColor(45, 45, 45);
              doc.line(cursor, y + UNDERLINE_GAP_MM, cursor + wWidth, y + UNDERLINE_GAP_MM);
            }
            const wWidth = doc.getTextWidth(w);
            const normalSpace = doc.getTextWidth(' ');
            cursor += wWidth + normalSpace + extraSpace;
          });
        }
        y +=4.5;
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
        if (underline) {
          const lineWidth = doc.getTextWidth(line);
          doc.setLineWidth(UNDERLINE_STROKE_MM);
          doc.setDrawColor(45, 45, 45);
          doc.line(x, y + UNDERLINE_GAP_MM, x + lineWidth, y + UNDERLINE_GAP_MM);
        }
        y += 4;
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
      let underline = false;
      let cur = node.parentNode;
      while (cur && cur.nodeType === Node.ELEMENT_NODE) {
        const t = cur.tagName;
        if (t === 'STRONG' || t === 'B') bold = true;
        if (t === 'EM' || t === 'I') italic = true;
        if (t === 'U') underline = true;
        const st = cur.style;
        if (st && (st.textDecoration?.includes('underline') || st.textDecorationLine?.includes('underline'))) {
          underline = true;
        }
        cur = cur.parentNode;
      }
      renderTextNode(node.textContent || '', { bold, italic, underline, x: xOffset, width });
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
    y += 4;
  });

  doc.setDrawColor(180, 200, 230);
  doc.setLineWidth(0.3);
  doc.line(margin, y - 2, pageWidth - margin, y - 2);

  y += 4;
  return;
}
    if (tag === 'P') {
      if (!node.textContent.trim()) return;

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

      renderInlineParagraph(node, belongsToSummary, xOffset, width);
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
    doc.text(`Page ${i} of ${totalPages} `, pageWidth / 2, pageHeight - 10, { align: 'center' });
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

  const formattedCV = cvData.editedHtml
    ? cvData.editedHtml
    : formatCVContent(removeEmptySections(cvData.html), cvData.formData);

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
            <div class="flex flex-wrap gap-2 justify-start mb-4">
              <button id="format-bold" class="px-3 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 font-bold">B</button>
              <button id="format-italic" class="px-3 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 italic">I</button>
              <button id="format-underline" class="px-3 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 underline">U</button>
              <!-- <button id="save-cv" class="px-3 py-2 rounded-xl bg-primary-600 text-white hover:bg-primary-700">Save Edits</button> -->
              <button id="reset-cv" class="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600">Reset Original</button>
            </div>
            <style contenteditable="false">
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
            <div class="cv-content bg-white rounded-2xl p-8 shadow-inner" style="min-height: 600px;" contenteditable="true" id="editable-cv" spellcheck="false">
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

