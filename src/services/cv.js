import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from '../config/firebase.js'; // Adjust the path as per your project structure
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getRecommendedJobs } from './jobMatching.js'; // Adjust the path as per your project structure

// Initialize Google Generative AI and Firestore
const genAI = new GoogleGenerativeAI('AIzaSyDXKo8eTk4b4UsiYFaQLNaSmjiYZCj7SHc');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const db = getFirestore();

/**
 * Generates a professional CV and optionally fetches job recommendations.
 * @param {Object} formData - User input data for CV generation.
 * @returns {Object} - Generated CV content and job matches (if available).
 */
export async function generateCV(formData) {
  try {
    const prompt = `Generate a professional CV in markdown format using this information:
      Full Name: ${formData.fullName}
      Address: ${formData.address || 'N/A'}
      Contact: ${formData.contactInfo}
      Cv Type: ${formData.cvtype}
      Field: ${formData.field}
      Additional Information ${formData.field}
      Job Type: ${formData.jobType}
      Summary: ${formData.summary}
      Skills: ${formData.skills.join(', ')}
      Experience: ${formData.experience}
      Education: ${formData.education}
      Certifications: ${formData.certifications || 'N/A'}
      Awards: ${formData.awards || 'N/A'}
     
      
      Please format the CV professionally with clear sections and bullet points.
      Also include a section highlighting key achievements and quantifiable results.`;

    // Use Google Generative AI to create the CV content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const cvContent = response.text();

    // Fetch job recommendations only if CV is successfully generated
    const jobMatches = await getRecommendedJobs({
      summary: formData.summary,
      skills: formData.skills,
      experience: formData.experience,
      jobType: formData.jobType,
    });

    return {
      cv: cvContent,
      jobMatches,
    };
  } catch (error) {
    console.error('CV Generation Error:', error);
    throw new Error('Failed to generate CV. Job matching skipped.');
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