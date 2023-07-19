import { onAuthStateChanged } from "firebase/auth";
import { dataEventTheBoysDiabolical } from "../data/events/data-event-the-boys-diabolical";
import { auth, db } from "../firebase";
import { doc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
// Variables:

const mainContentContainerEventTheBoys = document.getElementById('mainContentContainerEventTheBoys');




onAuthStateChanged(auth, user => { // onAuthStateChanged for COD Event: The Boys.
  if (user && mainContentContainerEventTheBoys) { // If user is true, it means there is a logged-in user.
    console.log('The Boys Event - User is true')
    const docRefEventS4TheBoys = doc(db, 'users', user.uid, 'mw2-trackers', 'eventS4TheBoys');
    onSnapshot(docRefEventS4TheBoys, (snapshot) => { // Listener for changed in the doc reference.
      createEventGrid(user, snapshot, docRefEventS4TheBoys, db); 
    });
  }
  else if (mainContentContainerEventTheBoys) { // Basically, if no user exists (logged out) AND the boys id container exists, it means user is on the correct page, but not logged in.
    console.log('event no user triggered');
    createEventGrid(undefined, dataEventTheBoysDiabolical, undefined, undefined); // Creates the grid, but without any user trackables.  Just a basic read.  This is created from the JS object.
  }
  else {
    console.log('The Boys main content container not detected.  DELETE THIS AFTER DONE.')
  }
})


export const createEventGrid = async (user, dataObj, docRef, db) => { // Main function to create the event grid.

  mainContentContainerEventTheBoys.innerHTML = '';

  if (user) { // This if statement checks whether a user is logged in, if yes, checks if document exists. If no, creates it and reloads page.  If yes, changes doc into an object with .data() method.
    if (dataObj.exists()) {
      // create doc in user's database if user is logged in and doesn't have the doc yet.
      console.log('document exists!')
      dataObj = dataObj.data();
    } else {
      setDoc(doc(db, 'users', user.uid, 'mw2-trackers', 'eventS4TheBoys'), dataEventTheBoysDiabolical);
      reload();
    }
  }
  // create the event grid with either created doc, or from the JS object.
  let dataSorted = Object.entries(dataObj).sort((a, b) => a[0].localeCompare(b[0]));
  
  for (let [key, value] of dataSorted) {
    let id = value.id;
    let complete = value.complete;
    let task = value.description;
    let progressTotal = value.progressTotal;
    let progressCurrent = value.progressCurrent;

    let checkbox = '';
    let hide = '';
    let eventTaskContainer = '';
    let status = '';

    if (user === undefined) { // If user is undefined, it means not logged in.
      // I need to add a class of hidden for the changeable elements, and also change the css properties to just display the text with 1fr.
      eventTaskContainer = 'event-task-container-logged-out';
      hide = 'hidden';
    } else if (user) {
      eventTaskContainer = 'event-task-container';
    } else {
      console.log('no user detected.  This is an error catch.')
    }

    if (complete === true) {
      // background of event-task-container should be green, and checkbox
      checkbox = "checked";
      status = "task-complete";
    }


    mainContentContainerEventTheBoys.insertAdjacentHTML('beforeend', `
      <div class='${eventTaskContainer} ${status}' id='${id}'>
        <button type='button' class='btn-edit-event-task ${hide}' id='${id}'>Edit</button>
        <p class='event-task-progress-current  ${hide}'>${progressCurrent}</p>
        <p class='${hide}'> / </p>
        <p class='event-task-progress-total ${hide}'>${progressTotal}</p>
        <p class='event-task-text'>${task}</p>
      </div>

      <div class='event-task-form-container ${status} hidden' id='${id}'>
        <form class='form-event-task-update' data-task-id='${id}'>
          <button type='submit' data-task-id="${id}">Update</button>
          <input name='progressCurrent' type='number' inputmode='numeric' class='input-current-progress' data-task-id="${id}" min='0' max='${progressTotal}' step='1' value='${progressCurrent}' />
          <p> / </p>
          <p class='event-task-progress-total'>${progressTotal}</p>
          <p class='event-task-text'>${task}</p>
          <input type='checkbox' id='${id}' class='event-task-checkbox' ${checkbox} />
        </form>
      </div>
    `)
  }

  const arrayOfBtnEditEventTask = document.getElementsByClassName('btn-edit-event-task');
  for (let i = 0; i < arrayOfBtnEditEventTask.length && i < 20; i++) {
    arrayOfBtnEditEventTask[i].addEventListener('click', (e) => {
      e.preventDefault();
      e.target.parentNode.classList.toggle('hidden'); // Hides Non-Form, Text-Only, div with info.
      e.target.parentNode.nextElementSibling.classList.toggle('hidden'); // Shows form to edit data.
    })
  }

  const arrayOfFormUpdateProgress = document.getElementsByClassName('form-event-task-update');
  for (let i = 0; i < arrayOfFormUpdateProgress.length && i < 20; i++) {
    arrayOfFormUpdateProgress[i].addEventListener('submit', (e) => {
      e.preventDefault();

      let totalProgress = e.target.children[3].innerText;
      let checkedProgress = e.target.children[5].checked;

      console.log(checkedProgress);

      const data = new FormData(arrayOfFormUpdateProgress[i]); // Creates an object named data, with all FormData.

      let progressCurrent = data.get('progressCurrent');
      let progressTotal = data.get('progressTotal');
      let taskId = e.target.dataset.taskId;
      let status = '';

      if (progressCurrent >= totalProgress) {
        status = true;
      } else {
        status = false;
      }

      updateDoc(docRef, {
        [taskId+".progressCurrent"] : progressCurrent,
        [taskId+".complete"] : status,
      });

      e.target.parentNode.classList.toggle('hidden'); // Toggles (Hides) form div container.
      e.target.parentNode.previousElementSibling.classList.toggle('hidden'); // Toggles (Shows) text-only task information.

    })
  }

  const arrayOfCheckboxes = document.getElementsByClassName('event-task-checkbox');
  for (let i = 0; i < arrayOfCheckboxes.length && i < 20; i++) {
    arrayOfCheckboxes[i].addEventListener('click', (e) => {
      e.preventDefault();

      console.log('checkbox clicked');

      let status = e.target.checked;

      let totalProgress = e.target.previousElementSibling.previousElementSibling.innerText;

      let progressCurrent = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;

      console.log(progressCurrent);

      let taskId = e.target.id;

      if (status === true) {
        progressCurrent = totalProgress;
      } else if (status === false) {
        status = false;
      }

      updateDoc(docRef, {
        [taskId+".progressCurrent"] : progressCurrent,
        [taskId+".complete"] : status,
      });

      e.target.parentNode.parentNode.classList.toggle('hidden'); // Toggles (Hides) form div container.
      e.target.parentNode.parentNode.previousElementSibling.classList.toggle('hidden'); // Toggles (Shows) text-only task information.

    })
  }
}