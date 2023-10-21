import { doc, setDoc, onSnapshot, } from "firebase/firestore";
// import { dataS6DMZFOB, } from "./data/data-s6-dmz-fob";
// import { dataS6DMZStandardMissions } from "./data/data-s6-dmz-standard-missions";
import { FOBDataObject, currentFOBDocName } from "./fob";
import { currentDMZStandardMissions, currentDMZSeasonDocName } from "./dmz-missions";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";

const activeTasksContainer = document.getElementById('activeTasksContainer');

// I actually don't like how this works at all, but I'm set on doing it this way for the others.  Fix this later.  REFACTOR.
// Change this at the beginning of each season.
const dataObjectFOB = FOBDataObject;
const FOBDocName = currentFOBDocName;
const dataObjectStandardMissions = currentDMZStandardMissions;
const currentStandardMissionsDocName = currentDMZSeasonDocName;

onAuthStateChanged(auth, user => {
    if (!activeTasksContainer) { return; };

    if (!user) {
        // createFOB(FOBDataObject, undefined, undefined, undefined);
        // recommendLogInBox(DMZFOBContainer);
        // return;
        console.log("There's no point for a non-user to see/use this page.");
        return;
    }

    const docRefFOB = doc(db, 'users', user.uid, 'mw2-trackers', `${FOBDocName}`);

    onSnapshot(docRefFOB, (snapshot) => {
        if (!snapshot.exists()) { 
            createActiveTasks(FOBDocName, dataObjectFOB, docRefFOB, user, db);
            setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), dataObjectFOB); 
            return;
        } // I think I need to put a reload() or return, or something at the end of this.
        let snapObj = snapshot.data();
        createActiveTasks(FOBDocName, snapObj, docRefFOB, user, db);
    }) 

    // const docRefStandardMissions = doc(db, 'users', user.uid, 'mw2-trackers', `${currentStandardMissionsDocName}`);

    // onSnapshot(docRefStandardMissions, (snapshot) => {
    //     if (!snapshot.exists()) { setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentStandardMissionsDocName}`), dataObjectStandardMissions); } // I think I need to put a reload() or return, or something at the end of this.
    //     let snapObj = snapshot.data();
    //     createActiveTasks(currentStandardMissionsDocName, snapObj, docRefStandardMissions, user, db);
    // }) 
})


const createActiveTasks = (docName, dataObj, docRef, user, db, ) => { // I think I will need to move these out at some point, if I want to use 2 documents.
    // resetDOM(activeTasksContainer);
    if (docName == currentFOBDocName) { console.log("FOB DOC"); } // Trigger CreateDOM??? 
    if (docName == currentStandardMissionsDocName) { console.log("Standard Missions DOC"); } // Trigger CreateDOM??? 
    createDOM(dataObj, docRef, user, db);
    // createListenerEvents(dataObj, docRefFOB, user, db);
}

const createDOM = (dataObj, docRef, user, db) => {
    console.log("createDOM Function Triggered."); // FOR TESTING.

    activeTasksContainer.innerHTML = ''; // Resets main container to zero.

    dataObj = dataObj.newSetUpKey; // This is a hacky way to get around FireStore's limitations of not allow nested arrays, nor having a document start with arrays.  Basically, newSetUpKey is the only key to the data Object, and it's value is an array with all the data.


    let userStatus;
    let TaskContainerClass;
    if (!user) { 
        userStatus = "hide"; 
        TaskContainerClass = "fob-mission-task-container-logged-out";
    };
    if (user) { 
        userStatus = "" 
        TaskContainerClass = "fob-mission-task-container"
    };

    // Later:  Create 2 or 3 div columns for:  Standard Missions | Passive Missions (FOB) Collection Tasks | FOB Boss Killing Tasks


    let DOMAttachmentPointLoop1 = document.getElementById('activeTasksContainer');

    for (let i = 0; i < dataObj.length && i < 10; i++) { // First Loop:
        // console.log("First Loop"); // FOR TESTING.
        let arrayOfSectionTitle = Object.keys(dataObj[i]); // Creates an array of Object keys, which I can iterate through.
        let sectionTitle = arrayOfSectionTitle[0];
        let arrayFirstLevel = dataObj[i][sectionTitle];

        // let sectionHeaderMinimizeStatus = localStorage.getItem(`${sectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
        // if (sectionHeaderMinimizeStatus == 'hideBox') { sectionHeaderMinimizeStatus = 'hide' }
        // if (sectionHeaderMinimizeStatus == 'showBox' || 'null') { sectionHeaderMinimizeStatus = '' }


        for (let j = 0; j < arrayFirstLevel.length && j < 20; j++) { // Second Loop (NESTED IN FIRST):
            let arrayOfSubSectionTitles = Object.keys(arrayFirstLevel[j]);
            let subSectionTitle = arrayOfSubSectionTitles[0];
            let arraySecondLevel = arrayFirstLevel[j][subSectionTitle];

            // let subSectionTitleMinimizeStatus = localStorage.getItem(`${subSectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
            // if (subSectionTitleMinimizeStatus == 'hideBox') { subSectionTitleMinimizeStatus = 'hide' }
            // if (subSectionTitleMinimizeStatus == 'showBox' || 'null') { subSectionTitleMinimizeStatus = '' }


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

                // let missionTitleMinimizeStatus = localStorage.getItem(`${missionId}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
                // if (missionTitleMinimizeStatus == 'hideBox') { missionTitleMinimizeStatus = 'hide' }
                // if (missionTitleMinimizeStatus == 'showBox' || 'null') { missionTitleMinimizeStatus = '' }

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
                        console.table("Incomplete, Available Tasks:", taskObj);

                        let DOMAttachmentPointLoop4 = document.querySelector(`[data-dom-attachment-point="${missionId}"]`);

                        DOMAttachmentPointLoop4.insertAdjacentHTML('beforeend', `
                            <div class='active-tasks-task-container'>
                                <div class='active-tasks-task-checkbox'><input type='checkbox'></div>
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

const createListenerEvents = () => {

}

const resetDOM = (...args) => {
    for (let arg of args) { arg.innerHTML = ''; console.log("Reset DOM", arg) }
}