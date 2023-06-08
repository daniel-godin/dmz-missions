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

// import { dmzMissionsS3 } from "./dmz-missions-s3"; // DMZ Missions Imports

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

import {
  loadPage,
  fullCreateMissionGridLoggedIn, fullCreateMissionGridLoggedOut,
  authContainer,
  txtEmail,
  txtPassword,
  errorContainer,
  errorMessage,
  createAuthBox,
  profileLinkContainer,
  dmzMissionsContainer,
  hideLoginError,
  showLoginError,
  btnLogIn, btnSignUp, btnSignOut, btnGoogleSignIn, btnHideHeader,
  navSignedIn, navSignedOut,
  dmzPageHeader,
  showDMZHeaderAuthStatus,
  showLoginState,
} from "./dmz-missions-ui";

import { formDMZSignUp, newUser, createAccount, handleGoogle } from "./auth-ui";

import { app, auth, db } from "./firebase";

// // Initialize Firebase Apps
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Local Emulators
// connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
// connectFirestoreEmulator(db, 'localhost', 8080);

// Early Console.log Check.  Before lots of code executes or gets stuck.
console.log('INDEX.JS CHECK:  beginning triggered');

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
    // showLoginError(error);
  }
}

// const createAccount = async () => {
//     // Do I need a preventDefault() function?
//   console.log('sign up button clicked');
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
//     await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
//     await initialDatabaseSetUp(userCredential) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
//   }
//   catch(error) {
//     console.log(error);
//     showLoginError(error);
//   }
// }

// Sign-in With Google:
// const handleGoogle = async () => {
//     // Do I need a preventDefault() function?
//   console.log('google button clicked');
//   const provider = await new GoogleAuthProvider();
//   // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
//   return signInWithPopup(auth, provider);
// }

// function initialDatabaseSetUp (userCredentials) {
//   let uid = userCredentials.user.uid;
//   const newUser = {
//     userDisplayName: "Display Name - Future Fix",
//     userEmail: userCredentials.user.email,
//     userActivisionId: "",
//     userRegion: "",
//     signedUp: "time"
//   }
//   setDoc(doc(db, 'users', uid), newUser ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
//   setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3); //  Creates season 3 mission tracking doc inside a users UID Doc sub-collection.  This is the newest version I'm working with.
// }

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    let userDoc = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
    // hideLoginError();
    if (dmzMissionsContainer) {
      const dmzMissionsS3DocRefLoggedIn = doc(db, 'users', userDoc, 'mw2-trackers', 'dmzMissionsS3');
      fullCreateMissionGridLoggedIn(dmzMissionsS3DocRefLoggedIn);
    }
  }
  else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    loadPage(); // No user sent as a parameter.
    if (dmzMissionsContainer) {
      fullCreateMissionGridLoggedOut(dmzMissionsS3);
    }
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


if (btnLogIn) {
  btnLogIn.addEventListener('click', loginEmailPassword);
}
if (btnSignOut) {
  btnSignOut.addEventListener('click', logout);
}
// if (btnSignUp) {
//   btnSignUp.addEventListener('click', createAccount);
// }
// if (btnHandleGoogle) {
//   btnGoogleSignIn.addEventListener('click', handleGoogle);
// }

console.log('INDEX.JS CHECK:  END TRIGGERED');