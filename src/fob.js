import { doc, getDoc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, } from "firebase/firestore";
import { dataS6DMZFOB, } from "./data/data-s6-dmz-fob";
import { dataS6DMZStandardMissions } from "./data/data-s6-dmz-standard-missions";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";


const DMZFOBContainer = document.getElementById('DMZFOBContainer');
const DMZFOBTabBar = document.getElementById('DMZFOBTabBar');

// Change this at the beginning of each season.
const FOBDataObject = dataS6DMZFOB;
const currentFOBDocName = 'DMZFOBS6';
const mainSectionArrayTitles = ["All", "Stash", "Weapons Locker", "Equipment", "Bounty Board", "Communications Station"];

onAuthStateChanged(auth, user => {
    if (!DMZFOBContainer) { return; };

    if (!user) {
        createFOB(FOBDataObject, undefined, undefined, undefined);
        recommendLogInBox(DMZFOBContainer);
        return;
    }

    const docRefFOBGrid = doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`);

    onSnapshot(docRefFOBGrid, (snapshot) => {
        if (!snapshot.exists()) { setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), FOBDataObject); } // I think I need to put a reload() or return, or something at the end of this.
        let snapObj = snapshot.data();
        createFOB(snapObj, docRefFOBGrid, user, db);
    }) 
})

const createFOB = async (obj, docRef, user) => {

    resetFOBGrid(); // resets the innerHTML for the FOB Grid.  This is a clunky way to fix to duplication that is happening when a user clicks a checkbox, etc.

    createFOBDOM(obj, user); // Which one of these parameters do I not need to pass along?

    createListenerEvents(obj, docRef, user);
}

const createFOBDOM = async (obj, user) => {

    // Creation of the Tab Bar.
    for (let i = 0; i < mainSectionArrayTitles.length && i < 10; i++) {
        let mainSectionTitle = mainSectionArrayTitles[i];

        let camelCaseTitle = camelCase(mainSectionTitle);

        let tabMinimizeStatus = localStorage.getItem(`${camelCaseTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
        if (!tabMinimizeStatus) { tabMinimizeStatus = '' };
        if (tabMinimizeStatus == 'hideBox') { tabMinimizeStatus = 'fob-tab-bar-items-hidden' }
        if (tabMinimizeStatus == 'showBox') { tabMinimizeStatus = '' }

        DMZFOBTabBar.insertAdjacentHTML('beforeend', `
            <div class='fob-tab-bar-items ${tabMinimizeStatus}' data-storage-key='${camelCaseTitle}'>${mainSectionTitle}</div>
        `)

    }
    

    obj = obj.newSetUpKey; // This is a hacky way to get around FireStore's limitations of not allow nested arrays, nor having a document start with arrays.  Basically, newSetUpKey is the only key to the data Object, and it's value is an array with all the data.

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

    const DMZFOBInformationContainer = document.getElementById('DMZFOBInformationContainer'); // DOM ID of div container for FOB Grid.

    // START OF FULL DOM CREATION FROM DATA OBJECT.
    for (let i = 0; i < obj.length && i < 20; i++) { // First Loop:

        let arrayOfSectionTitle = Object.keys(obj[i]);
        let sectionTitle = arrayOfSectionTitle[0];
        let arrayFirstLevel = obj[i][sectionTitle];

        let sectionHeaderMinimizeStatus = localStorage.getItem(`${sectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
        if (sectionHeaderMinimizeStatus == 'hideBox') { sectionHeaderMinimizeStatus = 'hide' }
        if (sectionHeaderMinimizeStatus == 'showBox') { sectionHeaderMinimizeStatus = '' }


        DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
            <div class='fob-section-container' data-fob-section='${sectionTitle}' id='section${sectionTitle}'>
                <h2 class='fob-section-header' data-storage-key='${sectionTitle}'>${sectionTitle}</h2>
                <div class='fob-section-info-container ${sectionHeaderMinimizeStatus}' data-attachment-id='${sectionTitle}'></div>
            </div>
        `)

        for (let j = 0; j < arrayFirstLevel.length && j < 20; j++) { // Second Loop (NESTED IN FIRST):

            let arrayOfSubSectionTitles = Object.keys(arrayFirstLevel[j]);
            let subSectionTitle = arrayOfSubSectionTitles[0];
            let arraySecondLevel = arrayFirstLevel[j][subSectionTitle];

            let subSectionTitleMinimizeStatus = localStorage.getItem(`${subSectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
            if (subSectionTitleMinimizeStatus == 'hideBox') { subSectionTitleMinimizeStatus = 'hide' }
            if (subSectionTitleMinimizeStatus == 'showBox') { subSectionTitleMinimizeStatus = '' }


            let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${sectionTitle}"]`);

            DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                <div class='full-fob-mission-container'>
                    <h2 class='sub-section-titles' data-storage-key='${subSectionTitle}'>${subSectionTitle}</h2>
                    <div class='fob-missions-container ${subSectionTitleMinimizeStatus}' data-attachment-id="${subSectionTitle}">
                </div>
            `)

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

                let arrayThirdLevel = missionDataObject.tasks;

                let missionDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}`;


                let missionTitleMinimizeStatus = localStorage.getItem(`${missionId}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
                if (missionTitleMinimizeStatus == 'hideBox') { missionTitleMinimizeStatus = 'hide' }
                if (missionTitleMinimizeStatus == 'showBox') { missionTitleMinimizeStatus = '' }

                let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${subSectionTitle}"]`);


                DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    <div class='fob-mission-container ${missionTitleStatus}'>
                        <div class='fob-mission-title-container'>
                            <h3 class='fob-mission-title' data-mission-id='${missionId}'>${title}</h3>
                            <div class='fob-mission-complete-container ${userStatus}'><input type="checkbox" class='fob-mission-checkbox' data-fob-mission-id='${missionId}' data-mission-dot-notation="${missionDotNotation}" ${complete} /></div>
                        </div>
                        <div class='fob-mission-info-container ${missionTitleMinimizeStatus}'>
                            <div class='fob-mission-tasks-container' data-attachment-id="${missionId}"></div>
                            <div class='fob-mission-info-reward'><p>Reward:  ${reward}</p></div>
                        </div>
                    </div>
                `)

                for (let p = 0; p < arrayThirdLevel.length && p < 10; p++) { // Fourth and Last Loop (NESTED IN THIRD).  Loops Through Each Mission Object's "tasks" key.  .tasks is an array of objects.

                    let taskObj = arrayThirdLevel[p];

                    let strikeThrough;

                    let task = taskObj.task;
                    let taskId = taskObj.taskID;
                    let progressCurrent = taskObj.progressCurrent;
                    let progressTotal = taskObj.progressTotal;
                    let complete = taskObj.complete; // Two below if (statements) change the DOM Task Checkbox to be "checked" or "not checked".
                        if (complete == true) { strikeThrough = 'strike-through'; complete = "checked"; }
                        if (complete == false) { strikeThrough = ''; complete = "" };

                    let missionTaskDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}.tasks.${p}`

                    let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${missionId}"]`);

                    DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    <ul class='task-list'>
                        <li class="task-item" data-task-id="">
                            <label class='mission-task'>
                                <input type='checkbox' class='task-checkbox ${userStatus}' data-task-id='${taskId}' data-obj-notation='${missionTaskDotNotation}' ${complete} />
                                <span class='${strikeThrough}'>${task}</span>
                            </label>

                            <div class='progress-container ${userStatus}'>
                                <p class='${strikeThrough}'>${progressCurrent}</p><p class='${strikeThrough}'> / </p><p class='${strikeThrough}'>${progressTotal}</p>
                            </div>
                        </li>
                    </ul>
                `)

                    // Saving Commented Code.  This works.  Updating above.
                    // DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    //     <ul>
                    //         <li class="task-list" data-task-id="">
                    //             <input type='checkbox' class='task-checkbox ${userStatus}' data-task-id='${taskId}' data-obj-notation='${missionTaskDotNotation}' ${complete} />
                    //             <div class='mission-task'>
                    //                 <p class='${strikeThrough}'>${task}</p>
                    //                 <div class='progress-container ${userStatus}'>
                    //                     <p class='${strikeThrough}'>${progressCurrent}</p><p class='${strikeThrough}'> / </p><p class='${strikeThrough}'>${progressTotal}</p>
                    //                 </div>
                    //             </div>
                    //         </li>
                    //     </ul>
                    // `)
                }
            }
        }
    }
}

// Listener Events:
const createListenerEvents = async (obj, docRef, user) => { // Listener Events:  Checkboxes, Titles (minimizing, etc.), etc.

    // These are Listener events that don't require someone to be logged in:

    // Mission Titles Listener Event.  User clicks on the mission title to minimize all the data below it.  Making the data "dissapear", helps readability.
    const arrayOfMissionTitles = document.getElementsByClassName('fob-mission-title');
    for (let i = 0; i < arrayOfMissionTitles.length && i < 500; i++) {
        arrayOfMissionTitles[i].addEventListener('click', (e) => {
            e.target.parentNode.nextElementSibling.classList.toggle('hide');
            e.target.classList.toggle('underlined');

            let storageKey = e.target.dataset.missionId;

            // These are to keep a user's minimized preferences stored across sessions.
            if (e.target.parentNode.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `hideBox`); };
            if (!e.target.parentNode.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `showBox`); };
        })
    }

    // Sub-Section Titles Listener Event.  User Clicks On Title and "hides" all missions inside of it.  Improving readability.
    const arrayOfSubSectionTitles = document.getElementsByClassName('sub-section-titles');
    for (let i = 0; i < arrayOfSubSectionTitles.length && i < 100; i++) {
        arrayOfSubSectionTitles[i].addEventListener('click', (e) => {
            e.target.nextElementSibling.classList.toggle('hide');

            let storageKey = e.target.dataset.storageKey;

            // These are to keep a user's minimized preferences stored across sessions.
            if (e.target.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `hideBox`); };
            if (!e.target.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `showBox`); };
        })
    }

    // Main Section Titles Listener Event.  User Clicks On Title and "hides" all missions inside of it.  Improving readability.
    const arrayOfSectionHeaders = document.getElementsByClassName('fob-section-header');
    for (let i = 0; i < arrayOfSectionHeaders.length && i < 100; i++) {
        arrayOfSectionHeaders[i].addEventListener('click', (e) => {
            e.target.nextElementSibling.classList.toggle('hide');

            console.log("Section Header Clicked"); // For Testing Purposes.
            
            let storageKey = e.target.dataset.storageKey;

            // These are to keep a user's minimized preferences stored across sessions.
            if (e.target.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `hideBox`); };
            if (!e.target.nextElementSibling.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `showBox`); };
        })
    }

    const arrayOfTabs = document.getElementsByClassName('fob-tab-bar-items');
    for (let i = 0; i < arrayOfTabs.length && i < 10; i++) {
        arrayOfTabs[i].addEventListener('click', (e) => {
            console.log("Tab clicked", e.target);

            let storageKey = e.target.dataset.storageKey;
            let sectionTarget = document.getElementById(`section${storageKey}`);


            console.log("section target", sectionTarget);
            console.log("Tab Storage Key", storageKey);


            e.target.classList.toggle('fob-tab-bar-items-hidden');
            sectionTarget.classList.toggle('hide');

            // These are to keep a user's minimized preferences stored across sessions.
            if (sectionTarget.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `hideBox`); };
            if (!sectionTarget.classList.contains("hide")) { localStorage.setItem(`${storageKey}`, `showBox`); };


        })
    }


    // Listener Events That Require User To Be Logged In:
    if (user) {
        // Mission Checkboxes:
        const arrayOfMissionCheckboxes = document.getElementsByClassName('fob-mission-checkbox');

        for (let q = 0; q < arrayOfMissionCheckboxes.length && q < 300; q++) {
            arrayOfMissionCheckboxes[q].addEventListener('click', (e) => {

                let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked.  This value will be passed to the data object for updating.
                let notation = e.target.dataset.missionDotNotation;

                let notationArray = notation.split('.'); // Splits the notation string into an Array that I can iterate through, then reconnect as bracket notation.

                let currentObj = obj;
                currentObj = currentObj.newSetUpKey;

                for (let u = 0; u < notationArray.length; u++) { // Loops through the Notation Array and combines them back into a notation for the currentObj notation.
                    let key = notationArray[u];
                    if (currentObj && currentObj[key]) {
                        currentObj = currentObj[key];
                    } else {
                        console.log("nested property not found.");
                        break;
                    }
                }

                currentObj.complete = checked;

                setDoc(docRef,  obj , { merge:true }); // updateDoc() does not work because updateDoc() does not accept [ ] bracket notation.  Instead I have to use setDoc and merge:true.
            })
        }
    
        // Mission *Tasks* Checkboxes:
        const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('task-checkbox');

        for (let t = 0; t < arrayOfMissionTaskCheckboxes.length && t < 999; t++) {
            arrayOfMissionTaskCheckboxes[t].addEventListener('click', (e) => {

                let checked = e.target.checked;
                let notation = e.target.dataset.objNotation;

                let notationArray = notation.split('.'); // Splits the notation string into an Array that I can iterate through, then reconnect as bracket notation.

                let currentObj = obj;
                currentObj = currentObj.newSetUpKey;

                for (let u = 0; u < notationArray.length; u++) { // Loops through the Notation Array and combines them back into a notation for the currentObj notation.
                    let key = notationArray[u];
                    if (currentObj && currentObj[key]) {
                        currentObj = currentObj[key];
                    } else {
                        console.log("nested property not found.");
                        break;
                    }
                }

                currentObj.complete = checked;

                setDoc(docRef,  obj , { merge:true }); // updateDoc() does not work because updateDoc() does not accept [ ] bracket notation.  Instead I have to use setDoc and merge:true.
            })
        }
    }
}

const resetFOBGrid = async () => {
    DMZFOBInformationContainer.innerHTML = '';
}

const camelCase = (str) => {
    let answer = str.toLowerCase();

    // Changing to camelCase:
    return answer.split(" ").reduce((s, c) => 
        s + (c.charAt(0).toUpperCase() + c.slice(1)));
}