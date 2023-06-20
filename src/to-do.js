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

export const populateMissionToDoLists = async (missionDoc, missionDocRef, database, uid) => { 
  // This function does:  
  // Checks to see if a missionDoc exists, if not, creates it.
  // If it does exists... it resets the DOM before adding data, 
  // then makes the Doc into an object, which can be read by a for loop.  
  // Inside of that for loop, the DOM is populated by searching through the object's complete: (value) true/false.
  // After creation of the DOM, attaches a listener to the checkboxes.  When user clicks a checkbox, it moves it to either active or archive, depending on true/false value.

  if (missionDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    // console.log('The DMZ To Do Missions Doc Exists');

    activeMissionsToDoContainer.innerHTML = "";
    archivedMissionsToDoContainer.innerHTML = "";

    let missionObj = missionDoc.data();

    for (let [key, value] of Object.entries(missionObj)) { // for loop which loops through each object in the mission tasks doc.
      let id = value.taskUID;
      let task = value.task;
      let complete = value.complete;
      let progressCurrent = value.progress.progressCurrent;
      let progressTotal = value.progress.progressTotal;
    
      if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
        archivedMissionsToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' checked />
          <p class='mission-task-text task-complete-strike-through'>${task}</p>
          <div class='mission-task-progress-container'>
            <form class='form-progress-input-mission' data-task-id='${id}'>
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input progress-input-current-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input progress-input-total-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
              <button type='submit' data-task-id='${id}'>Update</button>
            </form>
          </div>
        </div>
      `)
      } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
        activeMissionsToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='mission-task-checkbox' name='' />
          <p class='mission-task-text'>${task}</p>
          <div class='mission-task-progress-container'>
            <form class='form-progress-input-mission' data-task-id='${id}'>
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input progress-input-current-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input progress-input-total-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
              <button type='submit' data-task-id='${id}'>Update</button>
            </form>          
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
        // console.log('mission task checkbox clicked', checkId, checked);
        updateDoc(missionDocRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    }

    const arrayOfFormProgressInputMission = document.getElementsByClassName('form-progress-input-mission');

    for (let i = 0; i < arrayOfFormProgressInputMission.length && i < 200; i++) {
      arrayOfFormProgressInputMission[i].addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(arrayOfFormProgressInputMission[i]); // Creates an object named data, with all FormData.

        let progressCurrent = data.get('progressCurrent');
        let progressTotal = data.get('progressTotal');
        let taskId = e.target.dataset.taskId;

        console.log(progressCurrent, progressTotal, taskId);

        updateDoc(missionDocRef, {
          [taskId+".progress.progressCurrent"] : progressCurrent,
          [taskId+".progress.progressTotal"] : progressTotal,
        });
      })
    };

  } else {
    // console.log('The DMZ To Do Missions Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoMissions'), dataDMZToDoMissions)
  };
}

export const populateFOBToDoLists = async (FOBDoc, FOBDocRef, database, uid) => {
  // This function does:  
  // Checks to see if a missionDoc exists, if not, creates it.
  // If it does exists... it resets the DOM before adding data, 
  // then makes the Doc into an object, which can be read by a for loop.  
  // Inside of that for loop, the DOM is populated by searching through the object's complete: (value) true/false.
  // After creation of the DOM, attaches a listener to the checkboxes.  When user clicks a checkbox, it moves it to either active or archive, depending on true/false value.

  if (FOBDoc.exists()) { // Checks to see if the FOB To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.  console.log's for testing.
    activeFOBToDoContainer.innerHTML = "";
    archivedFOBToDoContainer.innerHTML = "";
  
    let FOBObj = FOBDoc.data();
  
    for (let [key, value] of Object.entries(FOBObj)) { // for loop which loops through each object in the mission tasks doc.
      let id = value.taskUID;
      let task = value.task;
      let complete = value.complete;
      let progressCurrent = value.progress.progressCurrent;
      let progressTotal = value.progress.progressTotal;
    
      if (complete === true) { // Checking through each object, if complete, puts the "task" in the ARCHIVED div.
        archivedFOBToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' checked />
          <p class='mission-task-text task-complete-strike-through'>${task}</p>
          <div class='mission-task-progress-container'>
            <form class='form-progress-input-fob' data-task-id='${id}'>
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input progress-input-current-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input progress-input-total-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
              <button type='submit' data-task-id='${id}'>Update</button>
            </form>
          </div>
        </div>
      `)
      } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
        activeFOBToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' />
          <p class='mission-task-text'>${task}</p>
          <div class='mission-task-progress-container'>
            <form class='form-progress-input-fob' data-task-id='${id}'>
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input progress-input-current-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input progress-input-total-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
              <button type='submit' data-task-id='${id}'>Update</button>
            </form>
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
        updateDoc(FOBDocRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    };

    const arrayOfFormProgressInputFOB = document.getElementsByClassName('form-progress-input-fob');

    for (let i = 0; i < arrayOfFormProgressInputFOB.length && i < 200; i++) {
      arrayOfFormProgressInputFOB[i].addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(arrayOfFormProgressInputFOB[i]); // Creates an object named data, with all FormData.

        let progressCurrent = data.get('progressCurrent');
        let progressTotal = data.get('progressTotal');
        let taskId = e.target.dataset.taskId;

        console.log(progressCurrent, progressTotal, taskId);

        updateDoc(FOBDocRef, {
          [taskId+".progress.progressCurrent"] : progressCurrent,
          [taskId+".progress.progressTotal"] : progressTotal,
        });
      })
    };


  } else {
    console.log('The DMZ FOB TO DO Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
  };
}
