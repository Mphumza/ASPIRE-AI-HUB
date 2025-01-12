import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDoXsCL03Z7vde6sN1xJIJrDe3BuYSZqtM",
  authDomain: "ai-cv-4bec1.firebaseapp.com",
  databaseURL: "https://ai-cv-4bec1.firebaseio.com",
  projectId: "ai-cv-4bec1",
  storageBucket: "ai-cv-4bec1.appspot.com",
  messagingSenderId: "714819597625",
  appId: "1:714819597625:web:1aefa7ee9e2a31946ee4e8",
  measurementId: "G-Q64CKYDNEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication, Analytics, and Firestore
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize Firestore
