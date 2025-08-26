import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDamcmKfZ7RA1ni7qTndJ_Cgz8YDP7uQ3Y",
  authDomain: "bless-project-3953a.firebaseapp.com",
  projectId: "bless-project-3953a",
  storageBucket: "bless-project-3953a.firebasestorage.app",
  messagingSenderId: "1059887410995",
  appId: "1:1059887410995:web:c5348affb70930d23f5846",
  measurementId: "G-EZWXJVNZVL"
};

// 중복 초기화 방지
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
