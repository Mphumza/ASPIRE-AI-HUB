import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDXKo8eTk4b4UsiYFaQLNaSmjiYZCj7SHc');

export async function generateCVSuggestions(experience) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Given this professional experience, suggest improvements for a CV:
    ${experience}
    Focus on: 
    1. Action-oriented language
    2. Quantifiable achievements
    3. Industry-relevant keywords`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('AI Generation Error:', error);
    return 'Unable to generate suggestions at this time.';
  }
}