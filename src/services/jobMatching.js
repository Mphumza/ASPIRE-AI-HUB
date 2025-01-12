import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDXKo8eTk4b4UsiYFaQLNaSmjiYZCj7SHc');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Fetch jobs from the Adzuna API
export async function fetchJobs() {
  try {
    const response = await fetch(
      'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=50f33641&app_key=a4f4da670e1a3596320aee003e0a1327&results_per_page=20',
      {
        headers: {
          'Accept': 'application/json',
          'Origin': window.location.origin,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.results || !Array.isArray(data.results)) {
      console.warn('Invalid API response format');
      return [];
    }


  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

// Analyze job match using Google Generative AI
export async function analyzeJobMatch(cv, job) {
  try {
    const prompt = `
    Analyze the match between this CV and job posting. 
    CV Summary: ${cv.summary}
    CV Skills: ${cv.skills.join(', ')}
    CV Experience: ${cv.experience}
    
    Job Title: ${job.title}
    Job Description: ${job.description}
    Job Requirements: ${job.requirements.join(', ')}
    Remote: ${job.remote ? 'Yes' : 'No'}
    
    Provide a concise analysis in this format:
    Match Score: [0-100]%
    Key Matches: [bullet points of matching skills]
    Gaps: [bullet points of missing requirements]
    Suggestions: [brief improvement recommendations]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    // Extract match score
    const matchScore = parseInt(analysis.match(/Match Score: (\d+)%/)?.[1] || '0', 10);

    return {
      analysis,
      matchScore,
    };
  } catch (error) {
    console.error('Job Match Analysis Error:', error);
    return {
      analysis: `
Match Score: N/A
Key Matches: Unable to analyze matches at this time
Gaps: Analysis temporarily unavailable
Suggestions: Please try again later`,
      matchScore: 0,
    };
  }
}

// Get recommended jobs based on CV data
export async function getRecommendedJobs(CVResults) {
  try {
    const jobs = await fetchJobs();
    const matchPromises = jobs.map(job => analyzeJobMatch(CVResults, job));
    const matches = await Promise.all(matchPromises);

    // Combine job data with match analysis and score
    const rankedJobs = jobs.map((job, index) => ({
      ...job,
      ...matches[index],
    }));

    // Sort jobs by match score in descending order
    return rankedJobs.sort((a, b) => b.matchScore - a.matchScore);
  } catch (error) {
    console.error('Job Recommendations Error:', error);
    throw new Error('Failed to get job recommendations. Please try again later.');
  }
}

// JobMatches component to display job listings and match scores
export function JobMatches({ jobs }) {
  if (!jobs) return '<div>Loading jobs...</div>';

  return `
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Job Matches</h2>
      <ul class="space-y-4">
        ${jobs.map(job => `
          <li class="border p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold">${job.title}</h3>
            <p class="text-sm text-gray-600">${job.company} - ${job.location}</p>
            <p class="mt-2">${job.description.slice(0, 150)}...</p>
            <div class="mt-2">
              <h4 class="font-medium">Match Score: ${job.matchScore || 'N/A'}%</h4>
              <p>${job.analysis || 'Analyzing match...'}</p>
            </div>
            <a href="${job.url}" target="_blank" class="text-blue-600 underline mt-4 block">
              View Job
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}
