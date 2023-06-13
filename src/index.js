import { 
  getAnalytics 
} from "firebase/analytics";
import { 
  connectAuthEmulator,
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

import { dmzMissionsS3 } from "./dmz-mission-list-objects"; // DMZ Missions Imports

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

import {
  loadPage,
  fullCreateMissionGridLoggedIn, fullCreateMissionGridLoggedOut,
  profileLinkContainer,
  dmzMissionsContainer,
  showLoginState,
} from "./dmz-missions-ui";

import { auth, db } from "./firebase";

import { } from "./auth";

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// console.log('INDEX.JS CHECK:  beginning triggered');

// Page Loads and Listener Triggers

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    let userDoc = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
    if (dmzMissionsContainer) {
      const dmzMissionsS3DocRefLoggedIn = doc(db, 'users', userDoc, 'mw2-trackers', 'dmzMissionsS3');
      fullCreateMissionGridLoggedIn(dmzMissionsS3DocRefLoggedIn);
    }
  }
  else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    loadPage(); // No user sent as a parameter.
    // if (dmzMissionsContainer) {
    //   fullCreateMissionGridLoggedOut(dmzMissionsS3);
    // }
  }
})


// Testing:

// onSnapshot(docTestRef, (doc) => {
//   // console.log(doc.data(), doc.id);
//   // addDMZMissionsS3ObjToDb(db); // Adds the dmzMissionsS3 object to db, mw2-info, dmzMissions.  This is OUTSIDE of the user collection stuff.
// })


// console.log('INDEX.JS CHECK:  END TRIGGERED');