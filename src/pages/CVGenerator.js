export function CVGenerator() {
  return `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 class="text-3xl font-bold text-purple-800 mb-4 text-center">Welcome to Aspire AI Hub</h1>
            <p class="text-gray-600 text-center mb-8">
              Our AI-powered platform is designed to help individuals showcase their talents, break barriers, and achieve their career goals. 
              We focus on highlighting your unique strengths and matching you with opportunities that align with your aspirations.
            </p>
          </div>

          <form id="cv-form" class="bg-white rounded-lg shadow-lg p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Personal Information -->
              <div class="col-span-2">
                <label class="block text-lg font-medium text-gray-700 mb-2">Personal Information</label>
                <div class="bg-purple-50 p-6 rounded-lg space-y-4">
                  <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="fullName" required
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                  </div>

                  <div>
                    <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" id="address" required placeholder="Street, City, State, ZIP Code"
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                  </div>

                  <div>
                    <label for="contactInfo" class="block text-sm font-medium text-gray-700">Contact Information</label>
                    <input type="text" id="contactInfo" required placeholder="Email, Phone, LinkedIn"
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                  </div>
                </div>
              </div>

              <!-- Professional Profile -->
              <div class="col-span-2">
                <label class="block text-lg font-medium text-gray-700 mb-2">Professional Profile</label>
                <div class="bg-purple-50 p-6 rounded-lg space-y-4">
                  <div>
                    <label for="cvType" class="block text-sm font-medium text-gray-700">CV Type</label>
                    <select id="cvType" required
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
                      <option value="professional">Professional</option>
                      <option value="executive">Executive Leadership</option>
                      <option value="technical">Technical Expert</option>
                      <option value="creative">Creative Professional</option>
                      <option value="academic">Academic/Research</option>
                    </select>
                  </div>

                  <div>
                    <label for="summary" class="block text-sm font-medium text-gray-700">Professional Summary</label>
                    <textarea id="summary" rows="4" required placeholder="Share your career highlights and aspirations..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>
                </div>
              </div>

              <!-- Skills & Expertise -->
              <div class="col-span-2">
                <label class="block text-lg font-medium text-gray-700 mb-2">Skills & Expertise</label>
                <div class="bg-purple-50 p-6 rounded-lg">
                  <label for="skills" class="block text-sm font-medium text-gray-700">Select Your Skills</label>
                  <select id="skills" multiple required size="8"
                    class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg">
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
                <label class="block text-lg font-medium text-gray-700 mb-2">Experience & Achievements</label>
                <div class="bg-purple-50 p-6 rounded-lg space-y-4">
                  <div>
                    <label for="experience" class="block text-sm font-medium text-gray-700">Professional Experience</label>
                    <textarea id="experience" rows="6" required placeholder="Detail your work history, leadership roles, and key achievements..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>

                  <div>
                    <label for="achievements" class="block text-sm font-medium text-gray-700">Key Achievements</label>
                    <textarea id="achievements" rows="4" placeholder="Share specific accomplishments, metrics, and impact..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>
                </div>
              </div>

              <!-- Education & Development -->
              <div class="col-span-2">
                <label class="block text-lg font-medium text-gray-700 mb-2">Education & Development</label>
                <div class="bg-purple-50 p-6 rounded-lg space-y-4">
                  <div>
                    <label for="education" class="block text-sm font-medium text-gray-700">Education</label>
                    <textarea id="education" rows="3" required placeholder="List your educational background..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>

                  <div>
                    <label for="certifications" class="block text-sm font-medium text-gray-700">Certifications & Training</label>
                    <textarea id="certifications" rows="2" placeholder="List relevant certifications and professional development..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>

                  <div>
                    <label for="awards" class="block text-sm font-medium text-gray-700">Awards & Recognition</label>
                    <textarea id="awards" rows="2" placeholder="Share awards, honors, and recognition..."
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="mt-8">
              <button type="submit" 
                class="w-full bg-purple-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">Generate CV</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}