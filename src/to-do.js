// This is code for the to-do.html web app.

import { dataDMZToDoMissions, dataDMZToDoFOB } from './data/data-dmz-to-do-s4';

import { doc, getDoc, setDoc } from 'firebase/firestore';

export const toDoMainMissionsContainer = document.getElementById('toDoMainMissionsContainer');
export const toDoMainFobContainer = document.getElementById('toDoMainFobContainer');

export const activeToDoMissionsContainer = document.getElementById('activeToDoMissionsContainer');
export const activeToDoFobContainer = document.getElementById('activeToDoFobContainer');

export const formAddMissionToDo = document.getElementById('formAddMissionToDo');
export const formAddFobToDo = document.getElementById('formAddFobToDo');




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




export const populateToDoLists = async (database, uid, missionsDoc, FOBDoc) => {

    // If doc does NOT exist... MAKE IT.  If it DOES exist, do nothing.
    const docRefMissionsDoc = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions') // DMZ To Do Missions Doc Reference.
    const docRefFOBDoc = doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB') // DMZ To Do FOB Doc Reference.
  
    let docSnapMissionsDoc = await getDoc(docRefMissionsDoc); // Grabbing DMZ To Do Missions Doc.
    let docSnapFOBDoc = await getDoc(docRefFOBDoc); // Grabbing DMZ To Do FOB Doc.
  
    if (docSnapMissionsDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
      console.log('The DMZ To Do Missions Doc Exists');
      populateMissionToDoLists(docSnapMissionsDoc);

    } else {
      console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
      await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
    };
  
    if (docSnapFOBDoc.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
      console.log('The DMZ To Do Missions Doc Exists');
    } else {
      console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
      await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
    };



  // This should take in both the missions to do doc, and the FOB to do DOC.
  // It should then look through each doc, and each object in each doc, each object is a separate "task".
  // If an object (task) has a key:value pair of complete: true, populate that task into the archived div container.
  // If an object (task) has a key:value pair of complete: false, populate that task into the active div container.


}

const populateMissionToDoLists = async (missionDoc) => {

  let missionObj = missionDoc.data();

  // console.log(missionObj);

  // console.log(missionObj.taskUID);

  // console.log(missionObj.taskUID.task);



  // READ THIS NEXT TIME:  CREATE THE ADDHTMLADJACENT UNDER THIS.
  for (let [key, value] of Object.entries(missionObj)) {
    let id = value.taskUID;
    let task = value.task;
    let complete = value.complete;
    let progressCurrent = value.progress.progressCurrent;
    let progressTotal = value.progress.progressTotal;

    console.log(task, complete, progressTotal, progressCurrent);

    activeToDoMissionsContainer.insertAdjacentHTML('beforeend', `
      <div class='mission-task-container' id='${id}'>
        <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' />
        <p class='mission-task-text'>${task}</p>
        <div class='mission-task-progress-container'>
          <p class='mission-task-progress-text'>${progressCurrent} / ${progressTotal}</p>
        </div>
      </div>
    `)

    // Put this back into the main function, then pass the object along, and create the html.
  }

}

function populateFOBToDoLists() {

}