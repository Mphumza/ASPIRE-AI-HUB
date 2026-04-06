import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) throw new Error('Google API key not found in environment variables');

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const INTERVIEW_PROMPT = `As an expert interviewer focused on empowering anyone in the workplace, analyze this candidate's profile and generate thoughtful interview questions that:

1. Focus on leadership abilities and potential
2. Explore problem-solving capabilities
3. Discuss diversity and inclusion experiences
4. Address career growth and aspirations
5. Evaluate technical skills contextually
6. Explore collaborative experiences
7. Discuss work-life balance approaches
8. Identify mentorship opportunities

Candidate Profile:
{profile}

Use this exact structure for EACH of the 5 questions (repeat 5 times):

---QUESTION---
### Question
(one sentence)

### Why interviewers ask
(2 short bullets)

### What a strong answer includes
(2–3 bullets)

### Optional follow-ups
(0–2 bullets)

Keep total output under ~600 words. No long essays.`;

export function splitInterviewQuestionSections(text) {
  const normalized = (text || '').trim();
  if (!normalized) return [];
  if (normalized.includes('---QUESTION---')) {
    return normalized
      .split(/---QUESTION---/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [normalized].split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}
 export function extractQuestionForEvaluation(section) {
  if (!section) return '';
  const block = section.match(/###\s*Question\s*\n+([\s\S]*?)(?=\n###\s|$)/i);
  if (block) {
    const firstLine = block[1]
      .split('\n')
      .map((l) => l.trim())
      .find((l) => l.length > 0);
    if (firstLine) {
      return firstLine
        .replace(/^\*+\s*|\s*\*+$/g, '')
        .replace(/^["']|["']$/g, '')
        .trim();
    }
  }
  const line = section
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('#'));
  return (line || '').replace(/^\d+\.\s*/, '').trim();
}


export async function generateInterviewQuestions(profile) {
  try {
    const prompt = INTERVIEW_PROMPT.replace('{profile}', JSON.stringify(profile));
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Interview Generation Error:', error);
    throw new Error('Failed to generate interview questions');
  }
}

export async function evaluateAnswer(question, answer) {
  try {
    const prompt = `As an expert interviewer, evaluate this interview answer focusing on:
    1. Clarity and structure
    2. Specific examples provided
    3. Leadership qualities demonstrated
    4. Areas for improvement
    5. Suggested follow-up response

    Question: ${question}
    Answer: ${answer}

    Provide constructive feedback that empowers the candidate while identifying growth opportunities.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Answer Evaluation Error:', error);
    throw new Error('Failed to evaluate answer');
  }
}