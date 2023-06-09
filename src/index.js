import { 
  getAnalytics 
} from "firebase/analytics";
import { 
  onAuthStateChanged,
  signOut,
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
  profileLinkContainer,
  dmzMissionsContainer,
  btnLogIn, btnSignUp, btnSignOut, btnGoogleSignIn, btnHideHeader,
  navSignedIn, navSignedOut,
  dmzPageHeader,
  showDMZHeaderAuthStatus,
  showLoginState,
} from "./dmz-missions-ui";

import { auth, db } from "./firebase";

// // Local Emulators
// connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
// connectFirestoreEmulator(db, 'localhost', 8080);

// Early Console.log Check.  Before lots of code executes or gets stuck.
console.log('INDEX.JS CHECK:  beginning triggered');

// App Configurations:

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


if (btnSignOut) {
  btnSignOut.addEventListener('click', logout);
}

console.log('INDEX.JS CHECK:  END TRIGGERED');