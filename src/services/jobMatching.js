import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
if (!apiKey) throw new Error('Google API key not found in environment variables');

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// Match Adzuna "what" search to profile field (better than raw select value)
const FIELD_KEYWORDS = {
  engineering: 'engineering engineer',
  computer_science: 'software developer IT technology programming',
  creative_arts: 'creative design media arts',
  teaching: 'teacher education teaching',
  admin: 'administration office administrative',
  healthcare: 'healthcare medical',
  marketing: 'marketing brand digital',
  finance: 'finance accounting',
  construction: 'construction building',
  hospitality: 'hospitality hotel restaurant',
};

// Avoid the word "professional" in search — Adzuna matches it to unrelated titles
// (Professional Nurse, Professional Services Manager, Professional Accountant, etc.)
const CV_TYPE_KEYWORDS = {
  professional: 'experienced candidate',
  executive: 'executive leadership director',
  technical: 'technical specialist engineer analyst',
  creative: 'creative',
  academic: 'graduate research entry level',
};

const APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const ADZUNA_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;
const ADZUNA_COUNTRY = import.meta.env.VITE_ADZUNA_COUNTRY || 'za';
const MAX_WHAT_LENGTH = 220;
const MAX_CV_SNIPPET = 600;

/** Strip words that cause huge false positives in Adzuna full-text search */
function stripAdzunaNoise(text) {
  if (!text || typeof text !== 'string') return '';
  return text
    .replace(/\bprofessional(s|ly|ism)?\b/gi, ' ')
    .replace(/\bprofession(s)?\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const ICT_SOFTWARE_SKILL_IDS = new Set([
  'coding',
  'software-development',
  'cloud-computing',
  'network-security',
  'data-analysis',
  'technical-writing',
  'quality-assurance',
  'system-administration',
]);

/** User is clearly ICT / software — we apply stricter job filtering */
export function isIctSoftwareCandidate(profile) {
  if (!profile) return false;
  if (profile.field === 'computer-science') return true;
  if (Array.isArray(profile.skills) && profile.skills.some((s) => ICT_SOFTWARE_SKILL_IDS.has(s))) {
    return true;
  }
  return false;
}

/**
 * Drop listings that are almost never relevant for ICT/software graduates
 * (fixes "Professional *" title spam from Adzuna keyword search).
 */
function blobLooksLikeTechRole(blob) {
  const checks = [
    /software/i,
    /\bdeveloper\b/i,
    /\bdevelopment\b/i,
    /programming/i,
    /\bprogrammer\b/i,
    /\bict\b/i,
    /applications?\s+development/i,
    /web\s+developer/i,
    /mobile\s+(app\s+)?developer/i,
    /full[\s-]?stack/i,
    /front[\s-]?end/i,
    /back[\s-]?end/i,
    /javascript|typescript|python|c#|\.net|\bjava\b/i,
    /react|node\.?js|angular|vue/i,
    /devops/i,
    /cloud\s+(engineer|developer|architect)/i,
    /data\s+(analyst|scientist|engineer)/i,
    /machine\s+learning|artificial\s+intelligence|\bML\s+engineer/i,
    /it\s+graduate|graduate\s+(software|developer|programmer|engineer)/i,
    /junior\s+(software|developer|programmer)/i,
    /entry[\s-]?level\s+(software|developer|it|ict)/i,
    /software\s+engineer/i,
    /systems\s+(developer|analyst)/i,
    /application\s+developer/i,
    /\bandroid\b|\bios\b/i,
    /sql\s+developer/i,
    /\btech(nology)?\s+graduate/i,
  ];
  return checks.some((re) => re.test(blob));
}

export function filterJobsForIctProfile(profile, jobs) {
  if (!isIctSoftwareCandidate(profile) || !Array.isArray(jobs)) return jobs;

  const badTitle =
    /\b(professional\s+services\s+manager|professional\s+nurse|nurse\b|nursing\b|mandarin|professional\s+accountant|structural\s+engineer|civil\s+engineer|quantity\s+surveyor|mediclinic|pharmacist|bookkeeper|\bSAIPA\b|auditor\b|electrician|plumber|chef\b|waiter|receptionist|dental\s+hygien|surgeon\b)\b/i;

  return jobs.filter((job) => {
    const title = job.title || '';
    const desc = (job.description || '').slice(0, 900);
    const blob = `${title} ${desc}`;
    if (badTitle.test(title)) return false;
    return blobLooksLikeTechRole(blob) || /\b(it|tech|system|support|analyst|graduate)\b/i.test(blob);;
  });
}

/** Pull a short text snippet from generated CV markdown for keyword-rich search */
function excerptFromGeneratedCv(markdown) {
  if (!markdown || typeof markdown !== 'string') return '';
  const summary = markdown.match(/##\s*Professional Summary\s*([\s\S]*?)(?=\n##|\s*$)/i);
  const skills = markdown.match(/##\s*Key Skills\s*([\s\S]*?)(?=\n##|\s*$)/i);
  const parts = [summary?.[1], skills?.[1]].filter(Boolean).join(' ');
  return parts.replace(/\s+/g, ' ').trim().slice(0, MAX_CV_SNIPPET);
}

/**
 * Build Adzuna `what` query from the full profile + optional generated CV text.
 */
export function buildAdzunaSearchQuery(profile, options = {}) {
  const broad = options.broad === true;
  const fieldKw =
    (profile.field && FIELD_KEYWORDS[profile.field]) ||
    (profile.field || '').replace(/-/g, ' ');
  if (broad) {
    const q = (fieldKw || 'jobs').slice(0, MAX_WHAT_LENGTH);
    return stripAdzunaNoise(q) || 'jobs';
  }

  const cvKw =
    (profile.cvType && CV_TYPE_KEYWORDS[profile.cvType]) ||
    (profile.cvType || '').replace(/-/g, ' ');

  const skillStr = Array.isArray(profile.skills)
    ? profile.skills
        .slice(0, 10)
        .map((s) => String(s).replace(/-/g, ' '))
        .join(' ')
    : '';

  const summaryBit = stripAdzunaNoise(
    (profile.summary || '').replace(/\s+/g, ' ').trim().slice(0, 100),
  );

  const eduBit = stripAdzunaNoise(
    (profile.education || '').replace(/\s+/g, ' ').trim().slice(0, 80),
  );

  const extra = stripAdzunaNoise(
    (profile.additionalDetails || '').replace(/\s+/g, ' ').trim().slice(0, 80),
  );

  const fromCv = stripAdzunaNoise(excerptFromGeneratedCv(profile.generatedCvMarkdown || '').slice(0, 200));

  // For ICT profiles, lead with role-specific terms (reduces junk matches)
  const ictBoost =
    profile.field === 'computer-science'
      ? 'IT software tech graduate developer support analyst'
      : '';

  const chunks = [
    ictBoost,
    fieldKw,
    cvKw,
    skillStr,
    summaryBit,
    eduBit,
    extra,
    fromCv,
  ].filter(Boolean);

  let q = chunks.join(' ').replace(/\s+/g, ' ').trim();
  q = stripAdzunaNoise(q);
  if (q.length > MAX_WHAT_LENGTH) q = q.slice(0, MAX_WHAT_LENGTH - 1).trim();
  return q || fieldKw || 'jobs';
}

function normalizeAdzunaJob(job) {
  const tags = job.category?.label ? job.category.label.split(', ').map((t) => t.trim()) : [];
  return {
    title: job.title,
    company: job.company?.display_name || 'Unknown',
    location: job.location?.display_name || 'Location not provided',
    description: job.description || '',
    tags,
    url: job.redirect_url,
    requirements: tags,
    remote: /\bremote\b/i.test(job.description || ''),
  };
}

/** Fetch jobs from Adzuna (South Africa by default) */
export async function fetchAdzunaJobs(what, resultsPerPage = 30) {
  if (!APP_ID || !ADZUNA_KEY) {
    throw new Error('Adzuna API credentials are not configured. Please set VITE_ADZUNA_APP_ID and VITE_ADZUNA_APP_KEY in your .env file.');
  }
  const query = (what || 'jobs').trim() || 'jobs';
  const n = Math.min(Math.max(resultsPerPage, 5), 50);
  const url = `https://api.adzuna.com/v1/api/jobs/${ADZUNA_COUNTRY}/search/1?app_id=${APP_ID}&app_key=${ADZUNA_KEY}&results_per_page=${n}&what=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data?.results || !Array.isArray(data.results)) {
      console.warn('Invalid Adzuna API response format');
      return [];
    }
    return data.results.map(normalizeAdzunaJob);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

/** Full CV + form context as one string for Gemini matching */
export function formatProfileForJobMatching(profile) {
  const skills = Array.isArray(profile.skills) ? profile.skills.join(', ') : '';
  const md = profile.generatedCvMarkdown || '';
  const cvBody = md.length > 14000 ? `${md.slice(0, 14000)}\n\n[CV truncated for length]` : md;

  return `Candidate profile (use ALL of this to judge fit, not only job title keywords):

**Identity & preferences**
- Name: ${profile.fullName || 'N/A'}
- CV style / level: ${profile.cvType || 'N/A'}
- Preferred field: ${profile.field || 'N/A'}
- Employment type wanted: ${profile.jobType || 'N/A'}

**Their own words**
- Professional summary: ${profile.summary || 'N/A'}
- Skills: ${skills}
- Experience: ${profile.experience || 'N/A'}
- Education: ${profile.education || 'N/A'}
- Certifications: ${profile.certifications || 'N/A'}
- Awards: ${profile.awards || 'N/A'}
- References / other: ${profile.references || 'N/A'}
- Additional details: ${profile.additionalDetails || 'N/A'}

**Full generated CV (authoritative)**
${cvBody || '(not available)'}`;
}

// Analyze job match using Google Generative AI
export async function analyzeJobMatch(cvProfile, job) {
  try {
    const cvText = formatProfileForJobMatching(cvProfile);
    const reqs = Array.isArray(job.requirements) && job.requirements.length
      ? job.requirements.join(', ')
      : Array.isArray(job.tags)
        ? job.tags.join(', ')
        : 'See description';

    const prompt = `
Analyze how well this JOB suits the CANDIDATE using their entire profile and full CV below — not only their "CV type" or field label.

IMPORTANT SCORING RULES:
- If the job is clearly in a different industry (e.g. nursing, accounting, Mandarin translation, generic "professional services" management with no tech) and the candidate is ICT/software, use Match Score under 25 and say so in Gaps.
- Only give scores above 70 when the role genuinely fits their stack and experience level (e.g. junior developer, graduate IT, software engineering).

CANDIDATE
${cvText}

JOB
Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Remote: ${job.remote ? 'Possibly / yes (from description)' : 'Not indicated'}
Description: ${(job.description || '').slice(0, 4000)}
Tags / category: ${reqs}

Provide a concise analysis in this format:
Match Score: [0-100]%
Key Matches: [bullet points]
Gaps: [bullet points]
Suggestions: [brief improvements]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    const matchScore = parseInt(analysis.match(/Match Score:\s*(\d+)/i)?.[1] || '0', 10);

    return {
      analysis,
      matchScore: Number.isFinite(matchScore) ? matchScore : 0,
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

function dedupeJobsByUrl(list) {
  const seen = new Set();
  return list.filter((j) => {
    const u = j.url || `${j.title}-${j.company}`;
    if (seen.has(u)) return false;
    seen.add(u);
    return true;
  });
}

// Get recommended jobs based on full CV + form data
export async function getRecommendedJobs(profile) {
  try {
    const primaryQuery = buildAdzunaSearchQuery(profile);
    let jobs = await fetchAdzunaJobs(primaryQuery, 35);
    const filtered = filterJobsForIctProfile(profile, jobs);
    jobs = filtered.length >= 5 ? filtered : jobs;

    if (jobs.length < 6) {
      const broadQuery = buildAdzunaSearchQuery(profile, { broad: true });
      const extra = await fetchAdzunaJobs(broadQuery, 25);
      jobs = dedupeJobsByUrl([...jobs, ...extra]);
    }

    if (jobs.length < 6 && isIctSoftwareCandidate(profile)) {
      const itFallback = await fetchAdzunaJobs(
        'software developer IT graduate junior programmer applications development',
        35,
      );
      jobs = dedupeJobsByUrl([...jobs, ...itFallback]);
    }

    if (!jobs.length) {
      const lastResort = await fetchAdzunaJobs(
        isIctSoftwareCandidate(profile)
          ? 'junior software developer South Africa'
          : buildAdzunaSearchQuery(profile, { broad: true }) || 'jobs',
        20,
      );
      jobs = lastResort;
    }

    // Cap how many we send to Gemini (cost + latency)
    jobs = jobs.slice(0, 18);

    const matchPromises = jobs.map((job) => analyzeJobMatch(profile, job));
    const matches = await Promise.all(matchPromises);

    const rankedJobs = jobs.map((job, index) => ({
      ...job,
      ...matches[index],
    }));

    return rankedJobs.sort((a, b) => b.matchScore - a.matchScore).slice(0, 15);
  } catch (error) {
    console.error('Job Recommendations Error:', error);
    throw new Error('Failed to get job recommendations. Please try again later.');
  }
}

// JobMatches component to display job listings and match scores
export function JobMatches({ jobs }) {
  if (!jobs) return '<div>Loading jobs...</div>';

  if (!jobs.length) {
    return `
    <div class="p-4 max-w-2xl mx-auto">
      <h2 class="text-xl font-bold mb-2">Job Matches</h2>
      <p class="text-gray-600">No listings were returned for your profile. Try generating your CV again, or check your connection. Job search uses your full CV and preferences.</p>
    </div>`;
  }

  return `
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Job Matches</h2>
      <ul class="space-y-4">
        ${jobs.map(job => `
          <li class="border p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold">${job.title}</h3>
            <p class="text-sm text-gray-600">${job.company} - ${job.location}</p>
            <p class="mt-2">${(job.description || '').slice(0, 150)}...</p>
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
