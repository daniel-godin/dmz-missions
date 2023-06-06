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

import { dmzMissionsS3 } from "./dmz-missions-s3"; // DMZ Missions Imports

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

import {
  arrayOfMissionCheckboxes, createMissionGridLoggedOut, createMissionGridLoggedIn, fullCreateMissionGridLoggedIn, fullCreateMissionGridLoggedOut,
  redactedTier1Container, redactedTier2Container, redactedTier3Container, redactedTier4Container, redactedTier5Container,
  whiteLotusTier1Container, whiteLotusTier2Container, whiteLotusTier3Container, whiteLotusTier4Container, whiteLotusTier5Container,
  legionTier1Container, legionTier2Container, legionTier3Container, legionTier4Container, legionTier5Container, blackMousTier1Container,
  blackMousTier2Container, blackMousTier3Container, blackMousTier4Container, blackMousTier5Container, 
  crownTier1Container, crownTier2Container, crownTier3Container, crownTier4Container, crownTier5Container,
  authContainer,
  txtEmail,
  txtPassword,
  errorContainer,
  errorMessage,
  createAuthBox,
  profileLinkContainer,
  dmzMissionsContainer,
  showLoginForm,
  showApp,
  hideLoginError,
  showLoginError,
  // showLoginState,
  btnLogIn, btnSignUp, btnSignOut, btnGoogleSignIn,
  checkBoxFunction,
  txtName,
  navSignedIn, navSignedOut,
  dmzPageHeader,
  showDMZHeaderAuthStatus,
  // createMissionGridLoggedOut, createMissionGridLoggedIn,
  showLoginState,



} from "./dmz-missions-ui";


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

// Early Console.log Check.  Before lots of code executes or gets stuck.
console.log('Early console log check, before lots of code executes or gets stuck');

// App Configurations:
// Setting Up Auth From Video:
const loginEmailPassword = async () => {
    // Do I need a preventDefault() function?

  console.log('login button clicked');
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    // console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

const createAccount = async () => {
    // Do I need a preventDefault() function?
  console.log('sign up button clicked');
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
    await initialDatabaseSetUp(userCredential) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

// Sign-in With Google:
const handleGoogle = async () => {
    // Do I need a preventDefault() function?
  console.log('google button clicked');
  const provider = await new GoogleAuthProvider();
  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
  return signInWithPopup(auth, provider);
}

function initialDatabaseSetUp (userCredentials) {
  let uid = userCredentials.user.uid;
  const newUser = {
    userDisplayName: "Display Name - Future Fix",
    userEmail: userCredentials.user.email,
    userActivisionId: "",
    userRegion: "",
    signedUp: "time"
  }
  setDoc(doc(db, 'users', uid), newUser ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
  setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3); //  Creates season 3 mission tracking doc inside a users UID Doc sub-collection.  This is the newest version I'm working with.
}

addDMZMissionsS3ObjToDb(db);

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    let userDoc = user.uid;
    showLoginState(user, 'logged-in');
    showDMZHeaderAuthStatus(user);
    // hideLoginError();
    const dmzMissionsS3DocRefLoggedIn = doc(db, 'users', userDoc, 'mw2-trackers', 'dmzMissionsS3');
    fullCreateMissionGridLoggedIn(dmzMissionsS3DocRefLoggedIn);
  }
  else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    showDMZHeaderAuthStatus();
    addDMZMissionsS3ObjToDb(db);
    const dmzMissionsS3DocRefLoggedOut = doc(db, 'mw2-info', 'dmzMissionsS3')
    fullCreateMissionGridLoggedOut(dmzMissionsS3DocRefLoggedOut);
    showLoginState(user, 'logged-out')
    // showLoginForm();
  }
})

const logout = async () => {
  // Do I need a preventDefault() function?
  console.log('sign out button clicked');

  await signOut(auth);
}
// Testing:



// onSnapshot(docTestRef, (doc) => {
//   // console.log(doc.data(), doc.id);
//   // addDMZMissionsS3ObjToDb(db); // Adds the dmzMissionsS3 object to db, mw2-info, dmzMissions.  This is OUTSIDE of the user collection stuff.
// })

// These keep spitting errors, and I can't get to the end of the file.  Need to fix them.  Maybe:  Load only when I'm on a page that has these?  I don't know.
btnLogIn.addEventListener('click', loginEmailPassword);
btnSignOut.addEventListener('click', logout);
btnSignUp.addEventListener('click', createAccount);
btnGoogleSignIn.addEventListener('click', handleGoogle);



console.log('Got to the end of Index.js script');