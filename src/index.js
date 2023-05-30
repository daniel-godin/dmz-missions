// Import the functions you need from Firebase SDK's.
import { initializeApp } from "firebase/app";
import { 
  getAnalytics 
} from "firebase/analytics";
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
  GoogleAuthProvider
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
  query,
  where,
  Timestamp
} from 'firebase/firestore';

// DMZ Missions List Object.  Nested Objects and arrays.  Basically, what I want the db (firestore) doc to look like.  UID > mw2-trackers > dmzMissions (doc).
import {
  dmzMissionObjectDocTemplate
} from './dmz-missions-list';

// Import Non-Firebase Code From Other Files:  THIS IS ONLY FOR TESTING, THIS IS THE OFFICIAL VIDEO GITHUB CODE.
// Open-source Firebase log-in code.  For testing and getting it working.  Will replace all of this from 'ui' later.
import { 
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
  btnLogin,
  btnSignup,
  btnGoogleSignUp,
  btnLogout,
  txtPassword, 
  lblAuthState,
  btnTestingDocAdd,
  btnTestingDocAddTwo
} from "./ui";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// App Configurations:

// Setting Up Auth From Video:
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}
btnLogin.addEventListener("click", loginEmailPassword);

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}
btnSignup.addEventListener("click", createAccount);

onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user);
    showApp();
    showLoginState(user);

    hideLoginError();
  }
  else {
    showLoginForm();
    lblAuthState.innerHTML = "You're not logged in.";
  }
})

const monitorAuthState = async () => {

}
monitorAuthState();

const logout = async () => {
  await signOut(auth);

}
btnLogout.addEventListener("click", logout);

// Sign-in With Google:

const handleGoogle = async () => {
  const provider = await new GoogleAuthProvider();

  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
  console.log('handleGoogle function triggered');
  return signInWithPopup(auth, provider);
}
btnGoogleSignUp.addEventListener("click", handleGoogle);

