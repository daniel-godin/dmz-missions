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

import { toDoMainMissionsContainer, toDoMainFobContainer, populateToDoLists, addDMZToDoDocs, refreshTaskPage, populateMissionToDoLists, populateFOBToDoLists, toDoEventListeners, } from "./to-do";
import { } from "./dmz-missions";
import { loadPage } from "./ui";
import { auth, db } from "./firebase";
import { } from "./auth";
import { } from "./events/event-the-boys-diabolical";

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// console.log('INDEX.JS CHECK:  beginning triggered'); // For Error Checking
// Page Loads and Listener Triggers

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    const userID = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
    
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
  }
})

// console.log('INDEX.JS CHECK:  END TRIGGERED'); // For Error Checking