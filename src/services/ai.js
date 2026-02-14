import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) throw new Error('Google API key not found in environment variables');

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateCVSuggestions(experience) {
  if (!experience || experience.trim().length === 0) {
    throw new Error('Experience text is required for generating suggestions');
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  const prompt = `Given this professional experience, suggest improvements for a CV:
    ${experience}
    Focus on: 
    1. Action-oriented language
    2. Quantifiable achievements
    3. Industry-relevant keywords`;
  
  try {
    console.log('Generating CV suggestions...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log('CV suggestions generated successfully');
    return text;
  } catch (error) {
    console.error('AI Generation Error:', error);
    console.error('Error details:', error.message, error.stack);
    throw new Error(`Failed to generate CV suggestions: ${error.message}`);
  }
}