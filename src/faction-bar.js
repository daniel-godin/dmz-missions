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







// export const createFactionLevelDisplay = (dataObj, docRef, docName, user, db) => {

//     resetDOMContainer(factionLevelsContainer); // Resets Faction Container To Zero.

//     for (let i = 0; i < DMZFactionsArray.length; i++) {

//         let objProp = camelCase(DMZFactionsArray[i]);
//         let factionLevel = dataObj[objProp];
//         let factionObjectDotNotation = `${objProp}`;

//         factionLevelsContainer.insertAdjacentHTML('beforeend', `
//             <div class='faction-name-container'>
//                 <p class='faction-name'>${DMZFactionsArray[i]} : ${factionLevel}</p>
//                 <button class='btn-faction-change-amount' data-obj-notation='${factionObjectDotNotation}' data-btn-type='-' data-faction-level='${factionLevel}' >-</button>
//                 <button class='btn-faction-change-amount' data-obj-notation='${factionObjectDotNotation}' data-btn-type='+' data-faction-level='${factionLevel}' >+</button>
//             </div>
//         `)
//     }

//     const arrayOfFactionButtons = document.getElementsByClassName('btn-faction-change-amount');
//     for (let i = 0; i < arrayOfFactionButtons.length; i++) {
//         arrayOfFactionButtons[i].addEventListener('click', (e) => {

//             let notation = e.target.dataset.objNotation;
//             let operator = e.target.dataset.btnType;
//             let factionLevel = e.target.dataset.factionLevel;
            
//             if (operator == '-') { --factionLevel; };
//             if (operator == '+') { ++factionLevel; };
//             if (factionLevel < 0) { factionLevel = 0; }; // Prevent faction level from going negative.

//             dataObj[notation] = factionLevel; // Changes the object[key]'s value to whatever factionLevel is now.

//             setDoc(docRef, dataObj, { merge:true });  // Updates User's Firestore Doc I could use updateDoc() here, but setDoc with merge:true works nearly the same.
//         })
//     }
// }



