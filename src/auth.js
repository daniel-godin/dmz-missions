// Put UI elements and code for auth in here, get it out of the main index.js.
// UI Elements and functions for Signing up users, and signing in users.  Also validation and the user interface.

import { app, auth, db } from "./firebase";

import { getFirestore, setDoc, doc, connectFirestoreEmulator } from "firebase/firestore";

import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, connectAuthEmulator, updateProfile, sendEmailVerification } from "firebase/auth";

import { dmzMissionsS3 } from "./dmz-missions-s3";




// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);


// DOM Element Variables:
export const formDMZSignUp = document.getElementById('formDMZSignUp');

export const btnHandleGoogle = document.getElementById('btnHandleGoogle');
export const btnLogIn = document.getElementById('btnLogIn');
export const btnSignUp = document.getElementById('btnSignUp');

export const authContainer = document.getElementById('authContainer');
export const txtEmail = document.getElementById('txtEmail');
export const txtPassword = document.getElementById('txtPassword');
export const txtDisplayName = document.getElementById('txtDisplayName');
export const radioRegion = document.getElementsByClassName('radio-region');

export const errorContainer = document.getElementById('errorContainer');
export const errorMessage = document.getElementById('errorMessage');




// export const createAccount = async (e) => {
//   e.preventDefault();
//   console.log('create account function triggered');
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;
//   const displayName = txtDisplayName.value;
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
//     await updateProfile(auth.currentUser, { displayName: displayName});
//     await sendEmailVerification(auth.currentUser);

//     await console.log(auth.currentUser);
    
//     const createUserDoc = async (user) => {
//       const userDocObj = {
//         userId: user.uid,
//         userDisplayName: user.displayName,
//         userActivisionId: "",
//         userRegion: "",
//       }
//       await setDoc(doc(db, 'users', user.uid), userDocObj ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
//       await setDoc(doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
//     }

//     await createUserDoc(auth.currentUser);

//     // await setDoc(doc(db, 'users', userCredential.user.uid), userCredential.user ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
//     // await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
//     // await initialDatabaseSetUp(userCredential) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
//   }
//   catch(error) {
//     console.log(error);
//     showLoginError(error);
//   }
//   formDMZSignUp.reset();
// }

// Sign-in With Google:
export const handleGoogle = async (event) => {
  // event.preventDefault();
  console.log('google button clicked');
  const provider = await new GoogleAuthProvider();
  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
  return signInWithPopup(auth, provider);
}


// export function initialDatabaseSetUp (userCredentials, displayName) {
//   let uid = userCredentials.user.uid;
//   const newUser = {
//     displayName: displayName,
//     userEmail: userCredentials.user.email,
//     uid: userCredentials.user.uid,
//     userActivisionId: "",
//     userRegion: "",
//     signedUp: "time"
//   }
//   setDoc(doc(db, 'users', uid), newUser ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
//   setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3); //  Creates season 3 mission tracking doc inside a users UID Doc sub-collection.  This is the newest version I'm working with.
// }

export const showLoginError = (error) => {
  errorContainer.style.display = 'block';
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    errorMessage.innerText = 'Wrong Password.  Try Again.';
  } else {
    errorMessage.insertAdjacentHTML('afterbegin', `Error: ${error.message}`)
  }
}

if (formDMZSignUp) {
  formDMZSignUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('create account function triggered');
    let loginEmail = txtEmail.value;
    let loginPassword = txtPassword.value;
    let displayName = txtDisplayName.value;
    let region;
    for (let i = 0; i < radioRegion.length; i++) {
      if (radioRegion[i].checked) {
        region = radioRegion[i].value;
      }
    }
    console.log(region);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
      await updateProfile(auth.currentUser, { displayName: displayName});
      await sendEmailVerification(auth.currentUser);

      await console.log(auth.currentUser);
      
      const createUserDoc = async (user) => {
        const userDocObj = {
          userId: user.uid,
          userDisplayName: user.displayName,
          userActivisionId: "",
          userRegion: region,
        }
        await setDoc(doc(db, 'users', user.uid), userDocObj ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
        await setDoc(doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
      }

      await createUserDoc(auth.currentUser);

      // await setDoc(doc(db, 'users', userCredential.user.uid), userCredential.user ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
      // await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3);
      // await initialDatabaseSetUp(userCredential) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
    }
    catch(error) {
      console.log(error);
      // showLoginError(error);
    }
    formDMZSignUp.reset();
    })
}
if (btnHandleGoogle) {
  btnHandleGoogle.addEventListener('click', handleGoogle);
}