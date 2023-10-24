import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator } from 'firebase/firestore';
import { auth, db } from "./firebase";

import { } from "./ui";
import { } from "./auth";
import { } from "./dmz-missions";
import { } from "./to-do";
import { } from "./fob";
import { } from "./active-tasks";

// Last Updated:  CHANGE THIS WHEN YOU DO FIREBASE DEPLOY
export const lastUpdated = "(2023.10.20)";
export const currentWebAppVersion = "version: 0.1" + " " + lastUpdated;


// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// console.log("Error Check:  End of Index.JS file.") // For Error Checking.`