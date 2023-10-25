// This is a bar that can be imported into other pages to display a user's faction levels.
import { pageContainer } from "./ui"
import { camelCase } from "./tools";
import { DMZFactionsArray, dataDMZFactionLevels } from "./data/data-dmz-faction-levels";

// Firebase Imports:
import { doc, setDoc, onSnapshot, } from "firebase/firestore";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


// onAuthStateChanged(auth, user => {
//     if (!user) { console.log("Faction Bar.  No User."); return; };
//     if (!factionLevelsContainer) { console.log("Faction Bar.  No Container."); return; };
// })

