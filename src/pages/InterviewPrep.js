export function InterviewPrep({ questions, onAnswerSubmit }) {
  return `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 class="text-3xl font-bold text-purple-800 mb-4">Interview Preparation</h1>
            <p class="text-gray-600 mb-6">Practice answering these AI-generated questions tailored to your profile. Get instant feedback to improve your interview skills.</p>
            
            <div class="space-y-8">
              ${questions.split('\n\n').map((section, index) => `
                <div class="bg-purple-50 p-6 rounded-lg">
                  <div class="prose max-w-none">
                    ${section}
                  </div>
                  
                  <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Your Answer</label>
                    <textarea 
                      id="answer-${index}"
                      rows="4"
                      class="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg"
                      placeholder="Type your answer here..."></textarea>
                    
                    <button 
                      onclick="submitAnswer(${index})"
                      class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Get Feedback
                    </button>
                  </div>
                  
                  <div id="feedback-${index}" class="mt-4 hidden">
                    <h4 class="font-semibold text-gray-800 mb-2">Feedback</h4>
                    <div class="bg-white p-4 rounded-lg prose max-w-none"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}