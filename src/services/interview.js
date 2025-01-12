import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDXKo8eTk4b4UsiYFaQLNaSmjiYZCj7SHc');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const INTERVIEW_PROMPT = `As an expert interviewer focused on empowering women in the workplace, analyze this candidate's profile and generate thoughtful interview questions that:

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

Generate 5 strategic interview questions with:
1. The question itself
2. The intent behind asking it
3. What makes a strong answer
4. Follow-up questions if needed

Format in clear markdown sections.`;

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