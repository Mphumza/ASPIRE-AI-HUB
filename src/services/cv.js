import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { auth } from '../config/firebase.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getRecommendedJobs } from './jobMatching.js';


// Initialize Google Generative AI and Firestore
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) throw new Error('Google API key not found in environment variables');

/**

 * @param {string} markdown - 
 * @returns {string} 
 */
export function convertMarkdownToHTML(markdown) {
  let html = markdown

    .replace(/```(?:markdown)?\s*\n?/gi, '')
    .replace(/```/g, '')

    .replace(/^#\s+.+?$/gm, '')
    
    .replace(/\[Your\s+\w+\]/g, '')
    .replace(/\[Optional\]/gi, '')
    
    .replace(/^##\s+(.+?)$/gm, '<h2 class="text-xl font-bold text-blue-600 mt-6 mb-3 pb-2 border-b-2 border-blue-300">$1</h2>')
   
    .replace(/^###\s+(.+?)$/gm, '<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">$1</h3>')
    
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')

    .replace(/\*(.+?)\*/g, '<em class="italic text-gray-700">$1</em>')
    
    .replace(/^\s*[\*\-•]\s+(.+?)$/gm, '<li class="ml-6 mb-2 text-gray-700">$1</li>')
   
    .replace(/(<li class="ml-6 mb-2 text-gray-700">.+?<\/li>(?:\n<li class="ml-6 mb-2 text-gray-700">.+?<\/li>)*)/gs, '<ul class="list-disc list-inside mb-4">$1</ul>')
  
    .replace(/^---\s*$/gm, '')
    
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n')
   
    .split('\n\n')
    .map(para => {
      para = para.trim();
      if (!para) return '';
    
      if (para.startsWith('<')) return para;
      
      return `<p class="text-gray-700 leading-relaxed mb-3">${para}</p>`;
    })
    .join('\n');

  return html;
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
const db = getFirestore();

/**
 * Generates a professional CV and optionally fetches job recommendations.
 * @param {Object} formData - User input data for CV generation.
 * @returns {Object} - Generated CV content and job matches (if available).
 */
export async function generateCV(formData) {
  try {
    // Validate form data
    if (!formData.fullName || !formData.contactInfo || !formData.summary) {
      throw new Error('Missing required fields: Full Name, Contact Info, and Summary are required.');
    }

    if (!formData.skills || formData.skills.length === 0) {
      throw new Error('At least one skill is required.');
    }

    console.log('Starting CV generation...');

    const prompt = `Generate a professional, well-structured CV in markdown format using this information:

**Career Information:**
- CV Type: ${formData.cvType}
- Field: ${formData.field}
- Job Type: ${formData.jobType}

**Content to Include:**
- Professional Summary: ${formData.summary}
- Skills: ${formData.skills.join(', ')}
- Experience: ${formData.experience}
- Education: ${formData.education}
- Certifications: ${formData.certifications || ''}
- Awards: ${formData.awards || ''}
 - References: ${formData.references || ''}

**CRITICAL - DO NOT INCLUDE:**
- DO NOT include a "# [Your Name]" header or any single # header at the top
- DO NOT include any name/contact information headers
- DO NOT include placeholder text like "[Your Name]", "[Your Phone Number]", "[Your Email]", "[Your LinkedIn Profile URL]", "[Your Portfolio/Website]"
- The header section will be added automatically by the system
- START DIRECTLY with "## Professional Summary"

**VERY IMPORTANT:**
- ONLY include sections if they contain real, meaningful content
- If a section has no data or is empty, DO NOT include that section at all
- DO NOT write "N/A" anywhere in the CV

**IMPORTANT FORMATTING REQUIREMENTS:**
1. Use ONLY double hash (##) for section headers - NO single hash (#) headers
2. Structure the CV in this exact order, starting with these exact headers:
   ## Professional Summary
   ## Key Skills
   ## Professional Experience
   ## Education
   ## Certifications & Training (if applicable)
   ## Awards & Recognition (if applicable)
  ## References (if applicable)
   ## Additional Information (if relevant)

3. For the Professional Summary section:
   - Write 3-4 compelling sentences highlighting career objectives and unique value proposition
   - Make it impactful and tailored to the ${formData.cvType} role

4. For Key Skills section:
   - List skills in bullet points, grouped by category if possible
   - Highlight the most relevant skills first

5. For Professional Experience section:
   - Format each role with job title, company, and dates
   - Use bullet points for achievements and responsibilities
   - Include quantifiable results where possible (e.g., "Increased sales by 25%")
   - Start each bullet with strong action verbs

6. For Education section:
   - List degrees, institutions, and graduation dates
   - Include relevant coursework or honors if applicable

7. Make the CV:
   - Professional and formal in tone
   - Concise yet comprehensive
   - ATS-friendly with relevant keywords
   - Tailored for ${formData.cvType} positions in ${formData.field}

Generate a polished, recruiter-ready CV that would stand out in today's competitive job market.`;

    // Use Google Generative AI to create the CV content
    console.log('Sending request to AI model...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const cvContent = response.text();


    console.log('CV generated successfully, fetching job matches...');

    let jobMatches = [];
    try {
      jobMatches = await getRecommendedJobs({
        ...formData,
        generatedCvMarkdown: cvContent,
      });
      console.log('CV generation completed with', jobMatches.length, 'job matches');
    } catch (jobErr) {
      console.warn('Job recommendations skipped:', jobErr?.message || jobErr);
    }

    return {
      cv: cvContent,
      formData,
      jobMatches,
    };
  } catch (error) {
    console.error('CV Generation Error:', error);
    console.error('Error details:', error.message, error.stack);
    throw new Error(`Failed to generate CV: ${error.message}`);
  }
}

/**
 * Saves the generated CV data to Firestore under the current user's account.
 * @param {Object} cvData - CV data including generated CV content and additional info.
 * @returns {string} - The document ID of the saved CV.
 */
export async function saveCV(cvData) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User must be logged in to save CV.');

    // Save CV data to Firestore
    const cvRef = await addDoc(collection(db, 'cvs'), {
      userId: user.uid,
      cvData,
      createdAt: new Date().toISOString(),
    });

    return cvRef.id;
  } catch (error) {
    console.error('Save CV Error:', error);
    throw new Error('Failed to save CV. Please try again.');
  }
}

/**
 * Updates an existing CV document in Firestore with edited HTML.
 * @param {string} docId - The Firestore document ID returned by saveCV.
 * @param {string} editedHtml - The user-edited HTML content.
 */
export async function updateCV(docId, editedHtml) {
  const user = auth.currentUser;
  if (!user || !docId) return;

  try {
    const cvRef = doc(db, 'cvs', docId);
    await updateDoc(cvRef, {
      'cvData.editedHtml': editedHtml,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Update CV Error:', error);
    throw new Error('Failed to save CV edits. Please try again.');
  }
}

/**
 *
 * @param {Object} formData -
 * @returns {boolean} -
 */
export function validateFormData(formData) {
  if (!formData.fullName || !formData.contactInfo || !formData.summary) {
    throw new Error('Full name, contact information, and summary are required.');
  }
  if (!formData.jobType) {
    throw new Error('Job type is required.');
  }
  if (!Array.isArray(formData.skills) || formData.skills.length === 0) {
    throw new Error('At least one skill must be provided.');
  }
  if (!formData.experience) {
    throw new Error('Experience section cannot be empty.');
  }
  return true;
}