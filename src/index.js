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

import { dataDmzStandardMissionsS4 } from "./data/data-dmz-standard-missions-s4"; // DMZ Missions Import
import { dataDmzFobS4 } from "./data/data-dmz-fob-s4"; // DMZ Forward Operating Base (FOB) Import

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

import { toDoMainMissionsContainer, toDoMainFobContainer, populateToDoLists, addDMZToDoDocs, refreshTaskPage, populateMissionToDoLists, populateFOBToDoLists, toDoEventListeners, } from "./to-do";

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
// connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
// connectFirestoreEmulator(db, 'localhost', 8080);

// console.log('INDEX.JS CHECK:  beginning triggered');

// Page Loads and Listener Triggers

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    const userID = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
    const docRefMissionTaskDoc = doc(db, 'users', user.uid, 'to-do-trackers', 'DMZToDoMissions');
    const docRefFOBTaskDoc = doc(db, 'users', user.uid, 'to-do-trackers', 'DMZToDoFOB');
    
    onSnapshot(docRefMissionTaskDoc, (snapshot) => {
      if (toDoMainMissionsContainer) {
        populateMissionToDoLists(snapshot, docRefMissionTaskDoc, db, userID);
      };
    })
    onSnapshot(docRefFOBTaskDoc, (snapshot) => {
      if (toDoMainMissionsContainer) {
        populateFOBToDoLists(snapshot, docRefFOBTaskDoc, db, userID);
      };
    })

    // if (dmzMissionsContainer) {
    //   const dmzMissionsS3DocRefLoggedIn = doc(db, 'users', userDoc, 'mw2-trackers', 'dmzMissionsS3');
    //   fullCreateMissionGridLoggedIn(dmzMissionsS3DocRefLoggedIn);
    // };
  }
  else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    loadPage(); // No user sent as a parameter.
  }
})


// Testing:



// console.log('INDEX.JS CHECK:  END TRIGGERED');