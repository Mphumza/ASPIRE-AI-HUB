export function CVGenerator() {
  return `
    <div class="min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Hero Section -->
          <div class="bg-white rounded-3xl p-10 mb-8 text-center border border-gray-200 shadow-sm">
            <div class="inline-block mb-4">
              <div class="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered Career Platform
              </div>
            </div>
            <h1 class="text-5xl font-black mb-4 text-gray-900">
              Welcome to Ispani AI
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our AI-powered platform. Showcase your talents, break barriers, 
              and land your dream career with personalized CVs that stand out. 
            </p>
            <div class="flex justify-center gap-4 mt-6">
              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">
                <span class="font-bold">✨ AI-Generated</span>
              </div>
              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">
                <span class="font-bold">🎯 Job Matching</span>
              </div>
              <div class="bg-gray-800 text-white px-4 py-2 rounded-xl">
                <span class="font-bold">⚡ Instant Results</span>
              </div>
            </div>
          </div>

          <form id="cv-form" class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Personal Information -->
              <div class="col-span-2">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                    <span class="text-white text-xl">👤</span>
                  </div>
                  <label class="block text-2xl font-bold text-gray-800">Personal Information</label>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">
                  <div>
                    <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="fullName" required
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base font-medium">
                  </div>

                  <div>
                    <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                    <input type="text" id="address" required placeholder="Street, City, State, ZIP Code"
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
                  </div>

                  <div>
                    <label for="contactInfo" class="block text-sm font-semibold text-gray-700 mb-2">Contact Information</label>
                    <input type="text" id="contactInfo" required placeholder="Email, Phone, LinkedIn"
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
                  </div>
                </div>
              </div>

              <!-- Professional Profile -->
              <div class="col-span-2">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-accent-600 flex items-center justify-center">
                    <span class="text-white text-xl">💼</span>
                  </div>
                  <label class="block text-2xl font-bold text-gray-800">Professional Profile</label>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">
                  <div>
                    <label for="cvType" class="block text-sm font-semibold text-gray-700 mb-2">CV Type</label>
                    <select id="cvType" required
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base font-medium">
                      <option value="professional">Professional</option>
                      <option value="executive">Executive Leadership</option>
                      <option value="technical">Technical Expert</option>
                      <option value="creative">Creative Professional</option>
                      <option value="academic">Academic/Research</option>
                    </select>
                  </div>

                  <div>
                    <label for="summary" class="block text-sm font-semibold text-gray-700 mb-2">Professional Summary</label>
                    <textarea id="summary" rows="5" required placeholder="Share your career highlights, key achievements, and aspirations..."
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>
                </div>
              </div>

              <!-- Skills & Expertise -->
              <div class="col-span-2">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center">
                    <span class="text-white text-xl">⚡</span>
                  </div>
                  <label class="block text-2xl font-bold text-gray-800">Skills & Expertise</label>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <label for="skills" class="block text-sm font-semibold text-gray-700 mb-2">Select Your Skills (Hold Ctrl/Cmd for multiple)</label>
                  <select id="skills" multiple required size="10"
                    class="block w-full px-5 py-3 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base">
                    <optgroup label="Leadership & Management">
                      <option value="team-leadership">Team Leadership</option>
                      <option value="project-management">Project Management</option>
                      <option value="strategic-planning">Strategic Planning</option>
                      <option value="change-management">Change Management</option>
                    </optgroup>
                    <optgroup label="Technical Skills">
                      <option value="coding">Coding/Programming</option>
                      <option value="data-analysis">Data Analysis</option>
                      <option value="system-administration">System Administration</option>
                      <option value="network-security">Network Security</option>
                      <option value="software-development">Software Development</option>
                      <option value="technical-writing">Technical Writing</option>
                      <option value="quality-assurance">Quality Assurance</option>
                      <option value="cloud-computing">Cloud Computing</option>
                    </optgroup>
                    <optgroup label="Creative Arts">
                      <option value="graphic-design">Graphic Design</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="photography">Photography</option>
                      <option value="writing">Writing</option>
                      <option value="music-production">Music Production</option>
                    </optgroup>
                    <optgroup label="Education & Teaching">
                      <option value="lesson-planning">Lesson Planning</option>
                      <option value="curriculum-design">Curriculum Design</option>
                      <option value="educational-technology">Educational Technology</option>
                      <option value="special-education">Special Education</option>
                    </optgroup>
                    <optgroup label="Administrative Skills">
                      <option value="office-management">Office Management</option>
                      <option value="data-entry">Data Entry</option>
                      <option value="calendar-management">Calendar Management</option>
                      <option value="customer-service">Customer Service</option>
                    </optgroup>
                  </select>
                  <p class="mt-2 text-sm text-gray-500">Hold Ctrl/Cmd to select multiple skills</p>
                </div>
              </div>

              <!-- Job Preferences -->
              <div class="col-span-2">
                <label class="block text-lg font-medium text-gray-700 mb-2">Job Preferences</label>
                <div class="bg-purple-50 p-6 rounded-lg space-y-4">
                  <div>
                    <label for="jobType" class="block text-sm font-medium text-gray-700">Preferred Job Type</label>
                    <select id="jobType" required
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>
                  <div>
                    <label for="field" class="block text-sm font-medium text-gray-700">Preferred Field</label>
                    <select id="field" required
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                      <option value="engineering">Engineering</option>
                      <option value="computer-science">Computer Science/IT</option>
                      <option value="creative-arts">Creative Arts</option>
                      <option value="teaching">Teaching</option>
                      <option value="admin">Administrative Work</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="marketing">Marketing</option>
                      <option value="finance">Finance</option>
                      <option value="construction">Construction</option>
                      <option value="hospitality">Hospitality</option>
                    </select>
                  </div>
                  <div id="additional-info" class="hidden">
                    <label for="additionalDetails" class="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea id="additionalDetails" rows="3" placeholder="Provide specifics based on your chosen field, e.g., Cloud Computing, Marketing Strategy..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>
                </div>
              </div>

              <!-- Experience & Achievements -->
              <div class="col-span-2">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                    <span class="text-white text-xl">🏆</span>
                  </div>
                  <label class="block text-2xl font-bold text-gray-800">Experience & Achievements</label>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">
                  <div>
                    <label for="experience" class="block text-sm font-semibold text-gray-700 mb-2">Professional Experience</label>
                    <textarea id="experience" rows="6" required placeholder="Detail your work history, leadership roles, and key achievements..."
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>
                </div>
              </div>

              <!-- Education & Development -->
              <div class="col-span-2">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center">
                    <span class="text-white text-xl">🎓</span>
                  </div>
                  <label class="block text-2xl font-bold text-gray-800">Education & Development</label>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl space-y-5 border border-gray-200">
                  <div>
                    <label for="education" class="block text-sm font-semibold text-gray-700 mb-2">Education</label>
                    <textarea id="education" rows="4" required placeholder="List your educational background, degrees, and institutions..."
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>

                  <div>
                    <label for="certifications" class="block text-sm font-semibold text-gray-700 mb-2">Certifications & Training</label>
                    <textarea id="certifications" rows="3" placeholder="List relevant certifications and professional development..."
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>

                  <div>
                    <label for="awards" class="block text-sm font-semibold text-gray-700 mb-2">Awards & Recognition</label>
                    <textarea id="awards" rows="3" placeholder="Share awards, honors, and recognition..."
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>
 
                  <div>
                    <label for="references" class="block text-sm font-semibold text-gray-700 mb-2">References</label>
<<<<<<< HEAD
                    <textarea id="references" rows="3" placeholder="Provide references or leave blank to show 'Available upon request'"
=======
                    <textarea id="references" rows="3" placeholder="Provide references or write 'Available upon request'"
>>>>>>> d2943637aca526cfbc67d2059641bb8d25dbd8a1
                      class="block w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary-400 focus:ring-primary-300 text-base"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit and Cancel Buttons -->
            <div class="mt-10 flex flex-col sm:flex-row gap-4">
              <button type="button" id="cancel-cv"
                class="sm:w-auto px-8 py-5 rounded-2xl text-lg font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300">
                <span class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  <span>Cancel</span>
                </span>
              </button>
              <button type="submit" 
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <span class="flex items-center justify-center gap-3">
                  <span>Generate My Professional CV</span>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}