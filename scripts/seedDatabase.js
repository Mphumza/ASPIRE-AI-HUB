/**
 * Database Seed Script
 * Clears the Firestore database and creates 2 subscribed test users
 * 
 * Usage:
 * 1. Download your Firebase service account key from:
 *    https://console.firebase.google.com/project/ai-cv-4bec1/settings/serviceaccounts/adminsdk
 * 2. Save it as 'serviceAccountKey.json' in the scripts folder
 * 3. Run: node scripts/seedDatabase.js
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load service account key
let serviceAccount;
try {
  const keyPath = join(__dirname, 'serviceAccountKey.json');
  serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
} catch (error) {
  console.error('❌ Error: Could not find serviceAccountKey.json');
  console.log('\nTo get your service account key:');
  console.log('1. Go to: https://console.firebase.google.com/project/ai-cv-4bec1/settings/serviceaccounts/adminsdk');
  console.log('2. Click "Generate new private key"');
  console.log('3. Save the file as "scripts/serviceAccountKey.json"');
  process.exit(1);
}

// Initialize Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);
const auth = getAuth(app);

// Test users to create
const testUsers = [
  {
    email: 'subscriber1@test.com',
    password: 'Test123!',
    displayName: 'Test Subscriber 1'
  },
  {
    email: 'subscriber2@test.com',
    password: 'Test123!',
    displayName: 'Test Subscriber 2'
  }
];

async function deleteCollection(collectionPath) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(500);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve).catch(reject);
  });
}

async function deleteQueryBatch(query, resolve) {
  const snapshot = await query.get();

  if (snapshot.size === 0) {
    resolve();
    return;
  }

  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  await batch.commit();
  console.log(`  Deleted ${snapshot.size} documents`);

  // Recurse on the next batch
  process.nextTick(() => {
    deleteQueryBatch(query, resolve);
  });
}

async function deleteAllAuthUsers() {
  console.log('\n🗑️  Deleting all authentication users...');
  
  try {
    const listUsersResult = await auth.listUsers(1000);
    
    if (listUsersResult.users.length === 0) {
      console.log('  No users to delete');
      return;
    }
    
    const uids = listUsersResult.users.map(user => user.uid);
    await auth.deleteUsers(uids);
    console.log(`  Deleted ${uids.length} auth users`);
  } catch (error) {
    console.error('  Error deleting auth users:', error.message);
  }
}

async function clearDatabase() {
  console.log('\n🗑️  Clearing Firestore database...');
  
  // Delete users collection
  console.log('  Deleting users collection...');
  await deleteCollection('users');
  
  // Add any other collections you want to clear here
  // await deleteCollection('otherCollection');
  
  console.log('  ✅ Database cleared');
}

async function createTestUsers() {
  console.log('\n👥 Creating test users with subscriptions...');
  
  for (const userData of testUsers) {
    try {
      // Create the auth user
      let user;
      try {
        user = await auth.createUser({
          email: userData.email,
          password: userData.password,
          displayName: userData.displayName,
          emailVerified: true
        });
      } catch (error) {
        if (error.code === 'auth/email-already-exists') {
          // User exists, get their UID
          user = await auth.getUserByEmail(userData.email);
          console.log(`  ⚠️  User ${userData.email} already exists, updating...`);
        } else {
          throw error;
        }
      }
      
      // Create user document with active subscription
      const now = new Date();
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year subscription
      
      await db.collection('users').doc(user.uid).set({
        email: userData.email,
        displayName: userData.displayName,
        createdAt: now.toISOString(),
        usage: {
          cvGenerations: 0,
          interviewSessions: 0,
        },
        subscription: {
          isActive: true,
          subscribedAt: now.toISOString(),
          expiresAt: expiresAt.toISOString(),
          plan: 'premium'
        },
      });
      
      console.log(`  ✅ Created: ${userData.email}`);
      console.log(`     Password: ${userData.password}`);
      console.log(`     Subscription: Active (expires ${expiresAt.toLocaleDateString()})`);
    } catch (error) {
      console.error(`  ❌ Failed to create ${userData.email}:`, error.message);
    }
  }
}

async function main() {
  console.log('🚀 ASPIRE-AI-HUB Database Seeder');
  console.log('================================');
  
  try {
    // Step 1: Delete all auth users
    await deleteAllAuthUsers();
    
    // Step 2: Clear the database
    await clearDatabase();
    
    // Step 3: Create test users with subscriptions
    await createTestUsers();
    
    console.log('\n✅ Database seeding complete!');
    console.log('\n📋 Test Accounts:');
    console.log('─────────────────────────────────');
    testUsers.forEach(user => {
      console.log(`   Email: ${user.email}`);
      console.log(`   Password: ${user.password}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
  }
  
  process.exit(0);
}

main();
