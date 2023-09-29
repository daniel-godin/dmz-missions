import { doc, getDoc, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
import { dataS6DMZFOB } from "./data/data-s6-dmz-fob";
import { dataS6DMZStandardMissions } from "./data/data-s6-dmz-standard-missions";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";


const DMZFOBContainer = document.getElementById('DMZFOBContainer');

// Change this at the beginning of each season.
const currentFOBTasks = dataS6DMZFOB;
const currentFOBDocName = 'DMZFOBS6';

// const currentFOBSeasonNumberOfTasks = 99; // 99 IS NOT TRUE, IT'S A PLACEHOLDER

onAuthStateChanged(auth, user => {
    if (!DMZFOBContainer) { console.log("not on fob page"); return; };

    if (!user) {
        createFOBGrid(currentFOBTasks, undefined, undefined, undefined);
        recommendLogInBox(DMZFOBContainer);
        return;
    }

    const docRefFOBGrid = doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`);

    onSnapshot(docRefFOBGrid, (snapshot) => {
        if (!snapshot.exists()) { setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), currentFOBTasks); }
        let snapObj = snapshot.data();
        createFOBGrid(snapObj, docRefFOBGrid, user, db);
    }) 
})

const createFOBGrid = async (obj, docRef, user, db) => {
    console.log(obj);

    const arrayOfFOBSections = ["All", "Stash", "Weapons Locker", "Equipment", "Bounty Board", "Communications Station", ];

    const DMZFOBHeaderSelect = document.getElementById('DMZFOBHeaderSelect');

    for (let i = 0; i < arrayOfFOBSections.length && i < 10; i++) {
        DMZFOBHeaderSelect.insertAdjacentHTML('beforeend', `
            <div class='fob-header-select' data-fob-header='${arrayOfFOBSections[i]}'>
                <header>${arrayOfFOBSections[i]}</header>
            </div>
        `)
    }

    const DMZFOBInformationContainer = document.getElementById('DMZFOBInformationContainer');

    
    for (let i = 1; i < arrayOfFOBSections.length && i < 10; i++) {
        // Starting at i = 1, so it doesn't include "All".
        DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
            <div class='fob-section-container' data-fob-section='${arrayOfFOBSections[i]}'>
                <header class='fob-section-header'>${arrayOfFOBSections[i]}</header>
                <div class='fob-section-info-container' data-fob-section-info='${arrayOfFOBSections[i]}'></div>
            </div>
        `)
    }

    // Here's where I use a loop to run through the data object and put each thing inside of the fob-section-info-containers.




    // // Move this array into the main data object later.
    // // 11 items.  11 columns.

    // for (let i = 0; i < obj.arrayOfFOBSections.length && i < 15; i++) {
    //     DMZFOBContainer.insertAdjacentHTML('beforeend', `
    //         <div class='fob-column' data-fob-column-id='${obj.arrayOfFOBSections[i]}'>
    //             <header>${obj.arrayOfFOBSections[i]}</header>
    //         </div>
    //     `);
    // }



}