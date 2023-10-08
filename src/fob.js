import { doc, getDoc, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
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
        createFOBGrid(currentFOBTasks, undefined, undefined, undefined);
        recommendLogInBox(DMZFOBContainer);
        return;
    }

    const docRefFOBGrid = doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`);

    onSnapshot(docRefFOBGrid, (snapshot) => {
        if (!snapshot.exists()) { setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), FOBDataObject); }
        let snapObj = snapshot.data();
        createFOBGrid(snapObj, docRefFOBGrid, user, db);
    }) 
})

const createFOBGrid = async (obj, docRef, user, db) => {
    // console.log(obj); // For Testing Purposes.

    resetFOBGrid(); // resets the innerHTML for the FOB Grid.  This is a clunky way to fix to duplication that is happening when a user clicks a checkbox, etc.

    const DMZFOBInformationContainer = document.getElementById('DMZFOBInformationContainer'); // DOM ID of div container for FOB Grid.

    // START OF NEW DOM CREATION.  USING data FOB Object, which is a mix of arrays and objects.

    for (let i = 0; i < obj.length && i < 20; i++) { // First Loop:

        // console.log(obj[i][0]) // console.logs every main section "title"
        // console.log(obj[i][1]) // console logs every FIRST array in each section.  Have "1" changed to a variable would let me access second, third, fourth arrays, etc.
        // console.log(obj[i][1][0]) // console logs every first array sub-section title;
        // console.log(obj[i][1][1]) // console logs every first array subsection OBJECT (where the data is).
        // console.log(obj[i][1][1].tasks) // console logs the tasks array
        // console.log(obj[i][1][1].tasks[0]) // console logs the first task object.
        // console.log(obj[i][1][1].tasks[0].task) // console logs the first task object task "string" ie. what the task is.

        // Using the above console.log tests, create the DOM.
        const sectionTitle = obj[i][0];

        DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
            <div class='fob-section-container' data-fob-section='${sectionTitle}'>
                <header class='fob-section-header'>${sectionTitle}</header>
                <div class='fob-section-info-container' data-attachment-id='${sectionTitle}'></div>
            </div>
        `)

        for (let j = 1; j < obj[i].length && j < 20; j++) { // Second Loop (NESTED IN FIRST):  Starting at 1, to avoid starting at 0.  0 = sectionTitle. 1, 2, 3, 4 are arrays.
            let subSectionTitles = obj[i][j][0];

            let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${obj[i][0]}"]`);

            DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                <div class='full-fob-mission-container' data-attachment-id="${obj[i][j][0]}">
                    <p>${subSectionTitles}</p>
                </div>
            `)

            for (let k = 1; k < obj[i][j].length && k < 20; k++) { // THIRD LOOP (NESTED IN 2ND): Once again, starting at 1, to "skip" [0], which is a string of the sub-section title.
                let missionDataObject = obj[i][j][k];

                let title = missionDataObject.title;
                let missionId = missionDataObject.missionID;
                let complete = missionDataObject.complete;
                let unlocked = missionDataObject.unlocked;
                let factionRequirement = missionDataObject.factionRequirement;
                let reward = missionDataObject.reward;

                if (complete == true) {
                    complete = "checked";
                } else {
                    complete = "";
                }

                let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${obj[i][j][0]}"]`);

                DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
                    <div class='fob-mission-container'>
                        <div class='fob-mission-title-container'>
                            <h3 class='fob-mission-title' data-mission-id='${missionId}'>${title}</h3>
                            <div class='fob-mission-complete-container'><input type="checkbox" class='fob-mission-checkbox' data-fob-mission-id='${missionId}' data-object-notation='[${i}][${j}][${k}]' ${complete} /></div>
                        </div>
                        <div class='fob-mission-info-container'>
                            <div class='fob-mission-tasks-container' data-attachment-id="${missionId}"></div>
                            <div class='fob-mission-info-reward'><p>Reward:  ${reward}</p></div>
                        </div>
                    </div>
                `)

                for (let p = 0; p < obj[i][j][k].tasks.length && p < 10; p++) { // Fourth and Last Loop (NESTED IN THIRD).  Loops Through Each Mission Object's "tasks".  .tasks is an array of objects.

                    let taskObj = obj[i][j][k].tasks[p];

                    let task = taskObj.task;
                    let taskId = taskObj.taskID;
                    let progressCurrent = taskObj.progressCurrent;
                    let progressTotal = taskObj.progressTotal;
                    let complete = taskObj.complete;

                    if (complete == true) {
                        complete = "checked";
                    } else {
                        complete = "";
                    }

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

    // Listener Events:
    const createListenerEvents = () => { // Listener Events:  Checkboxes, Titles (minimizing, etc.), etc.


        const arrayOfMissionTitles = document.getElementsByClassName('fob-mission-title');

        for (let i = 0; i < arrayOfMissionTitles.length && i < 500; i++) {
            arrayOfMissionTitles[i].addEventListener('click', (e) => {
                // console.log(e.target);
                // console.log(e.target.parentNode.nextElementSibling);

                e.target.parentNode.nextElementSibling.classList.toggle('hide');
                e.target.classList.toggle('underlined');
            })
        }


        if (user) {

            // Mission Checkboxes:
            const arrayOfMissionCheckboxes = document.getElementsByClassName('fob-mission-checkbox');

            for (let i = 0; i < arrayOfMissionCheckboxes.length && i < 300; i++) {
                arrayOfMissionCheckboxes[i].addEventListener('click', (e) => {
                    console.log(e.target);

                    let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
                    let checkboxId = e.target.dataset.fobMissionId; // Grabs the event target's id property, makes it into a Number (integar) from a string.
    
                    let objectNotation = e.target.dataset.objectNotation;
    
                    console.log(objectNotation);
    
                    // console.log(checked, checkboxId);

                    // I wonder if it would be easier to do this with a .findIndex method or something.
                    updateDoc(docRef, {
                        [objectNotation+".complete"] : checked, // checkboxId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
                    })
                })
            }
        
            // Mission Task Checkboxes:
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

    createListenerEvents();









































    // IMPORTANT:  BELOW IS THE OLD CODE FOR THE OLD OBJECT WAY.  NOW I NEED TO LOOP THROUGH ARRAYS ABOVE.  PROBABLY NEED TO SAVE THE LISTENER EVENTS FUNCTION THOUGH.

    // const createMainSectionContainers = (obj) => {
    //     // console.log(obj);

    //     const arrayOfObjectKeyNames = Object.keys(obj); // Create an array of the property key names.  This serves 2 purposes:  1: Get the count, number of properties.  2:  Use the property name as a way to access it later in function/DOM creation.

    //     for (let i = 0; i < arrayOfObjectKeyNames.length && i < 20; i++) {
    //         DMZFOBInformationContainer.insertAdjacentHTML('beforeend', `
    //             <div class='fob-section-container' data-fob-section='${arrayOfObjectKeyNames[i]}'>
    //                 <header class='fob-section-header'>${arrayOfObjectKeyNames[i]}</header>
    //                 <div class='fob-section-info-container' data-fob-section-info='${arrayOfObjectKeyNames[i]}'></div>
    //             </div>
    //         `)
    //     }
    // }

    // createMainSectionContainers(obj);

    // const createSectionsForEachMainSection = (obj) => {
    //     // console.log(obj); // For Testing

    //     const arrayOfObjectKeyNames = Object.keys(obj); // For Testing.

    //     for (let key in obj) { // This grabs stash, weaponsLocker, etc.

    //         // console.log(key);

    //         for (let key2 in obj[key]) { // This grabs in stash (and the rest): wallet, stashExpansion, etc.

    //             let DOMAttachmentPoint = document.querySelector(`[data-fob-section-info="${key}"]`);

    //             DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
    //                 <div class='full-fob-mission-container' data-attachment-id="${key2}"></div>
    //             `)

    //             for (let key3 in obj[key][key2]) { // This should grab: stashExpansion1, stashExpansion 2, etc. Objects

    //                 // console.log(key);

    //                 let objShort = obj[key][key2][key3]; // This should grab:  title, complete, etc.

    //                 // console.log(objShort);

    //                 let title = objShort.title;
    //                 let missionId = objShort.missionID;
    //                 let complete = objShort.complete;
    //                 let unlocked = objShort.unlocked;
    //                 let factionRequirement = objShort.factionRequirement;
    //                 let reward = objShort.reward;

    //                 if (complete == true) {
    //                     complete = "checked";
    //                 } else {
    //                     complete = "";
    //                 }


    //                 // console.log("title:", title, "complete?:", complete, unlocked, factionRequirement, reward);

    //                 // Here's where you push the data to the DOM.

    //                 let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${key2}"]`);

    //                 DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
    //                     <div class='fob-mission-container'>
    //                         <div class='fob-mission-title-container'>
    //                             <h3 class='fob-mission-title' data-mission-id='${missionId}'>${title}</h3>
    //                             <div class='fob-mission-complete-container'><input type="checkbox" class='fob-mission-checkbox' data-fob-mission-id='${missionId}' data-object-notation='${key}.${key2}.${key3}' ${complete} /></div>
    //                         </div>
    //                         <div class='fob-mission-info-container'>
    //                             <div class='fob-mission-tasks-container' data-attachment-id="${key3}"></div>
    //                             <div class='fob-mission-info-reward'><p>Reward:  ${reward}</p></div>
    //                         </div>
    //                     </div>
    //                 `)

    //                 for (let key4 in obj[key][key2][key3].tasks) { // This should grab:  task1, task2, task3

    //                     // console.log(key4); // For Testing

    //                     let taskShort = obj[key][key2][key3].tasks[key4];

    //                     let task = taskShort.task;
    //                     let taskId = taskShort.taskID;
    //                     let progressCurrent = taskShort.progressCurrent;
    //                     let progressTotal = taskShort.progressTotal;
    //                     let complete = taskShort.complete;

    //                     if (complete == true) {
    //                         complete = "checked";
    //                     } else {
    //                         complete = "";
    //                     }

    //                     let missionTaskListKey = obj[key][key2][key3].tasks

    //                     let DOMAttachmentPoint = document.querySelector(`[data-attachment-id="${key3}"]`);

    //                     DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
    //                         <ul>
    //                             <li class="fob-mission-task-container" data-task-id="">
    //                                 <input type='checkbox' class='task-checkbox' data-task-id='${taskId}' data-obj-notation='${key}.${key2}.${key3}.tasks.${key4}' ${complete} />
    //                                 <div class='mission-task'>
    //                                     <p>${task}</p><p>${progressCurrent}</p><p> / </p><p>${progressTotal}</p>
    //                                 </div>
    //                             </li>
    //                         </ul>
    //                     `)
    //                 }
    //             }
    //         }
    //     }
    // }

    // createSectionsForEachMainSection(obj);


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




