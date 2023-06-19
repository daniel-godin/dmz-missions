// This is code for the to-do.html web app.

import { dataDMZToDoMissions, dataDMZToDoFOB } from './data/data-dmz-to-do-s4';

import { doc, getDoc, setDoc, updateDoc, onSnapshot, } from 'firebase/firestore';

export const toDoMainMissionsContainer = document.getElementById('toDoMainMissionsContainer');
export const toDoMainFobContainer = document.getElementById('toDoMainFobContainer');

export const activeMissionsToDoContainer = document.getElementById('activeMissionsToDoContainer');
export const activeFOBToDoContainer = document.getElementById('activeFOBToDoContainer');

export const archivedMissionsToDoContainer = document.getElementById('archivedMissionsToDoContainer');
export const archivedFOBToDoContainer = document.getElementById('archivedFOBToDoContainer');

export const formAddMissionToDo = document.getElementById('formAddMissionToDo');
export const formAddFobToDo = document.getElementById('formAddFobToDo');


// onSnapshot()

export const addDMZToDoDocs = async (database, uid) => {
  // If doc does NOT exist... MAKE IT.  If it DOES exist, do nothing.
  const docRef1 = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions') // DMZ To Do Missions Doc Reference.
  const docRef2 = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB') // DMZ To Do FOB Doc Reference.

  let docSnap1 = await getDoc(docRef1); // Grabbing DMZ To Do Missions Doc.
  let docSnap2 = await getDoc(docRef2); // Grabbing DMZ To Do FOB Doc.

  if (docSnap1.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ To Do Missions Doc Exists');
  } else {
    console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
  };

  if (docSnap2.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ To Do Missions Doc Exists');
  } else {
    console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
  };




}




// export const populateToDoLists = async (database, uid, missionsDoc, FOBDoc) => {

//     // If doc does NOT exist... MAKE IT.  If it DOES exist, do nothing.
//     const docRefMissionsDoc = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions') // DMZ To Do Missions Doc Reference.
//     const docRefFOBDoc = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB') // DMZ To Do FOB Doc Reference.
  
//     let docSnapMissionsDoc = await getDoc(docRefMissionsDoc); // Grabbing DMZ To Do Missions Doc.
//     let docSnapFOBDoc = await getDoc(docRefFOBDoc); // Grabbing DMZ To Do FOB Doc.
  
//     if (docSnapMissionsDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
//       console.log('The DMZ To Do Missions Doc Exists');
//       populateMissionToDoLists(docSnapMissionsDoc);

//     } else {
//       console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
//       await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
//     };
  
//     if (docSnapFOBDoc.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
//       console.log('The DMZ FOB TO DO Doc Exists');
//       populateFOBToDoLists(docSnapFOBDoc);
//     } else {
//       console.log('The DMZ FOB TO DO Doc Does Not Exist.  Creating Now.')
//       await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
//     };

//     const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('mission-task-checkbox');
//     const arrayOfFOBTaskCheckboxes = document.getElementsByClassName('fob-task-checkbox');

//     for (let i = 0; i < arrayOfMissionTaskCheckboxes.length && i < 200; i++) {
//       arrayOfMissionTaskCheckboxes[i].addEventListener('click', (e) => {
//         let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
//         let checkId = e.target.id; // Grabs the event target's id property.
//         console.log('mission task checkbox clicked', checkId, checked);
//         updateDoc(docRefMissionsDoc, {
//           [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
//         });
//       })
//     }

//     for (let i = 0; i < arrayOfFOBTaskCheckboxes.length && i < 200; i++) {
//       arrayOfFOBTaskCheckboxes[i].addEventListener('click', (e) => {
//         let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
//         let checkId = e.target.id; // Grabs the event target's id property.
//         console.log('FOB task checkbox clicked', checkId, checked);
//         updateDoc(docRefFOBDoc, {
//           [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
//         });
//       })
//     }


//   // This should take in both the missions to do doc, and the FOB to do DOC.
//   // It should then look through each doc, and each object in each doc, each object is a separate "task".
//   // If an object (task) has a key:value pair of complete: true, populate that task into the archived div container.
//   // If an object (task) has a key:value pair of complete: false, populate that task into the active div container.


// }


// THESE TWO FUNCTIONS WORK IN COMBINATION WITH THE ABOVE FUNCTOINS

// export const populateMissionToDoLists = (missionDoc) => {

//   activeMissionsToDoContainer.innerHTML = "";
//   archivedMissionsToDoContainer.innerHTML = "";

//   let missionObj = missionDoc.data();

//   for (let [key, value] of Object.entries(missionObj)) { // for loop which loops through each object in the mission tasks doc.
//     let id = value.taskUID;
//     let task = value.task;
//     let complete = value.complete;
//     let progressCurrent = value.progress.progressCurrent;
//     let progressTotal = value.progress.progressTotal;

//     console.log(task, complete, progressTotal, progressCurrent);

//     if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
//       archivedMissionsToDoContainer.insertAdjacentHTML('beforeend', `
//       <div class='mission-task-container' id='${id}'>
//         <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' checked />
//         <p class='mission-task-text task-complete-strike-through'>${task}</p>
//         <div class='mission-task-progress-container'>
//           <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
//         </div>
//       </div>
//     `)
//     } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
//       activeMissionsToDoContainer.insertAdjacentHTML('beforeend', `
//       <div class='mission-task-container' id='${id}'>
//         <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' />
//         <p class='mission-task-text'>${task}</p>
//         <div class='mission-task-progress-container'>
//           <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
//         </div>
//       </div>
//     `)
//     } else {
//       console.log('neither true or false for complete.  This is only for error checking');
//     }


//     // Put this back into the main function, then pass the object along, and create the html.
//   }

// }

// export const populateFOBToDoLists = (FOBDoc) => {

//   activeFOBToDoContainer.innerHTML = "";
//   archivedFOBToDoContainer.innerHTML = "";

//   let FOBObj = FOBDoc.data();

//   for (let [key, value] of Object.entries(FOBObj)) { // for loop which loops through each object in the mission tasks doc.
//     let id = value.taskUID;
//     let task = value.task;
//     let complete = value.complete;
//     let progressCurrent = value.progress.progressCurrent;
//     let progressTotal = value.progress.progressTotal;

//     console.log(task, complete, progressTotal, progressCurrent);

//     if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
//       archivedFOBToDoContainer.insertAdjacentHTML('beforeend', `
//       <div class='mission-task-container' id='${id}'>
//         <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' checked />
//         <p class='mission-task-text task-complete-strike-through'>${task}</p>
//         <div class='mission-task-progress-container'>
//           <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
//         </div>
//       </div>
//     `)
//     } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
//       activeFOBToDoContainer.insertAdjacentHTML('beforeend', `
//       <div class='mission-task-container' id='${id}'>
//         <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' />
//         <p class='mission-task-text'>${task}</p>
//         <div class='mission-task-progress-container'>
//           <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
//         </div>
//       </div>
//     `)
//     } else {
//       console.log('neither true or false for complete.  This is only for error checking');
//     }


//     // Put this back into the main function, then pass the object along, and create the html.
//   }
// }


// POPULATE TO DO LISTS TESTING.  COMBINING THINGS!

export const populateMissionToDoLists = async (missionDoc, missionDocRef) => {

  if (missionDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ To Do Missions Doc Exists');

    activeMissionsToDoContainer.innerHTML = "";
    archivedMissionsToDoContainer.innerHTML = "";

    let missionObj = missionDoc.data();

    for (let [key, value] of Object.entries(missionObj)) { // for loop which loops through each object in the mission tasks doc.
      let id = value.taskUID;
      let task = value.task;
      let complete = value.complete;
      let progressCurrent = value.progress.progressCurrent;
      let progressTotal = value.progress.progressTotal;
  
      console.log(task, complete, progressTotal, progressCurrent);
  
      if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
        archivedMissionsToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' checked />
          <p class='mission-task-text task-complete-strike-through'>${task}</p>
          <div class='mission-task-progress-container'>
            <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
          </div>
        </div>
      `)
      } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
        activeMissionsToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' />
          <p class='mission-task-text'>${task}</p>
          <div class='mission-task-progress-container'>
            <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
          </div>
        </div>
      `)
      } else {
        console.log('neither true or false for complete.  This is only for error checking');
      };
    };

    const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('mission-task-checkbox');
    for (let i = 0; i < arrayOfMissionTaskCheckboxes.length && i < 200; i++) {
      arrayOfMissionTaskCheckboxes[i].addEventListener('click', (e) => {
        let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
        let checkId = e.target.id; // Grabs the event target's id property.
        console.log('mission task checkbox clicked', checkId, checked);
        updateDoc(missionDocRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    }

  } else {
    console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
  };

  // const arrayOfMissionTaskCheckboxes = document.getElementsByClassName('mission-task-checkbox');
  // for (let i = 0; i < arrayOfMissionTaskCheckboxes.length && i < 200; i++) {
  //   arrayOfMissionTaskCheckboxes[i].addEventListener('click', (e) => {
  //     let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
  //     let checkId = e.target.id; // Grabs the event target's id property.
  //     console.log('mission task checkbox clicked', checkId, checked);
  //     updateDoc(missionDoc, {
  //       [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
  //     });
  //   })
  // }

}


export const populateFOBToDoLists = async (FOBDoc, FOBDocRef) => {

  if (FOBDoc.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    console.log('The DMZ FOB TO DO Doc Exists');

    activeFOBToDoContainer.innerHTML = "";
    archivedFOBToDoContainer.innerHTML = "";
  
    let FOBObj = FOBDoc.data();
  
    for (let [key, value] of Object.entries(FOBObj)) { // for loop which loops through each object in the mission tasks doc.
      let id = value.taskUID;
      let task = value.task;
      let complete = value.complete;
      let progressCurrent = value.progress.progressCurrent;
      let progressTotal = value.progress.progressTotal;
  
      console.log(task, complete, progressTotal, progressCurrent);
  
      if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
        archivedFOBToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' checked />
          <p class='mission-task-text task-complete-strike-through'>${task}</p>
          <div class='mission-task-progress-container'>
            <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
          </div>
        </div>
      `)
      } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
        activeFOBToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' />
          <p class='mission-task-text'>${task}</p>
          <div class='mission-task-progress-container'>
            <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
          </div>
        </div>
      `)
      } else {
        console.log('neither true or false for complete.  This is only for error checking');
      }
    }
    const arrayOfFOBTaskCheckboxes = document.getElementsByClassName('fob-task-checkbox');
    for (let i = 0; i < arrayOfFOBTaskCheckboxes.length && i < 200; i++) {
      arrayOfFOBTaskCheckboxes[i].addEventListener('click', (e) => {
        let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
        let checkId = e.target.id; // Grabs the event target's id property.
        console.log('FOB task checkbox clicked', checkId, checked);
        updateDoc(FOBDocRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    }


  } else {
    console.log('The DMZ FOB TO DO Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
  };

  // const arrayOfFOBTaskCheckboxes = document.getElementsByClassName('fob-task-checkbox');
  // for (let i = 0; i < arrayOfFOBTaskCheckboxes.length && i < 200; i++) {
  //   arrayOfFOBTaskCheckboxes[i].addEventListener('click', (e) => {
  //     let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
  //     let checkId = e.target.id; // Grabs the event target's id property.
  //     console.log('FOB task checkbox clicked', checkId, checked);
  //     updateDoc(docRefFOBDoc, {
  //       [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
  //     });
  //   })
  // }


}
