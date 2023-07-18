import { onAuthStateChanged } from "firebase/auth";
import { dataEventTheBoysDiabolical } from "../data/events/data-event-the-boys-diabolical";
import { auth, db } from "../firebase";
// Variables:

const mainContentContainerEventTheBoys = document.getElementById('mainContentContainerEventTheBoys');




// onAuthStateChanged(auth, user => {
//   if (user) {
//     onSnapshot(docRefEventTheBoys, (snapshot) => {
//       if (mainContentContainerEventTheBoys) {
//         createEventGrid(user, snapshot, docRefEventTheBoys, db)
//       }
//     }) // event doc load
//   }
//   else {
//     console.log('event no user triggered');
//     createEventGrid(undefined, dataEventTheBoysDiabolical, undefined, undefined);
//   }
// })




export const createEventGrid = async (dataObj) => {

  // if (user && dataRef === undefined) {
  //   // create doc in user's database if user is logged in and doesn't have the doc yet.
  // } else {
  //   // create the event grid with either created doc, or from the JS object.
  // }


  // let data = dataObj;

  let dataSorted = Object.entries(dataObj).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of dataSorted) {
    let id = value.id;
    let complete = value.complete;
    let task = value.description;
    let progressTotal = value.progressTotal;
    let progressCurrent = value.progressCurrent;

    let checkbox = "";
    
    if (complete === true) {
      // background of event-task-container should be green, and checkbox
      checkbox = "checked";
    }

    // if (no user) { // no edit button }


    mainContentContainerEventTheBoys.insertAdjacentHTML('beforeend', `
      <div class='event-task-container' id='${id}'>
        <button type='button' class='btn-edit-event-task' id='${id}'>Edit</button>
        <p class='event-task-progress-current'>${progressCurrent}</p>
        <p> / </p>
        <p class='event-task-progress-total'>${progressTotal}</p>
        <p class='event-task-text'>${task}</p>
      </div>

      <div class='event-task-form-container hidden' id='${id}'>
        <form class='form-event-task-update' data-task-id='${id}'>
          <button type='submit' data-task-id="${id}">Update</button>
          <input name='progressCurrent' type='number' inputmode='numeric' class='input-current-progress' data-task-id="${id}" min='0' max='${progressTotal}' step='1' value='${progressCurrent}' />
          <p> / </p>
          <p class='event-task-progress-total'>${progressTotal}</p>
          <p class='event-task-text'>${task}</p>
          <input type='checkbox' id='${id} class='event-task-checkbox ${checkbox} />
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

      // const data = new FormData(arrayOfFormUpdateProgress[i]); // Creates an object named data, with all FormData.

      // let progressCurrent = data.get('progressCurrent');
      // let progressTotal = data.get('progressTotal');
      // let taskId = e.target.dataset.taskId;

      // updateDoc(docRef, {
      //   [taskId+".progressCurrent"] : progressCurrent,
      // });

      e.target.parentNode.classList.toggle('hidden'); // Toggles (Hides) form div container.
      e.target.parentNode.previousElementSibling.classList.toggle('hidden'); // Toggles (Shows) text-only task information.

    })
  }


}

createEventGrid(dataEventTheBoysDiabolical);