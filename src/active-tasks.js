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
                                    <button type='button' class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='-' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>-</button>
                                    <p class='${strikeThrough}'>${progressCurrent}</p><p class='${strikeThrough}'> / </p><p class='${strikeThrough}'>${progressTotal}</p>
                                    <button type='button' class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='+' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>+</button>
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
            // console.log("TEST: e.target", e.target);

            let checked = e.target.checked;
            let notation = e.target.dataset.objNotation;
            let parentMissionNotation = e.target.dataset.parentMissionNotation;

            let notationArray = notation.split('.'); // Splits the notation string into an Array that I can iterate through, then reconnect as bracket notation.
            let parentMissionArray = parentMissionNotation.split('.');
            let nextMissionArray = createNextMissionArray(parentMissionNotation);

            let currentObj = obj.newSetUpKey;
            let taskObj = getObjWithNotationArray(currentObj, notationArray);
            let missionObj = getObjWithNotationArray(currentObj, parentMissionArray);
            let nextMissionObj = getObjWithNotationArray(currentObj, nextMissionArray);

            taskObj.complete = checked;
            missionObj.complete = confirmMissionCompleteCheckTasks(missionObj);
            if (nextMissionObj != Array.isArray(nextMissionObj)) { nextMissionObj.unlocked = missionObj.complete };
            if (Array.isArray(nextMissionObj)) { console.log('There is no next mission object.  Array Found'); }

            setDoc(docRef,  obj , { merge:true }); // updateDoc() does not work because updateDoc() does not accept [ ] bracket notation.  Instead I have to use setDoc and merge:true.
        });
    }

    const arrayofMissionTaskButtons = document.getElementsByClassName('btn-task-change-amount');
    for (let i = 0; i < arrayofMissionTaskButtons.length && i < 10000; i++) {
        arrayofMissionTaskButtons[i].addEventListener('click', (e) => {
            // Variables From Target Button.
            let progressCurrent = Number(e.target.dataset.progressCurrent);
            let progressTotal = Number(e.target.dataset.progressTotal);
            let btnType = e.target.dataset.btnType;
            let notation = e.target.dataset.objNotation;

            // Other Variables:
            let tempObj = obj.newSetUpKey;
            let notationArray = notation.split('.'); // Splits the notation string into an Array that I can iterate through, then reconnect as bracket notation.
            let taskObj = getObjWithNotationArray(tempObj, notationArray);

            console.log("Before changeProgressAmount", taskObj);
            taskObj = changeProgressAmount(taskObj, btnType, progressCurrent, progressTotal);
            console.log("After changeProgressAmount", taskObj);


            function changeProgressAmount (obj, operator, numCurrent, numTotal) {
                // console.log("TEST: Start of change", obj, operator, numCurrent, numTotal);
                // if (!obj || !operator || !numCurrent || !numTotal) { console.log('Something is missing from the changeProgressAmount function parameters.'); return; } // Error catch.

                obj.savePrevProgressCurrentNum = numCurrent; // Saving the previous number, in case user hits "complete" button accidentally.  Then they can uncheck it and it returns to the previously saved number.

                if (operator == '-') { --numCurrent; console.log('minus triggered'); };
                if (operator == '+') { ++numCurrent; console.log('plus triggered'); };

                if (numCurrent < numTotal) { 
                    if (numCurrent < 0) { numCurrent = 0; console.log("Cannot Go Below 0"); };
                    obj.progressCurrent = numCurrent;
                    obj.complete = false; } 

                if (numCurrent >= numTotal) { 
                    obj.progressCurrent = numTotal;
                    obj.complete = true; 
                    console.log("You've Completed This Task.  Congrats!");
                    // Possibly put in a window.alert or window.prompt here to confirm the user wants to "complete" this task.
                    // FOR NOW:  Just change the task Object.complete = true; (or false if the decrement);
                    
                }
                return obj;
            }
        })
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

function getObjWithNotationArray(object, array) {
    // Could possibly take in a notation string, instead of an array, then make the array in this function.  Reducing the need to do notation.split('.');
    for (let j = 0; j < array.length; j++) { // Loops through the Notation Array and combines them back into a notation for the currentObj notation.
        let key = array[j];
        if (object && object[key]) {
            object = object[key];
        } else {
            console.log("nested property not found.");
            break;
        }
    }
    return object;
}

function confirmMissionCompleteCheckTasks(object) {
    let taskArray = object.tasks;
    let answer = false;

    for (let i = 0; i < taskArray.length; i++) {
        answer = taskArray[i].complete;
    }
    return answer;
}

function createNextMissionArray(notation) {
    let arr = notation.split('.');
    let lastElement = arr[arr.length - 1];
    let modifiedElement = Number(lastElement) + 1;
    arr[arr.length - 1] = modifiedElement.toString();
    return arr;
}


const resetDOM = (...args) => {
    for (let arg of args) { arg.innerHTML = ''; console.log("Reset DOM", arg) }
}

// TESTING:
// const createDOM2 = () => {
//     // Can I pass ...args to this function, and have it create a div box for each arg?
//     // Before it creates the div boxes, it should divBoxID.innerHTML = '';  This makes sure when onSnapshot is triggered, it doesn't duplicate.
//     // Maybe instead... it's pageContainer.innerHTML = ''; Then it triggers all the rest?  IDK.  Need to think about this for later.
// }