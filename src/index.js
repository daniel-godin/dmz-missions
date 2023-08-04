import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator } from 'firebase/firestore';
import { auth, db } from "./firebase";

import { } from "./to-do";
import { } from "./dmz-missions";
import { } from "./ui";
import { } from "./auth";
import { } from "./events/event-the-boys-diabolical";
import { } from "./to-do";

// Local Emulators
// connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
// connectFirestoreEmulator(db, 'localhost', 8080);

// console.log("Error Check:  End of Index.JS file.") // For Error Checking.