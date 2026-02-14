import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from '../config/firebase.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getRecommendedJobs } from './jobMatching.js';

// Initialize Google Generative AI and Firestore
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) throw new Error('Google API key not found in environment variables');

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

**Personal Details:**
- Full Name: ${formData.fullName}
- Address: ${formData.address || 'N/A'}
- Contact: ${formData.contactInfo}

**Career Information:**
- CV Type: ${formData.cvType}
- Field: ${formData.field}
- Job Type: ${formData.jobType}

**Content to Include:**
- Professional Summary: ${formData.summary}
- Skills: ${formData.skills.join(', ')}
- Experience: ${formData.experience}
- Education: ${formData.education}
- Certifications: ${formData.certifications || 'N/A'}
- Awards: ${formData.awards || 'N/A'}

**IMPORTANT FORMATTING REQUIREMENTS:**
1. Use clear markdown headers (##) for each section
2. Structure the CV in this exact order:
   ## Professional Summary
   ## Key Skills
   ## Professional Experience
   ## Education
   ## Certifications & Training (if applicable)
   ## Awards & Recognition (if applicable)
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

    // Fetch job recommendations only if CV is successfully generated
    const jobMatches = await getRecommendedJobs({
      summary: formData.summary,
      skills: formData.skills,
      experience: formData.experience,
      jobType: formData.jobType,
    });

    console.log('CV generation completed with', jobMatches.length, 'job matches');

    return {
      cv: cvContent,
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
 * Helper function to validate form data before CV generation.
 * @param {Object} formData - User input data for CV generation.
 * @returns {boolean} - True if valid, otherwise throws an error.
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