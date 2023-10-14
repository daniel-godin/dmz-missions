import { doc, getDoc, setDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, } from "firebase/firestore";
import { dataS6DMZFOB, } from "./data/data-s6-dmz-fob";
import { dataS6DMZStandardMissions } from "./data/data-s6-dmz-standard-missions";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";


const DMZFOBContainer = document.getElementById('DMZFOBContainer');

// Change this at the beginning of each season.
const FOBDataObject = dataS6DMZFOB;
const currentFOBDocName = 'DMZFOBS6';

// const currentFOBSeasonNumberOfTasks = 99; // 99 IS NOT TRUE, IT'S A PLACEHOLDER

onAuthStateChanged(auth, user => {
    if (!DMZFOBContainer) { console.log("not on fob page"); return; };

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

const createFOB = async (obj, docRef, user, db) => {
    // console.log("createFOB Function triggered", obj); // For Testing Purposes.

    resetFOBGrid(); // resets the innerHTML for the FOB Grid.  This is a clunky way to fix to duplication that is happening when a user clicks a checkbox, etc.

    createFOBDOM(obj, docRef, user, db); // Which one of these parameters do I not need to pass along?

    createListenerEvents(obj, docRef, user);
}

const createFOBDOM = async (obj, docRef, user, db) => {
    const DMZFOBInformationContainer = document.getElementById('DMZFOBInformationContainer'); // DOM ID of div container for FOB Grid.

    obj = obj.newSetUpKey;

    // START OF NEW DOM CREATION.  USING data FOB Object, which is a mix of arrays and objects.
    for (let i = 0; i < obj.length && i < 20; i++) { // First Loop:

        let arrayOfSectionTitle = Object.keys(obj[i]);
        let sectionTitle = arrayOfSectionTitle[0];
        let arrayFirstLevel = obj[i][sectionTitle];

        DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
            <div class='fob-section-container' data-fob-section='${sectionTitle}'>
                <header class='fob-section-header'>${sectionTitle}</header>
                <div class='fob-section-info-container' data-attachment-id='${sectionTitle}'></div>
            </div>
        `)

        for (let j = 0; j < arrayFirstLevel.length && j < 20; j++) { // Second Loop (NESTED IN FIRST):

            let arrayOfSubSectionTitles = Object.keys(arrayFirstLevel[j]);
            let subSectionTitles = arrayOfSubSectionTitles[0];
            let arraySecondLevel = arrayFirstLevel[j][subSectionTitles];

            let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${sectionTitle}"]`);

            DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                <div class='full-fob-mission-container' data-attachment-id="${subSectionTitles}">
                    <p>${subSectionTitles}</p>
                </div>
            `)

            for (let k = 0; k < arraySecondLevel.length && k < 20; k++) { // THIRD LOOP (NESTED IN 2ND): Once again, starting at 1, to "skip" [0], which is a string of the sub-section title.

                let missionDataObject = arraySecondLevel[k];

                // console.log(missionDataObject);

                let title = missionDataObject.title;
                let missionId = missionDataObject.missionID;
                let complete = missionDataObject.complete; // Two below if (statements) change the DOM Mission Checkbox to be "checked" or "not checked".
                    if (complete == true) { complete = "checked"; };
                    if (complete == false) { complete = "" };
                let unlocked = missionDataObject.unlocked;
                let factionRequirement = missionDataObject.factionRequirement;
                let reward = missionDataObject.reward;

                let arrayThirdLevel = missionDataObject.tasks;

                let missionDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitles}.${k}`;

                // console.log ("dot notation:", missionDotNotation);

                let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${subSectionTitles}"]`);

                DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    <div class='fob-mission-container'>
                        <div class='fob-mission-title-container'>
                            <h3 class='fob-mission-title' data-mission-id='${missionId}'>${title}</h3>
                            <div class='fob-mission-complete-container'><input type="checkbox" class='fob-mission-checkbox' data-fob-mission-id='${missionId}' data-mission-dot-notation="${missionDotNotation}" ${complete} /></div>
                        </div>
                        <div class='fob-mission-info-container'>
                            <div class='fob-mission-tasks-container' data-attachment-id="${missionId}"></div>
                            <div class='fob-mission-info-reward'><p>Reward:  ${reward}</p></div>
                        </div>
                    </div>
                `)

                for (let p = 0; p < arrayThirdLevel.length && p < 10; p++) { // Fourth and Last Loop (NESTED IN THIRD).  Loops Through Each Mission Object's "tasks".  .tasks is an array of objects.

                    let taskObj = arrayThirdLevel[p];

                    let task = taskObj.task;
                    let taskId = taskObj.taskID;
                    let progressCurrent = taskObj.progressCurrent;
                    let progressTotal = taskObj.progressTotal;
                    let complete = taskObj.complete; // Two below if (statements) change the DOM Task Checkbox to be "checked" or "not checked".
                        if (complete == true) { complete = "checked"; }
                        if (complete == false) { complete = "" };

                    let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${missionId}"]`);

                    DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                        <ul>
                            <li class="fob-mission-task-container" data-task-id="">
                                <input type='checkbox' class='task-checkbox' data-task-id='${taskId}' data-obj-notation='[${i}][${j}][${k}].tasks[${p}]' ${complete} />
                                <div class='mission-task'>
                                    <p>${task}</p><p>${progressCurrent}</p><p> / </p><p>${progressTotal}</p>
                                </div>
                            </li>
                        </ul>
                    `)
                }
            }
        }
    }
}

// Listener Events:
const createListenerEvents = async (obj, docRef, user) => { // Listener Events:  Checkboxes, Titles (minimizing, etc.), etc.

    // let storeObj = obj; // I am going to use this to replace the entire doc in firestore when I make a change.

    // console.log("store Object", storeObj);

    // console.log("2nd array object", storeObj[0].stash[0].wallet[0]);

    const arrayOfMissionTitles = document.getElementsByClassName('fob-mission-title');

    for (let i = 0; i < arrayOfMissionTitles.length && i < 500; i++) {
        arrayOfMissionTitles[i].addEventListener('click', (e) => {
            e.target.parentNode.nextElementSibling.classList.toggle('hide');
            e.target.classList.toggle('underlined');
        })
    }

    if (user) {
        // Mission Checkboxes:
        const arrayOfMissionCheckboxes = document.getElementsByClassName('fob-mission-checkbox');

        for (let q = 0; q < arrayOfMissionCheckboxes.length && q < 300; q++) {
            arrayOfMissionCheckboxes[q].addEventListener('click', (e) => {
                // console.log(e.target);

                let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
                let checkboxId = e.target.dataset.fobMissionId; // Grabs the event target's id property, makes it into a Number (integar) from a string.

                let currentObj = obj;
                currentObj = currentObj.newSetUpKey;


                let notation = e.target.dataset.missionDotNotation;
                // console.log(notation);
                let notationArray = notation.split('.');
                // console.log("notation array:", notationArray);

                // console.log("first obj", storeObj);

                for (let u = 0; u < notationArray.length; u++) {
                    let key = notationArray[u];
                    if (currentObj && currentObj[key]) {
                        currentObj = currentObj[key];
                        // console.log(storeObj);
                    } else {
                        console.log("nested property not found.");
                        break;
                    }
                }

                currentObj.complete = checked;

                console.log("currentObj", currentObj);

                console.log ("obj", obj);

                setDoc(docRef,  obj , { merge:true });


                // updateDoc(docRef, {
                //     path // checkboxId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
                // })
            })
        }
    
        // Mission *Task* Checkboxes:
        // const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('task-checkbox');

        // for (let i = 0; i < arrayOfMissionTaskCheckboxes.length && i < 999; i++) {
        //     arrayOfMissionTaskCheckboxes[i].addEventListener('click', (e) => {
        //         console.log(e.target);

        //         let checked = e.target.checked;

        //         let objNotation = e.target.dataset.objNotation;

        //         console.log(objNotation);

        //         updateDoc(docRef, {
        //             [objNotation+".complete"] : checked, 
        //         })
        //     })
        // }
    }
}

const resetFOBGrid = async () => {
    DMZFOBInformationContainer.innerHTML = '';
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




