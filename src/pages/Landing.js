import cvPreviewImg from '../images/cv-preview.png';
import careerRoadmapImg from '../images/career-roadmap.png';
import interviewPracticeImg from '../images/interview-practice.png';

export function Landing() {
  return `
    <div class="min-h-screen py-12">
      <div class="mx-auto px-4">
        <div class="mx-auto" style="width: 90%; max-width: 90%;">
          <!-- Landing Hero Section -->
          <div
            class="rounded-3xl px-6 sm:px-14 py-12 mb-10 border shadow-sm"
            style="
              background:
                radial-gradient(circle at top left, rgba(129, 140, 248, 0.22), transparent 60%),
                radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.20), rgba(255, 255, 255, 0.96) 70%);
              border-color: rgba(129, 140, 248, 0.35);
            "
          >
            <div class="text-center max-w-3xl mx-auto">
              <div class="inline-flex items-center justify-center mb-4">
                <span class="bg-primary-600 text-white px-6 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase">
                  AI for CVs • Careers • Interviews
                </span>
              </div>
              <h1 class="text-3xl md:text-5xl font-black mb-4 text-gray-900">
                AI-personalized CVs, career paths & interview prep.
              </h1>
              <p class="text-base md:text-xl text-gray-600 mx-auto leading-relaxed">
                Turn your story into a standout CV, discover roles that match your strengths,
                and practice interviews with AI that understands your journey.
              </p>

              <!-- Centered Login / Sign Up buttons -->
              <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onclick="document.getElementById('login') && document.getElementById('login').click()"
                  class="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Login
                </button>
                <button
                  type="button"
                  onclick="document.getElementById('signup') && document.getElementById('signup').click()"
                  class="w-full sm:w-auto bg-gray-900 hover:bg-black text-white py-3 px-8 rounded-full text-base font-semibold border border-gray-800 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>

              <p class="mt-3 text-xs md:text-sm text-gray-500">
                No credit card required. Built for students, graduates and working professionals.
              </p>
            </div>

            <!-- Features: CVs, Careers, Interviews as rows (text left, image right) -->
            <div class="mt-12 space-y-6">
              <!-- AI CVs (image left on desktop) -->
              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row-reverse items-stretch gap-5">
                <div class="flex-1 flex flex-col gap-3">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 text-primary-700 text-lg">
                      📄
                    </span>
                    <div>
                      <p class="text-xs font-semibold text-primary-600 tracking-[0.18em] uppercase">
                        AI CVs
                      </p>
                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">
                        AI-personalized CVs
                      </h2>
                    </div>
                  </div>
                  <p class="text-sm md:text-base text-gray-600">
                    Generate tailored CVs for each opportunity, structured for recruiters and optimized for ATS
                    so your skills and experience are always presented at their best.
                  </p>
                </div>
                <div class="w-full md:w-96 lg:w-[28rem]">
                  <!-- Replace this div with an actual CV image or illustration -->
                  <div class="w-full md:w-96 lg:w-[28rem]">
               <img
               src="${cvPreviewImg}"
               alt="AI CV preview"
               class="h-48 md:h-56 lg:h-72 rounded-xl border border-gray-300 bg-white object-cover w-full"
                   />
                 </div>

                </div>
              </div>

              <!-- Career Recommendations (text left, image right) -->
              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row items-stretch gap-5">
                <div class="flex-1 flex flex-col gap-3">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 text-lg">
                      🧭
                    </span>
                    <div>
                      <p class="text-xs font-semibold text-emerald-600 tracking-[0.18em] uppercase">
                        Careers
                      </p>
                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">
                        Smart career paths
                      </h2>
                    </div>
                  </div>
                  <p class="text-sm md:text-base text-gray-600">
                    Explore roles and paths that align with your strengths, interests and goals,
                    with clear next steps and skills to grow into each opportunity.
                  </p>
                </div>
                <div class="w-full md:w-96 lg:w-[28rem]">
             <img
             src="${careerRoadmapImg}"
             alt="Career roadmap illustration"
             class="h-48 md:h-56 lg:h-72 rounded-xl border border-gray-300 bg-white object-cover w-full"
              />
              </div>
              </div>

              <!-- Interview Preparation (image left on desktop) -->
              <div class="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-6 flex flex-col md:flex-row-reverse items-stretch gap-5">
                <div class="flex-1 flex flex-col gap-3">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 text-lg">
                      🎤
                    </span>
                    <div>
                      <p class="text-xs font-semibold text-indigo-600 tracking-[0.18em] uppercase">
                        Interviews
                      </p>
                      <h2 class="text-lg md:text-xl font-semibold text-gray-900">
                        AI interview prep
                      </h2>
                    </div>
                  </div>
                  <p class="text-sm md:text-base text-gray-600">
                    Practice realistic interview questions based on your profile and target role,
                    with AI feedback that helps you refine your answers and build confidence.
                  </p>
                </div>
                <div class="w-full md:w-96 lg:w-[28rem]">
                  <!-- Replace this div with an interview coaching / Q&A image -->
                 <div class="w-full md:w-96 lg:w-[28rem]">
              <img
              src="${interviewPracticeImg}"
              alt="Interview practice illustration"
            class="h-40 md:h-48 lg:h-60 rounded-xl border border-gray-300 bg-white object-cover w-full"
                   />
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

