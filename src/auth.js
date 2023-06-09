// Put UI elements and code for auth in here, get it out of the main index.js.
// UI Elements and functions for Signing up users, and signing in users.  Also validation and the user interface.

import { app, auth, db } from "./firebase";

import { setDoc, doc, connectFirestoreEmulator } from "firebase/firestore";

import { createUserWithEmailAndPassword, connectAuthEmulator, updateProfile, sendEmailVerification } from "firebase/auth";

import { dmzMissionsS3 } from "./dmz-missions-s3";

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);


// DOM Element Variables:
export const formDMZSignUp = document.getElementById('formDMZSignUp');

export const btnLogIn = document.getElementById('btnLogIn');
export const btnSignUp = document.getElementById('btnSignUp');

export const authContainer = document.getElementById('authContainer');
export const txtEmail = document.getElementById('txtEmail');
export const txtPassword = document.getElementById('txtPassword');
export const txtDisplayName = document.getElementById('txtDisplayName');

export const errorContainer = document.getElementById('errorContainer');
export const errorMessage = document.getElementById('errorMessage');


// Sign-up Listeners and Functions:
if (formDMZSignUp) { // If the DMZ Sign Up form exists in the DOM, it means the user is on the sign-up.html page.  Everything here will then activate.
  formDMZSignUp.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing.
    console.log('Start of Create Account Function Triggered'); // This console log is set up to make sure the function is triggering correctly.
    let loginEmail = txtEmail.value;
    let loginPassword = txtPassword.value;
    let displayName = txtDisplayName.value;
    try {
      await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
      await updateProfile(auth.currentUser, { displayName: displayName});
      await sendEmailVerification(auth.currentUser);
      await createUserDocs(auth.currentUser);
    }
    catch(error) {
      console.log(error);
      // showLoginError(error); // Still need to fix this.
    }
    formDMZSignUp.reset();
    })
  console.log('End of Create Account Function Triggered'); // This console log is set up to make sure this event goes through entire set of functions.
}
const createUserDocs = async (user) => { // Creates an initial setup for each user when they sign up.  Later I will do this after a verification email is confirmed.
  const userDocObj = {
    userId: user.uid,
    userDisplayName: user.displayName,
    userActivisionId: "",
    userRegion: "",
  }
  await setDoc(doc(db, 'users', user.uid), userDocObj ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
  await setDoc(doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3); // Creates a doc in db > users > UID > mw2-trackers > dmzMissionsS3 (This is the doc that tracks a users Mission Progress in Season 3)
}



export const showLoginError = (error) => {
  errorContainer.style.display = 'block';
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    errorMessage.innerText = 'Wrong Password.  Try Again.';
  } else {
    errorMessage.insertAdjacentHTML('afterbegin', `Error: ${error.message}`)
  }
}

