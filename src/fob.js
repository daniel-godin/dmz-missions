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
    // console.log(obj); // For Testing Purposes.

    const DMZFOBInformationContainer = document.getElementById('DMZFOBInformationContainer'); // DOM ID of div container for FOB Grid.

    // Change CSS rules to create the number of section boxes you need.  Doing this, so it's easy to add a new object in future seasons.
    // document.getElementById('DMZFOBInformationContainer').style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    // I might not actually need to do this, because it doesn't need a specific number, it just repeats with as many boxes as I create.

    const createMainSectionContainers = (obj) => {
        // console.log(obj);

        const arrayOfObjectKeyNames = Object.keys(obj); // Create an array of the property key names.  This serves 2 purposes:  1: Get the count, number of properties.  2:  Use the property name as a way to access it later in function/DOM creation.

        for (let i = 0; i < arrayOfObjectKeyNames.length && i < 20; i++) {
            DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
                <div class='fob-section-container' data-fob-section='${arrayOfObjectKeyNames[i]}'>
                    <header class='fob-section-header'>${arrayOfObjectKeyNames[i]}</header>
                    <div class='fob-section-info-container' data-fob-section-info='${arrayOfObjectKeyNames[i]}'></div>
                </div>
            `)
        }
    }

    createMainSectionContainers(obj);

    const createSectionsForEachMainSection = (obj) => {
        // console.log(obj); // For Testing

        const arrayOfObjectKeyNames = Object.keys(obj); // For Testing.

        for (let key in obj) { // This grabs stash, weaponsLocker, etc.

            // console.log(key);

            for (let key2 in obj[key]) { // This grabs in stash (and the rest): wallet, stashExpansion, etc.

                let DOMAttachmentPoint = document.querySelector(`[data-fob-section-info="${key}"]`);

                DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    <div class='test-class' data-attachment-id="${key2}"></div>
                `)

                for (let key3 in obj[key][key2]) { // This should grab: stashExpansion1, stashExpansion 2, etc. Objects

                    // console.log(key);

                    let objShort = obj[key][key2][key3]; // This should grab:  title, complete, etc.

                    let title = objShort.title;
                    let complete = objShort.complete;
                    let unlocked = objShort.unlocked;
                    let factionRequirement = objShort.factionRequirement;
                    let reward = objShort.reward;

                    // console.log("title:", title, "complete?:", complete, unlocked, factionRequirement, reward);

                    // Here's where you push the data to the DOM.

                    let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${key2}"]`);

                    DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                        <div class='test-class-2' data-attachment-id="${key3}"></div>
                    `)












                    for (let key4 in obj[key][key2][key3].tasks) { // This should grab:  task1, task2, task3

                        // console.log(key4); // For Testing

                        let taskShort = obj[key][key2][key3].tasks[key4];

                        let task = taskShort.task;
                        let progressCurrent = taskShort.progressCurrent;
                        let progressTotal = taskShort.progressTotal;
                        let complete = taskShort.complete;

                        // console.log(task, progressCurrent, progressTotal, complete); // For Testing










                    }
                }
            }
        }
    }

    createSectionsForEachMainSection(obj);

    
    
    // Create actual div boxes for each section.  Add data-${propertyKey} so you can access these later.
    
    // for (let i = 1; i < arrayOfFOBSections.length && i < 10; i++) {
    //     // Starting at i = 1, so it doesn't include "All".
    //     DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
    //         <div class='fob-section-container' data-fob-section='${arrayOfFOBSections[i]}'>
    //             <header class='fob-section-header'>${arrayOfFOBSections[i]}</header>
    //             <div class='fob-section-info-container' data-fob-section-info='${arrayOfFOBSections[i]}'></div>
    //         </div>
    //     `)
    // }

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

const getNumberOfProperties = (obj) => { // Use this re-usable function to get the number of properties, to change CSS rules and create div container boxes for each section.
    return Object.keys(obj).length;
}

    // For Later Feature:  Having selectable headers to show all or just one section at a time.
    // const arrayOfFOBSections = ["All", "Stash", "Weapons Locker", "Equipment", "Bounty Board", "Communications Station", ];

    // const DMZFOBHeaderSelect = document.getElementById('DMZFOBHeaderSelect');

    // for (let i = 0; i < arrayOfFOBSections.length && i < 10; i++) {
    //     DMZFOBHeaderSelect.insertAdjacentHTML('beforeend', `
    //         <div class='fob-header-select' data-fob-header='${arrayOfFOBSections[i]}'>
    //             <header>${arrayOfFOBSections[i]}</header>
    //         </div>
    //     `)
    // }