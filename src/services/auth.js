// Importing Firebase modules
import { auth, db } from '../config/firebase.js'; 
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Helper function to map Firebase error codes to user-friendly messages
function getAuthErrorMessage(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please sign in instead.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please register first.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials and try again.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    default:
      console.error('Unhandled auth error code:', error.code);
      return 'An error occurred. Please try again later.';
  }
}

// Handles user registration and saves data to Firestore
export async function handleSignUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user info to Firestore with usage tracking
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
      usage: {
        cvGenerations: 0,
        interviewSessions: 0,
      },
      subscription: {
        isActive: false,
        subscribedAt: null,
        expiresAt: null,
      },
    });

    return user; // Successfully created a user and saved to Firestore
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error(getAuthErrorMessage(error));
  }
}

// Handles user login
export async function handleSignIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Successfully signed in
  } catch (error) {
    console.error('Sign in error:', error);
    throw new Error(getAuthErrorMessage(error));
  }
}

// Sends a password reset email via Firebase
export async function handleForgotPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Password reset error:', error);
    throw new Error(getAuthErrorMessage(error));
  }
}

// Handles user logout
export function handleSignOut() {
  return signOut(auth).catch(error => {
    console.error('Sign out error:', error);
    throw new Error('Failed to sign out. Please try again later.');
  });
}
