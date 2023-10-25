// Active Tasks JavaScript File.  For the "Active Tasks" Feature.

// Firebase Imports:
import { doc, setDoc, onSnapshot, } from "firebase/firestore";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

// Other Imports:
// import { dataS6DMZFOB, } from "./data/data-s6-dmz-fob";
// import { dataS6DMZStandardMissions } from "./data/data-s6-dmz-standard-missions";
import { FOBDataObject, currentFOBDocName } from "./fob";
import { currentDMZStandardMissions, currentDMZSeasonDocName } from "./dmz-missions";
import { DMZFactionsArray, dataDMZFactionLevels } from "./data/data-dmz-faction-levels";


import { logInRequiredFunction } from "./ui";
// import { createFactionLevelDisplay } from "./faction-bar";
import { camelCase } from "./tools";

const activeTasksContainer = document.getElementById('activeTasksContainer');

// I actually don't like how this works at all, but I'm set on doing it this way for the others.  Fix this later.  REFACTOR.
// Change this at the beginning of each season.
const dataObjectFOB = FOBDataObject;
const FOBDocName = currentFOBDocName;
const dataObjectStandardMissions = currentDMZStandardMissions;
const currentStandardMissionsDocName = currentDMZSeasonDocName;

// Variables For Faction Bar:
const factionLevelsContainer = document.getElementById('factionLevelsContainer');
const factionBarDocumentName = 'factionLevels';
const factionBarDataObject = dataDMZFactionLevels;

onAuthStateChanged(auth, user => {
    if (!activeTasksContainer) { return; };
    if (!user) { logInRequiredFunction(); return; }

    // Firestore FOB Document Creation/Utilization.
    const docRefFOB = doc(db, 'users', user.uid, 'mw2-trackers', `${FOBDocName}`);
    onSnapshot(docRefFOB, (snapshot) => {
        if (!snapshot.exists()) { 
            createActiveTasks(FOBDocName, dataObjectFOB, docRefFOB, user, db);
            setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), dataObjectFOB); 
            return;
        };
        let snapObj = snapshot.data();
        createActiveTasks(FOBDocName, snapObj, docRefFOB, user, db);
    });

     // Firestore Faction Levels Document Creation/Utilization.
    const docRefFactionLevels = doc(db, 'users', user.uid, 'mw2-trackers', `${factionBarDocumentName}`);
    onSnapshot(docRefFactionLevels, (snapshot) => {
        if (!snapshot.exists()) {
            createFactionLevelDisplay(factionBarDataObject, docRefFactionLevels, factionBarDocumentName, user, db);
            setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${factionBarDocumentName}`), factionBarDataObject);
            return;
        };
        let snapObj = snapshot.data();
        createFactionLevelDisplay(snapObj, docRefFactionLevels, factionBarDocumentName, user, db);
    });

    // const docRefStandardMissions = doc(db, 'users', user.uid, 'mw2-trackers', `${currentStandardMissionsDocName}`);

    // onSnapshot(docRefStandardMissions, (snapshot) => {
    //     if (!snapshot.exists()) { setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentStandardMissionsDocName}`), dataObjectStandardMissions); } // I think I need to put a reload() or return, or something at the end of this.
    //     let snapObj = snapshot.data();
    //     createActiveTasks(currentStandardMissionsDocName, snapObj, docRefStandardMissions, user, db);
    // }) 
})


const createActiveTasks = (docName, dataObj, docRef, user, db, ) => { // I think I will need to move these out at some point, if I want to use 2 documents.
    // resetDOM(activeTasksContainer);
    createDOM(dataObj, docRef, user, db);
    createListenerEvents(dataObj, docRef, user, db);
}

const createDOM = (dataObj, docRef, user, db) => {
    // console.log("Active Tasks: createDOM Function Triggered."); // FOR TESTING.

    activeTasksContainer.innerHTML = ''; // Resets main container to zero.

    dataObj = dataObj.newSetUpKey; // This is a hacky way to get around FireStore's limitations of not allow nested arrays, nor having a document start with arrays.  Basically, newSetUpKey is the only key to the data Object, and it's value is an array with all the data.

    let userStatus;
    let TaskContainerClass;
    if (!user) { 
        userStatus = "hide"; 
        TaskContainerClass = "fob-mission-task-container-logged-out";
    };
    if (user) { 
        userStatus = "";
        TaskContainerClass = "fob-mission-task-container";
    };

    // Later:  Create 2 or 3 div columns for:  Standard Missions | Passive Missions (FOB) Collection Tasks | FOB Boss Killing Tasks

    let DOMAttachmentPointLoop1 = document.getElementById('activeTasksContainer');

    for (let i = 0; i < dataObj.length && i < 10; i++) { // First Loop:
        // console.log("First Loop"); // FOR TESTING.
        let arrayOfSectionTitle = Object.keys(dataObj[i]); // Creates an array of Object keys, which I can iterate through.
        let sectionTitle = arrayOfSectionTitle[0];
        let arrayFirstLevel = dataObj[i][sectionTitle];

        for (let j = 0; j < arrayFirstLevel.length && j < 20; j++) { // Second Loop (NESTED IN FIRST):
            let arrayOfSubSectionTitles = Object.keys(arrayFirstLevel[j]);
            let subSectionTitle = arrayOfSubSectionTitles[0];
            let arraySecondLevel = arrayFirstLevel[j][subSectionTitle];

            for (let k = 0; k < arraySecondLevel.length && k < 20; k++) { // THIRD LOOP (NESTED IN 2ND LOOP).  Loops through each Mission Object.
                let missionTitleStatus;

                let missionDataObject = arraySecondLevel[k];

                let title = missionDataObject.title;
                let missionId = missionDataObject.missionID;
                let complete = missionDataObject.complete; // Two below if (statements) change the DOM Mission Checkbox to be "checked" or "not checked".
                    if (complete == true) { missionTitleStatus = 'mission-complete'; complete = "checked"; };
                    if (complete == false) { missionTitleStatus = ''; complete = "" };
                let unlocked = missionDataObject.unlocked;
                let factionRequirement = missionDataObject.factionRequirement;
                let reward = missionDataObject.reward;

                const missionUnlocked = unlocked;

                // console.log("MissionUnlocked", missionUnlocked);

                let arrayThirdLevel = missionDataObject.tasks;

                let missionDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}`;

                if (missionDataObject.complete == false && missionDataObject.unlocked == true) { 
                    let DOMAttachmentPointLoop3 = document.getElementById('activeTasksContainer');

                    DOMAttachmentPointLoop3.insertAdjacentHTML('beforeend', `
                        <div class='active-tasks-mission-container' data-dom-attachment-point='${missionId}' data-mission-dot-notation='${missionDotNotation}'>
                            <header class='active-tasks-mission-title'>${title}</header>
                        </div>
                    `)
                }

                for (let p = 0; p < arrayThirdLevel.length && p < 10; p++) { // Fourth and Last Loop (NESTED IN THIRD).  Loops Through Each Mission Object's "tasks" key.  .tasks is an array of objects.

                    let taskObj = arrayThirdLevel[p];

                    let strikeThrough = '';

                    let task = taskObj.task;
                    let taskId = taskObj.taskID;
                    let progressCurrent = taskObj.progressCurrent;
                    let progressTotal = taskObj.progressTotal;
                    let complete = taskObj.complete; // Two below if (statements) change the DOM Task Checkbox to be "checked" or "not checked".
                        if (complete == true) { strikeThrough = 'strike-through'; complete = "checked"; }
                        if (complete == false) { strikeThrough = ''; complete = "" };

                    let missionTaskDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}.tasks.${p}`

                    if (missionDataObject.complete == false && missionDataObject.unlocked == true && complete == false) { 
                        // console.table("Incomplete, Available Tasks:", taskObj);

                        let DOMAttachmentPointLoop4 = document.querySelector(`[data-dom-attachment-point="${missionId}"]`);

                        DOMAttachmentPointLoop4.insertAdjacentHTML('beforeend', `
                            <div class='active-tasks-task-container'>
                                <div class='active-tasks-task-checkbox'><input type='checkbox' class='task-checkbox' data-task-id='${taskId}' data-parent-mission-notation='${missionDotNotation}' data-obj-notation='${missionTaskDotNotation}' ${complete} /></div>
                                <div class='active-tasks-task-description'>${task}</div>
                                <div class='active-tasks-progress-container'>
                                    <button class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='-' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>-</button>
                                    <p class='${strikeThrough}'>${progressCurrent}</p><p class='${strikeThrough}'> / </p><p class='${strikeThrough}'>${progressTotal}</p>
                                    <button class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='+' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>+</button>
                                </div>
                            </div>
                        `)
                    };
                } // End of Fourth (and final) Loop.
            } // End of Third Loop.
        } // End of Second Loop.
    } // End of First Loop
}

const createListenerEvents = (obj, docRef, user, db) => {
    // What ListenerEvent Do I Want To Create?
    // Task (not mission) checkboxes.
    // - & + buttons.

    if (!user) { console.log("Not Logged In.  Please log in to use this page."); return; }

    const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('task-checkbox');

    for (let i = 0; i < arrayOfMissionTaskCheckboxes.length; i++) {
        arrayOfMissionTaskCheckboxes[i].addEventListener('click', (e) => {
            console.log("TEST: e.target", e.target);

            let checked = e.target.checked;
            let notation = e.target.dataset.objNotation;
            let parentMissionNotation = e.target.dataset.parentMissionNotation;

            let notationArray = notation.split('.'); // Splits the notation string into an Array that I can iterate through, then reconnect as bracket notation.
            let parentMissionArray = parentMissionNotation.split('.');

            let parentNotationString = (arr, obj) => {
                for (let i = 0; i < arr.length; i++) {
                    let key = arr[i];
                    let testObj = obj;
                    testObj = testObj.newSetUpKey;

                    if (testObj && testObj[key]) {
                        testObj = testObj[key];
                    } else {
                        console.log("nested prop not found.");
                        return testObj;
                    }

                }
            }

            console.log('consolelog parent notation string obj', parentNotationString(parentMissionArray, obj));


            let currentObj = obj;
            currentObj = currentObj.newSetUpKey;

            for (let j = 0; j < notationArray.length; j++) { // Loops through the Notation Array and combines them back into a notation for the currentObj notation.
                let key = notationArray[j];
                if (currentObj && currentObj[key]) {
                    currentObj = currentObj[key];
                } else {
                    console.log("nested property not found.");
                    break;
                }
            }

            let savePreviousProgressCurrentNumber = currentObj.progressCurrent;
            console.log ("1st prevNum", savePreviousProgressCurrentNumber);

            currentObj.complete = checked;
            if (checked == true) { 
                currentObj.progressCurrent = currentObj.progressTotal; 
                // let missionComplete = checkIfMissionComplete(); // Checks if all conditions are met to complete a task's parent mission.

                // if (missionComplete) { // If checkIfMissionComplete returns true.  Means mission is complete, and you need to "unlock" the next mission in the array of mission objects.  If no next object exists, nothing to unlock.
                //     unlockNextMission();
                // }




            } // Updates object's progressCurrent number to match the progressTotal.
            if (checked == false && currentObj.progressCurrent >= currentObj.progressTotal) { 
                currentObj.progressCurrent = 0 
            } // Later, I want this to go back to whatever it was in a previous state.  Unsure of how to do this right now.

            // console.log ("2nd prevNum", savePreviousProgressCurrentNumber);


            setDoc(docRef,  obj , { merge:true }); // updateDoc() does not work because updateDoc() does not accept [ ] bracket notation.  Instead I have to use setDoc and merge:true.

            // console.log ("3rd prevNum", savePreviousProgressCurrentNumber);

        });
    }

}

const createFactionLevelDisplay = (dataObj, docRef, docName, user, db) => {

    factionLevelsContainer.innerHTML = ''; // Resets Faction Container To Zero.

    for (let i = 0; i < DMZFactionsArray.length; i++) {

        let objProp = camelCase(DMZFactionsArray[i]);
        let factionLevel = dataObj[objProp];
        let factionObjectDotNotation = `${objProp}`;

        factionLevelsContainer.insertAdjacentHTML('beforeend', `
            <div class='faction-name-container'>
                <p class='faction-name'>${DMZFactionsArray[i]} : ${factionLevel}</p>
                <button class='btn-faction-change-amount' data-obj-notation='${factionObjectDotNotation}' data-btn-type='-' data-faction-level='${factionLevel}' >-</button>
                <button class='btn-faction-change-amount' data-obj-notation='${factionObjectDotNotation}' data-btn-type='+' data-faction-level='${factionLevel}' >+</button>
            </div>
        `)
    }

    const arrayOfFactionButtons = document.getElementsByClassName('btn-faction-change-amount');
    for (let i = 0; i < arrayOfFactionButtons.length; i++) {
        arrayOfFactionButtons[i].addEventListener('click', (e) => {

            let notation = e.target.dataset.objNotation;
            let operator = e.target.dataset.btnType;
            let factionLevel = e.target.dataset.factionLevel;
            
            if (operator == '-') { --factionLevel; };
            if (operator == '+') { ++factionLevel; };
            if (factionLevel < 0) { factionLevel = 0; }; // Prevent faction level from going negative.

            dataObj[notation] = factionLevel; // Changes the object[key]'s value to whatever factionLevel is now.

            setDoc(docRef, dataObj, { merge:true });  // Updates User's Firestore Doc I could use updateDoc() here, but setDoc with merge:true works nearly the same.
        })
    }
}

// const checkIfMissionComplete = (obj, arr, completeStatus) => {
//     // Pseudo-code:
//     // if parent mission of task is parentObj.complete: true || all task objects are taskObj.complete: true;  return true.
//     let 

// }

// const unlockNextMission = (obj, arr, completeStatus) => {

// }


const resetDOM = (...args) => {
    for (let arg of args) { arg.innerHTML = ''; console.log("Reset DOM", arg) }
}

// TESTING:
// const createDOM2 = () => {
//     // Can I pass ...args to this function, and have it create a div box for each arg?
//     // Before it creates the div boxes, it should divBoxID.innerHTML = '';  This makes sure when onSnapshot is triggered, it doesn't duplicate.
//     // Maybe instead... it's pageContainer.innerHTML = ''; Then it triggers all the rest?  IDK.  Need to think about this for later.
// }