// For all firebase specific code.  Moving things out of the index later.

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { 
  getAuth, 
  connectAuthEmulator, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  GoogleAuthProvider,
  FirebaseAuth,
} from "firebase/auth";

import { 
  getFirestore,
  connectFirestoreEmulator,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  Timestamp,
  onSnapshot,
} from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcnF8Vqs9g2gNmIYUCIFbbbkBnSMAQOo0",
  authDomain: "dmz-missions-150b0.firebaseapp.com",
  projectId: "dmz-missions-150b0",
  storageBucket: "dmz-missions-150b0.appspot.com",
  messagingSenderId: "756249949288",
  appId: "1:756249949288:web:8f6dbb7b6cbfe6853577dd",
  measurementId: "G-Z86M5P6WED"
};

// Initialize Firebase Apps
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);