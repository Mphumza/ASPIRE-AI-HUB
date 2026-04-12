import { auth, db } from '../config/firebase.js';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

const STRIPE_PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK;

// Free tier limits
const FREE_CV_GENERATIONS = 1;
const FREE_INTERVIEW_SESSIONS = 1;

/**
 * Get or initialize user usage data
 */
export async function getUserUsage() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be logged in');
  }

  const userRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    // Initialize user document with usage tracking
    const initialData = {
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
    };
    await setDoc(userRef, initialData);
    return initialData;
  }

  const data = userDoc.data();
  
  // Ensure usage fields exist (for existing users)
  if (!data.usage) {
    data.usage = {
      cvGenerations: 0,
      interviewSessions: 0,
    };
    await updateDoc(userRef, { usage: data.usage });
  }
  
  if (!data.subscription) {
    data.subscription = {
      isActive: false,
      subscribedAt: null,
      expiresAt: null,
    };
    await updateDoc(userRef, { subscription: data.subscription });
  }

  return data;
}

/**
 * Check if user can generate a CV (has free trial or subscription)
 */
export async function canGenerateCV() {
  try {
    const userData = await getUserUsage();
    
    // Subscribers can always generate
    if (userData.subscription?.isActive) {
      return { allowed: true, reason: 'subscription' };
    }
    
    // Check free tier limit
    const cvCount = userData.usage?.cvGenerations || 1;
    if (cvCount < FREE_CV_GENERATIONS) {
      return { 
        allowed: true, 
        reason: 'free_trial',
        remaining: FREE_CV_GENERATIONS - cvCount,
      };
    }
    
    return { 
      allowed: false, 
      reason: 'limit_reached',
      message: 'You have used your free CV generation. Subscribe to create unlimited CVs!',
    };
  } catch (error) {
    console.error('Error checking CV generation permission:', error);
    throw error;
  }
}

/**
 * Check if user can use interview coaching (has free trial or subscription)
 */
export async function canUseInterviewCoaching() {
  try {
    const userData = await getUserUsage();
    
    // Subscribers can always use
    if (userData.subscription?.isActive) {
      return { allowed: true, reason: 'subscription' };
    }
    
    // Check free tier limit
    const sessionCount = userData.usage?.interviewSessions || 1;
    if (sessionCount < FREE_INTERVIEW_SESSIONS) {
      return { 
        allowed: true, 
        reason: 'free_trial',
        remaining: FREE_INTERVIEW_SESSIONS - sessionCount,
      };
    }
    
    return { 
      allowed: false, 
      reason: 'limit_reached',
      message: 'You have used your free interview coaching session. Subscribe for unlimited access!',
    };
  } catch (error) {
    console.error('Error checking interview coaching permission:', error);
    throw error;
  }
}

/**
 * Increment CV generation count after successful generation
 */
export async function incrementCVGeneration() {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const data = userDoc.data();
    const currentCount = data.usage?.cvGenerations || 0;
    await updateDoc(userRef, {
      'usage.cvGenerations': currentCount + 1,
      'usage.lastCvGeneratedAt': new Date().toISOString(),
    });
  }
}

/**
 * Increment interview session count after starting a session
 */
export async function incrementInterviewSession() {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const data = userDoc.data();
    const currentCount = data.usage?.interviewSessions || 0;
    await updateDoc(userRef, {
      'usage.interviewSessions': currentCount + 1,
      'usage.lastInterviewSessionAt': new Date().toISOString(),
    });
  }
}

/**
 * Activate subscription for user (call this after successful payment)
 * In production, this should be triggered by Stripe webhook
 */
export async function activateSubscription() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be logged in');
  }

  const userRef = doc(db, 'users', user.uid);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days

  await updateDoc(userRef, {
    subscription: {
      isActive: true,
      subscribedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
    },
  });
}

/**
 * Get Stripe payment link with user email pre-filled
 */
export function getPaymentLink() {
  const user = auth.currentUser;
  if (!user || !STRIPE_PAYMENT_LINK) {
    return STRIPE_PAYMENT_LINK || '#';
  }
  
  // Add email to payment link for easier checkout
  const separator = STRIPE_PAYMENT_LINK.includes('?') ? '&' : '?';
  return `${STRIPE_PAYMENT_LINK}${separator}prefilled_email=${encodeURIComponent(user.email)}`;
}

/**
 * Check if user has an active subscription
 */
export async function hasActiveSubscription() {
  try {
    const userData = await getUserUsage();
    return userData.subscription?.isActive || false;
  } catch {
    return false;
  }
}

/**
 * Cancel user's subscription
 */
export async function cancelSubscription() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be logged in');
  }

  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, {
    'subscription.isActive': false,
    'subscription.cancelledAt': new Date().toISOString(),
  });
}

/**
 * Update user profile (display name)
 */
export async function updateUserProfile(displayName) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User must be logged in');
  }

  const userRef = doc(db, 'users', user.uid);
  await updateDoc(userRef, {
    displayName: displayName,
    updatedAt: new Date().toISOString(),
  });
}
