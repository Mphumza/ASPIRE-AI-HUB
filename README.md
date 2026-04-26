# Ispani AI — Career Hub

An AI-powered career platform for South African job seekers. Generate professional CVs, match to live job listings, and practise interviews — all in one place.

---

## Tech Stack

- **Frontend**: Vite + Tailwind CSS + DaisyUI
- **AI**: Google Gemini 2.5 Flash
- **Backend**: Firebase Auth + Firestore
- **Jobs API**: Adzuna (South Africa)
- **Payments**: Stripe
- **PDF export**: jsPDF + html2canvas

---

## Getting Started

### 1. Clone & install dependencies

```bash
git clone <repo-url>
cd ASPIRE-AI-HUB
npm install
```

### 2. Configure environment variables

Copy the example below into a `.env` file in the project root and fill in your keys:

```env
# Google Generative AI (Gemini)
VITE_GOOGLE_API_KEY=your_gemini_api_key_here

# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Adzuna Job Search API
VITE_ADZUNA_APP_ID=your_adzuna_app_id
VITE_ADZUNA_APP_KEY=your_adzuna_app_key
VITE_ADZUNA_COUNTRY=za

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_PRICE_ID=price_...
VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/...
```

> **Note:** Vite bakes environment variables at startup. After editing `.env`, restart the dev server for changes to take effect.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Important Setup Steps

### Google Gemini API Key

The app uses **Google Gemini 2.5 Flash** for CV generation, job matching, and interview prep.

1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API key** (or regenerate an existing one)
4. Copy the key and set it as `VITE_GOOGLE_API_KEY` in your `.env`
5. Restart the dev server

> **API keys can expire.** If you see an error like `API key expired. Please renew the API key.`, return to AI Studio, delete the old key, create a new one, and update your `.env`.

---

### Firebase Firestore Security Rules

By default, Firestore denies all reads and writes. You must publish security rules that allow authenticated users to access their own data.

1. Open the [Firebase Console](https://console.firebase.google.com/)
2. Select your project → **Firestore Database** → **Rules** tab
3. Replace the contents with the rules below and click **Publish**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can only read and write their own profile document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // CVs are scoped to the owning user
    match /cvs/{cvId} {
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow read, update, delete: if request.auth != null && resource.data.userId == request.auth.uid;
    }

  }
}
```

> Without these rules, profile updates, CV saves, and subscription activation will fail with a permissions error.

---

### Stripe Payment Link (Subscription Activation)

For the subscription to activate automatically after payment:

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/test/payment-links)
2. Open your R50/month payment link settings
3. Under **After payment**, set the **Confirmation page** to redirect to:
   ```
   https://yourdomain.com/?payment_success=true&session_id={CHECKOUT_SESSION_ID}
   ```
4. The app detects this return URL and calls `activateSubscription()` automatically

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `node scripts/seedDatabase.js` | Seed Firestore with sample job data |

---

## Project Structure

```
├── index.html
├── main.js                  # App entry — routing, state, event listeners
├── style.css                # Global styles (glassmorphism, animations)
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── components/
    │   ├── AuthForms.js     # Login & register modals
    │   └── JobCard.js       # Reusable job listing card
    ├── config/
    │   └── firebase.js      # Firebase initialisation
    ├── data/
    │   └── jobs.js          # Sample featured jobs
    ├── pages/
    │   ├── Landing.js
    │   ├── Dashboard.js
    │   ├── CVGenerator.js
    │   ├── CVResult.js      # CV editor + PDF export
    │   ├── JobMatches.js
    │   ├── InterviewPrep.js
    │   └── AccountSettings.js
    └── services/
        ├── ai.js            # General AI utilities
        ├── auth.js          # Firebase Auth helpers
        ├── cv.js            # CV generation (Gemini) + Firestore save
        ├── interview.js     # Interview question generation & evaluation
        ├── jobMatching.js   # Adzuna search + Gemini job-match scoring
        └── subscription.js  # Usage tracking, free tier, Stripe activation
```
