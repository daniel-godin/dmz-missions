// const createFOB = (obj, docRef, user) => {

//     resetFOBGrid(); // resets the innerHTML for the FOB Grid.  This is a clunky way to fix to duplication that is happening when a user clicks a checkbox, etc.

//     createFOBDOM(obj, user); // Which one of these parameters do I not need to pass along?

//     // createTaskList(obj, user); // THIS IS TEST FOR NOW.

//     createListenerEvents(obj, docRef, user);
// }



// TESTING:

// const createTaskList = (obj, user) => {
//     console.log("create Task List Function Triggered");

//     let userStatus;
//     let TaskContainerClass;
//     if (!user) { 
//         userStatus = "hide"; 
//         TaskContainerClass = "fob-mission-task-container-logged-out";
//     };
//     if (user) { 
//         userStatus = "" 
//         TaskContainerClass = "fob-mission-task-container"
//     };

//     obj = obj.newSetUpKey; // This is a hacky way to get around FireStore's limitations of not allow nested arrays, nor having a document start with arrays.  Basically, newSetUpKey is the only key to the data Object, and it's value is an array with all the data.

//     // let DOMAttachmentPoint = document.getElementById('testCreateTaskListContainer');

//     for (let i = 0; i < obj.length && i < 20; i++) { // First Loop:
//         let arrayOfSectionTitle = Object.keys(obj[i]);
//         let sectionTitle = arrayOfSectionTitle[0];
//         let arrayFirstLevel = obj[i][sectionTitle];

//         let sectionHeaderMinimizeStatus = localStorage.getItem(`${sectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
//         if (sectionHeaderMinimizeStatus == 'hideBox') { sectionHeaderMinimizeStatus = 'hide' }
//         if (sectionHeaderMinimizeStatus == 'showBox' || 'null') { sectionHeaderMinimizeStatus = '' }


//         for (let j = 0; j < arrayFirstLevel.length && j < 20; j++) { // Second Loop (NESTED IN FIRST):
//             let arrayOfSubSectionTitles = Object.keys(arrayFirstLevel[j]);
//             let subSectionTitle = arrayOfSubSectionTitles[0];
//             let arraySecondLevel = arrayFirstLevel[j][subSectionTitle];

//             let subSectionTitleMinimizeStatus = localStorage.getItem(`${subSectionTitle}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
//             if (subSectionTitleMinimizeStatus == 'hideBox') { subSectionTitleMinimizeStatus = 'hide' }
//             if (subSectionTitleMinimizeStatus == 'showBox' || 'null') { subSectionTitleMinimizeStatus = '' }


//             for (let k = 0; k < arraySecondLevel.length && k < 20; k++) { // THIRD LOOP (NESTED IN 2ND LOOP).  Loops through each Mission Object.
//                 let missionTitleStatus;

//                 let missionDataObject = arraySecondLevel[k];

//                 let title = missionDataObject.title;
//                 let missionId = missionDataObject.missionID;
//                 let complete = missionDataObject.complete; // Two below if (statements) change the DOM Mission Checkbox to be "checked" or "not checked".
//                     if (complete == true) { missionTitleStatus = 'mission-complete'; complete = "checked"; };
//                     if (complete == false) { missionTitleStatus = ''; complete = "" };
//                 let unlocked = missionDataObject.unlocked;
//                 let factionRequirement = missionDataObject.factionRequirement;
//                 let reward = missionDataObject.reward;

//                 let arrayThirdLevel = missionDataObject.tasks;

//                 let missionDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}`;


//                 let missionTitleMinimizeStatus = localStorage.getItem(`${missionId}`) // This is using a mission specific identifier of "missionId" as the key in localStorage.  Then grabbing the value of that key, using that value to set whether a title should be minimized or not.
//                 if (missionTitleMinimizeStatus == 'hideBox') { missionTitleMinimizeStatus = 'hide' }
//                 if (missionTitleMinimizeStatus == 'showBox' || 'null') { missionTitleMinimizeStatus = '' }

//                 for (let p = 0; p < arrayThirdLevel.length && p < 10; p++) { // Fourth and Last Loop (NESTED IN THIRD).  Loops Through Each Mission Object's "tasks" key.  .tasks is an array of objects.

//                     let taskObj = arrayThirdLevel[p];

//                     let strikeThrough;

//                     let task = taskObj.task;
//                     let taskId = taskObj.taskID;
//                     let progressCurrent = taskObj.progressCurrent;
//                     let progressTotal = taskObj.progressTotal;
//                     let complete = taskObj.complete; // Two below if (statements) change the DOM Task Checkbox to be "checked" or "not checked".
//                         if (complete == true) { strikeThrough = 'strike-through'; complete = "checked"; }
//                         if (complete == false) { strikeThrough = ''; complete = "" };

//                     let missionTaskDotNotation = `${i}.${sectionTitle}.${j}.${subSectionTitle}.${k}.tasks.${p}`

//                     let DOMAttachmentPoint = document.getElementById('testCreateTaskListContainer');

//                     DOMAttachmentPoint.insertAdjacentHTML('beforeend', `
//                         <div class='test-task-container'>
//                             <label class='test-mission-task'>
//                                 <input type='checkbox' class='task-checkbox ${userStatus}' data-task-id='${taskId}' data-obj-notation='${missionTaskDotNotation}' ${complete} />
//                                 <span class='${strikeThrough}'>${task}</span>
//                             </label>

//                             <div class='progress-container ${userStatus}'>
//                                 <button class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='-' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>-</button>
//                                 <p class='${strikeThrough}'>${progressCurrent}</p><p class='${strikeThrough}'> / </p><p class='${strikeThrough}'>${progressTotal}</p>
//                                 <button class='btn-task-change-amount' data-obj-notation='${missionTaskDotNotation}' data-btn-type='+' data-progress-current='${progressCurrent}' data-progress-total='${progressTotal}'>+</button>
//                             </div>
//                         </div>
                    
//                     `)
//                 } // End of Fourth (and final) Loop.
//             } // End of Third Loop.
//         } // End of Second Loop.
//     } // End of First Loop
// }