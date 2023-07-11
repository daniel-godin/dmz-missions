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

import { toDoMainMissionsContainer, toDoMainFobContainer, populateToDoLists, addDMZToDoDocs, refreshTaskPage, populateMissionToDoLists, populateFOBToDoLists, toDoEventListeners, } from "./to-do";

import {
  fullCreateMissionGridLoggedIn, fullCreateMissionGridLoggedOut,
  dmzMissionsContainer,
} from "./dmz-missions-ui";

import { loadPage } from "./ui";

import { auth, db } from "./firebase";

import { } from "./auth";

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// console.log('INDEX.JS CHECK:  beginning triggered');

// Page Loads and Listener Triggers

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    const userID = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
    
    const docRefMissionGridS4 = doc(db, 'users', user.uid, 'mw2-trackers', 'DMZStandardMissionsS4')
    onSnapshot(docRefMissionGridS4, (snapshot) => {
      if (dmzMissionsContainer) {
        // If this container exists, it means the user is on the dmzMissions page.  Then it should trigger the function which populates the DOM.
        fullCreateMissionGridLoggedIn(snapshot, docRefMissionGridS4, db, userID);
      }
    })

    const docRefMissionTaskDoc = doc(db, 'users', user.uid, 'to-do-trackers', 'DMZToDoMissions');
    onSnapshot(docRefMissionTaskDoc, (snapshot) => {
      if (toDoMainMissionsContainer) {
        populateMissionToDoLists(snapshot, docRefMissionTaskDoc, db, userID);
      };
    })

    const docRefFOBTaskDoc = doc(db, 'users', user.uid, 'to-do-trackers', 'DMZToDoFOB');
    onSnapshot(docRefFOBTaskDoc, (snapshot) => {
      if (toDoMainMissionsContainer) {
        populateFOBToDoLists(snapshot, docRefFOBTaskDoc, db, userID);
      };
    })

  } else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    loadPage(); // No user sent as a parameter.
    if (dmzMissionsContainer) {
      fullCreateMissionGridLoggedOut(dataDmzStandardMissionsS4);
    }
  }
})


// Testing:

// console.log('INDEX.JS CHECK:  END TRIGGERED');