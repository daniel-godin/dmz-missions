// This is code for the to-do.html web app.

import { doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp, } from 'firebase/firestore';
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { dataDMZToDoMissions, dataDMZToDoFOB } from './data/data-dmz-to-do-s4';

import { logInRequiredFunction } from './dmz-missions-ui';

export const toDoMainMissionsContainer = document.getElementById('toDoMainMissionsContainer');
export const toDoMainFobContainer = document.getElementById('toDoMainFobContainer');

export const activeMissionsToDoContainer = document.getElementById('activeMissionsToDoContainer');
export const activeFOBToDoContainer = document.getElementById('activeFOBToDoContainer');

export const archivedMissionsToDoContainer = document.getElementById('archivedMissionsToDoContainer');
export const archivedFOBToDoContainer = document.getElementById('archivedFOBToDoContainer');

export const formAddMissionToDo = document.getElementById('formAddMissionToDo');
export const formAddFOBToDo = document.getElementById('formAddFOBToDo');

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

          <div class='mission-task-progress-container'>
            <p class='mission-task-text task-complete-strike-through'>${task}</p>
            <p class='mission-task-progress-current task-complete-strike-through'>${progressCurrent}</p>
            <p class='task-complete-strike-through'> / </p>
            <p class='mission-task-progress-total task-complete-strike-through'>${progressTotal}</p>
            <button type='button' class='btn-edit-task' id='${id}'>Edit</button>
          </div>

          <div class='mission-task-progress-form-container hide'>
            <form class='form-progress-input-mission' data-task-id='${id}'>
              <input name='missionText' type='text' class='progress-input-text' data-task-id='${id}' value='${task}' placeholder='${task}' />
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

          <div class='mission-task-progress-container'>
            <p class='mission-task-text'>${task}</p>
            <p class='mission-task-progress-current'>${progressCurrent}</p>
            <p> / </p>
            <p class='mission-task-progress-total'>${progressTotal}</p>
            <button type='button' class='btn-edit-task' id='${id}'>Edit</button>
          </div>
            
          <div class='mission-task-progress-form-container hide'>
            <form class='form-progress-input-mission' data-task-id='${id}'>
              <input name='missionText' type='text' class='progress-input-text' data-task-id='${id}' value='${task}' placeholder='${task}' />
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input-number progress-input-current-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input-number progress-input-total-mission' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
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

    const arrayOfBtnEditTask = document.getElementsByClassName('btn-edit-task'); // Probably need to move this out of just the mission side, because it applies to both mission and FOB tasks.
    for (let i = 0; i < arrayOfBtnEditTask.length && i < 200; i++) {
      arrayOfBtnEditTask[i].addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentNode.classList.toggle('hide');
        e.target.parentNode.nextElementSibling.classList.toggle('hide');
      })
    }

    const arrayOfFormProgressInputMission = document.getElementsByClassName('form-progress-input-mission');
    for (let i = 0; i < arrayOfFormProgressInputMission.length && i < 200; i++) {
      arrayOfFormProgressInputMission[i].addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(arrayOfFormProgressInputMission[i]); // Creates an object named data, with all FormData.

        let progressCurrent = data.get('progressCurrent');
        let progressTotal = data.get('progressTotal');
        let missionText = data.get('missionText');
        let taskId = e.target.dataset.taskId;

        console.log(progressCurrent, progressTotal, taskId);

        updateDoc(missionDocRef, {
          [taskId+".task"] : missionText,
          [taskId+".progress.progressCurrent"] : progressCurrent,
          [taskId+".progress.progressTotal"] : progressTotal,
        });

        e.target.parentNode.classList.toggle('hide'); // These two toggles show/hide the edit form vs. the plain text display of information.
        e.target.parentNode.previousElementSibling.classList.toggle('hide');


      })
    };

    const archiveCompleteHeaders = document.getElementsByClassName('header-archived-to-do'); // THIS CURRENTLY WORKS FOR BOTH SIDES, BUT IT MAY GIVE AN ERROR LATER.  WILL NEED TO CREATE ONE FOR EACH FUNCTION, OR PUT IN A FUNCTION "ABOVE" THIS ONE.
    for (let i = 0; i < archiveCompleteHeaders.length && i < 10; i++) {
      archiveCompleteHeaders[i].addEventListener('click', (e) => {
        // When clicked, should show/hide the archived list below it.  Parent.Parent.Second(last)Child
        let archivedTaskContainer = e.target.parentNode.parentNode.lastElementChild; // This is the target to hide/show.
        archivedTaskContainer.classList.toggle('hide'); // Toggles class 'none', which has a CSS property display:none.
      })
    }

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

          <div class='mission-task-progress-container'>
            <p class='mission-task-text task-complete-strike-through'>${task}</p>
            <p class='mission-task-progress-current task-complete-strike-through'>${progressCurrent}</p>
            <p class='task-complete-strike-through'> / </p>
            <p class='mission-task-progress-total task-complete-strike-through'>${progressTotal}</p>
            <button type='button' class='btn-edit-task' id='${id}'>Edit</button>
          </div>

          <div class='mission-task-progress-form-container hide'>
            <form class='form-progress-input-fob' data-task-id='${id}'>
              <input name='missionText' type='text' class='progress-input-text' data-task-id='${id}' value='${task}' placeholder='${task}' />
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input-number progress-input-current-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input-number progress-input-total-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
              <button type='submit' data-task-id='${id}'>Update</button>
            </form>
          </div>
        </div>
      `)
      } else if (complete === false) { // Checking through each object, if NOT complete, puts the "task" in the ACTIVE div.
        activeFOBToDoContainer.insertAdjacentHTML('beforeend', `
        <div class='mission-task-container' id='${id}'>
          <input type='checkbox' id='${id}' class='fob-task-checkbox' name='' />

          <div class='mission-task-progress-container'>
            <p class='mission-task-text'>${task}</p>
            <p class='mission-task-progress-current'>${progressCurrent}</p>
            <p> / </p>
            <p class='mission-task-progress-total'>${progressTotal}</p>
            <button type='button' class='btn-edit-task' id='${id}'>Edit</button>
          </div>

          <div class='mission-task-progress-form-container hide'>
            <form class='form-progress-input-fob' data-task-id='${id}'>
              <input name='missionText' type='text' class='progress-input-text' data-task-id='${id}' value='${task}' placeholder='${task}' />
              <input name='progressCurrent' type='number' inputmode='numeric' class='progress-input-number progress-input-current-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressCurrent}' />
              <input name='progressTotal' type='number' inputmode='numeric' class='progress-input-number progress-input-total-fob' data-task-id='${id}' min='0' max='99' step='1' value='${progressTotal}' />
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

    const arrayOfBtnEditTask = document.getElementsByClassName('btn-edit-task'); // Probably need to move this out of just the mission side, because it applies to both mission and FOB tasks.
    for (let i = 0; i < arrayOfBtnEditTask.length && i < 200; i++) {
      arrayOfBtnEditTask[i].addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentNode.classList.toggle('hide');
        e.target.parentNode.nextElementSibling.classList.toggle('hide');
      })
    }

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

        e.target.parentNode.classList.toggle('hide');  // These two toggles show/hide the edit form vs. the plain text display of information.
        e.target.parentNode.previousElementSibling.classList.toggle('hide');

      })
    };


  } else {
    console.log('The DMZ FOB TO DO Doc Does Not Exist.  Creating Now.')
    await setDoc(doc(database, 'users', uid, 'to-do-trackers', 'DMZToDoFOB'), dataDMZToDoFOB)
  };
}

onAuthStateChanged(auth, user => {
  if (user) { // If user exists > Do these.  Else > show div for user to go log in/sign up.
    const UID = user.uid;

    if (formAddMissionToDo) { // If this form exists > If form submitted, add the data to the mission task doc in firestore.
      formAddMissionToDo.addEventListener('submit', async (e) => {
        e.preventDefault();
        const docRefMissionTaskDoc = doc(db, 'users', UID, 'to-do-trackers', 'DMZToDoMissions');
        
        let randomTaskId = randomTaskIdGenerator('task-mission');

        updateDoc(docRefMissionTaskDoc, {
          [randomTaskId] : {
            taskUID: randomTaskId, // Randomly generated.  Need to implement later.
            userUID: UID, // Users UID.  For easier tracking/moving later.
            dateTimeCreated: serverTimestamp(), // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
            type: "Mission", // type mission or type fob.  For organizing later.
            task: document.getElementById('inputMissionTextToDo').value, // string which is the text the user inputted for their "to do task".
            complete: false, // true/false complete/incomplete
            progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
              progressCurrent: 0, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
              progressTotal: Number(document.getElementById('inputMissionNumberToDo').value), // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
            },
          } 
        }); // adds submitted task as an object to firestore db document missionDoc whatever.
    
        activeMissionsToDoContainer.innerHTML = ""; // Clears both div's for adding a new set from the db.
        archivedMissionsToDoContainer.innerHTML = "";  

        formAddMissionToDo.reset();  // Resets/Clears the form after submission.
      });
    }

    if (formAddFOBToDo) { // If this form exists > If form submitted, add the data to the FOB task doc in firestore.
      formAddFOBToDo.addEventListener('submit', async (e) => {
        e.preventDefault();
        const docRefFOBTaskDoc = doc(db, 'users', UID, 'to-do-trackers', 'DMZToDoFOB');
        
        let randomTaskId = randomTaskIdGenerator('task-fob');

        updateDoc(docRefFOBTaskDoc, {
          [randomTaskId] : {
            taskUID: randomTaskId, // Randomly generated.  Need to implement later.
            userUID: UID, // Users UID.  For easier tracking/moving later.
            dateTimeCreated: serverTimestamp(), // Date and Time when to-do task was created.  This is for sorting.  Oldest top to newest bottom at first.
            type: "FOB", // type mission or type fob.  For organizing later.
            task: document.getElementById('inputFobTextToDo').value, // string which is the text the user inputted for their "to do task".
            complete: false, // true/false complete/incomplete
            progress: { // For later.  User should be able to "update" their progress on a task.  For example... especially in FOB... Exfil with 10 Gold Bars, Skulls, GPU's.  This takes a while and user will want to update and see what they really need.
              progressCurrent: 0, // This should be a Number.  For example.  Exfil with 10 Gold Bars, and the user currently has extracted with 4/10, this would be 4.
              progressTotal: Number(document.getElementById('inputFobNumberToDo').value), // This should be a Number.  For example.  Exfil with 10 Gold Bars, this should be 10.
            },
          } 
        }); // adds submitted task as an object to firestore db document missionDoc whatever.
    
        activeFOBToDoContainer.innerHTML = ""; // Clears both div's for adding a new set from the db.
        archivedFOBToDoContainer.innerHTML = "";  

        formAddFOBToDo.reset();  // Resets/Clears the form after submission.
      });
    }
  } else if (toDoMainMissionsContainer) { // Might add second parameter check:  if the page needs a required sign in to work, open this.
    console.log('to do page, and no user found triggered');
    logInRequiredFunction();
  } else {
    console.log('user not logged in, this is triggered from to-do.js for pages that is not the to do page.')
  }
})



export const randomTaskIdGenerator = (id) => { // Creates a random string and concats a prefix if wanted.  Can reuse this throughout the website.
  let result = crypto.randomUUID();
  return `${id}-` + `${result}`;
}