import { doc, getDoc, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
import { dataDMZStandardMissionsS4 } from "./data/data-dmz-standard-missions-s4";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";

export const dmzMissionsContainer = document.getElementById('dmzMissionsContainer');

const blackMousTier1Container = document.getElementById('blackMousTier1MissionsContainer');
const blackMousTier2Container = document.getElementById('blackMousTier2MissionsContainer');
const blackMousTier3Container = document.getElementById('blackMousTier3MissionsContainer');
const blackMousTier4Container = document.getElementById('blackMousTier4MissionsContainer');
const blackMousTier5Container = document.getElementById('blackMousTier5MissionsContainer');

const whiteLotusTier1Container = document.getElementById('whiteLotusTier1MissionsContainer');
const whiteLotusTier2Container = document.getElementById('whiteLotusTier2MissionsContainer');
const whiteLotusTier3Container = document.getElementById('whiteLotusTier3MissionsContainer');
const whiteLotusTier4Container = document.getElementById('whiteLotusTier4MissionsContainer');
const whiteLotusTier5Container = document.getElementById('whiteLotusTier5MissionsContainer');

const phalanxTier1Container = document.getElementById('phalanxTier1MissionsContainer');
const phalanxTier2Container = document.getElementById('phalanxTier2MissionsContainer');
const phalanxTier3Container = document.getElementById('phalanxTier3MissionsContainer');
const phalanxTier4Container = document.getElementById('phalanxTier4MissionsContainer');
const phalanxTier5Container = document.getElementById('phalanxTier5MissionsContainer');

const crownTier1Container = document.getElementById('crownTier1MissionsContainer');
const crownTier2Container = document.getElementById('crownTier2MissionsContainer');
const crownTier3Container = document.getElementById('crownTier3MissionsContainer');
const crownTier4Container = document.getElementById('crownTier4MissionsContainer');
const crownTier5Container = document.getElementById('crownTier5MissionsContainer');



// console.log('Beginning of dmz-missions.js triggered.  After variables'); // For Testing Purposes

// I should only need to change these two variables each season.  Current DMZ Standard Missions JavaScript Object.
const currentDMZStandardMissions = dataDMZStandardMissionsS4; // CHANGE THIS EACH SEASON.
const currentDMZSeasonDocName = 'DMZStandardMissionsS4'; // CHANGE THIS EACH SEASON AS WELL.

onAuthStateChanged(auth, user => { // NEW VERSION
  if (dmzMissionsContainer) { // If this variable exists, it means the user is on the dmz missions page.
    if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
      const docRefStandardMissionGrid = doc(db, 'users', user.uid, 'mw2-trackers', `${currentDMZSeasonDocName}`)
      onSnapshot(docRefStandardMissionGrid, (snapshot) => {
        // console.log(snapshot.exists()); // For Error Checking
        if (snapshot.exists()) {
          snapshot = snapshot.data();
          createMissionGrid(snapshot, docRefStandardMissionGrid, user, db);
        } else if (!snapshot.exists()) {
          setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentDMZSeasonDocName}`), currentDMZStandardMissions);
        }
      })
    } else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
      createMissionGrid(currentDMZStandardMissions, undefined, undefined, undefined);
      recommendLogInBox(dmzMissionsContainer);
    }
  }
})

const createMissionGrid = async (dataObj, docRef, user, db) => {

  resetGrid(); // Resets each tier's missions div container.  Basically this prevents the duplication when the onSnapshot event happens during either:  doc creation OR a change in the doc by checking a checkbox, etc.

  for (let [key, value] of Object.entries(dataObj)) {
    let id = value.id;
    // console.log(id, "checking id"); // For error checking
      if (id >= 10101 && id <=10107) {
        createMissionGridDOM(user, blackMousTier1Container, value);
      } else if (id >= 10201 && id <=10207) {
        createMissionGridDOM(user, blackMousTier2Container, value);
      } else if (id >= 10301 && id <=10307) {
        createMissionGridDOM(user, blackMousTier3Container, value);
      } else if (id >= 10401 && id <=10407) {
        createMissionGridDOM(user, blackMousTier4Container, value);
      } else if (id >= 10501 && id <=10507) {
        createMissionGridDOM(user, blackMousTier5Container, value);
      } else if (id >= 20101 && id <=20107) {
        createMissionGridDOM(user, whiteLotusTier1Container, value);
      } else if (id >= 20201 && id <=20207) {
        createMissionGridDOM(user, whiteLotusTier2Container, value);
      } else if (id >= 20301 && id <=20307) {
        createMissionGridDOM(user, whiteLotusTier3Container, value);
      } else if (id >= 20401 && id <=20407) {
        createMissionGridDOM(user, whiteLotusTier4Container, value);
      } else if (id >= 20501 && id <=20507) {
        createMissionGridDOM(user, whiteLotusTier5Container, value);
      } else if (id >= 30101 && id <=30107) {
        createMissionGridDOM(user, phalanxTier1Container, value);
      } else if (id >= 30201 && id <=30207) {
        createMissionGridDOM(user, phalanxTier2Container, value);
      } else if (id >= 30301 && id <=30307) {
        createMissionGridDOM(user, phalanxTier3Container, value);
      } else if (id >= 30401 && id <=30407) {
        createMissionGridDOM(user, phalanxTier4Container, value);
      } else if (id >= 30501 && id <=30507) {
        createMissionGridDOM(user, phalanxTier5Container, value);
      } else if (id >= 40101 && id <=40107) {
        createMissionGridDOM(user, crownTier1Container, value);
      } else if (id >= 40201 && id <=40207) {
        createMissionGridDOM(user, crownTier2Container, value);
      } else if (id >= 40301 && id <=40307) {
        createMissionGridDOM(user, crownTier3Container, value);
      } else if (id >= 40401 && id <=40407) {
        createMissionGridDOM(user, crownTier4Container, value);
      } else if (id >= 40501 && id <=40507) {
        createMissionGridDOM(user, crownTier5Container, value);
      } 
  } 

  // This adds an eventListener click to all mission titles.  Purpose is to show/hide mission details below each mission title.
  const arrayOfMissionTitles = document.getElementsByClassName('mission-title');
  for (let i = 0; i < arrayOfMissionTitles.length && i < 300; i++) {
    arrayOfMissionTitles[i].addEventListener('click', (e) => {
      // console.log(e.target, "Mission Title Clicked") // For Error Checking
      e.target.parentNode.nextElementSibling.classList.toggle('hide');
    })
  }

  const arrayOfTierHeaders = document.getElementsByClassName('tier-header');
  for (let i = 0; i < arrayOfTierHeaders.length && i < 100; i++) {
    arrayOfTierHeaders[i].addEventListener('click', (e) => {
      // console.log(e.target, 'tier header clicked'); // For Error Checking
      e.target.parentNode.nextElementSibling.classList.toggle('hide'); // Target == Clicked Title, then it goes up one parent, then to the "missions-container" div to toggle hide.
    })
  }

  if (user) {
    // This adds eventlistener and update Doc to all the checkboxes.
    const arrayOfMissionCheckboxes = document.getElementsByClassName('mission-progress');
    for (let i = 0; i < arrayOfMissionCheckboxes.length; i++) {
      arrayOfMissionCheckboxes[i].addEventListener('click', (e) => {
        // console.log(e.target, "Mission Checkbox Clicked") // For Error Checking
        // e.preventDefault();
        let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
        let checkId = e.target.dataset.id; // Grabs the event target's id property, makes it into a Number (integar) from a string.
        // console.log('checkbox listener working'); // For Error Checking
        // console.log(checked, checkId); // For Error Checking
        updateDoc(docRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    }
  }
}

// ----------------- END OF FIRST FUNCTION, START OF SECOND:

const createMissionGridDOM = async (user, tierContainer, objValue) => {
  // console.log(user, tierContainer, objValue);

  let title = objValue.title;
  let description = objValue.description;
  let id = objValue.id;
  let loggedOut = 'hide'; // This variable will enact class '.hide', which will display: none.

  
  let objective1Exists = objValue.objectives.objective1.exists;
  let objective2Exists = objValue.objectives.objective2.exists;
  let objective3Exists = objValue.objectives.objective3.exists;

  let obj2Exists = '';
  let obj3Exists = '';

  if (objective2Exists === false) { obj2Exists = 'hide' };
  if (objective3Exists === false) { obj3Exists = 'hide' };

  let objective1Text = objValue.objectives.objective1.objectiveText;
  let objective2Text = objValue.objectives.objective2.objectiveText;
  let objective3Text = objValue.objectives.objective3.objectiveText;

  let completeChecked = "";
  let obj1Checked = "";
  let obj2Checked = "";
  let obj3Checked = "";

  if (user) { // Put Variables For User Logged In:
    // These are logged-in variables:
    loggedOut = '';
    let complete = objValue.complete;

    // let unlocked = objValue.unlocked; // For Later.  Checks whether a mission is locked or unlocked.  This is from Faction Level and/or Previous Tier Story Mission Complete.

    // Objective(s) Variables:
    let objective1Status = objValue.objectives.objective1.complete;
    let objective2Status = objValue.objectives.objective2.complete;
    let objective3Status = objValue.objectives.objective3.complete;

    let objective1ProgressCurrent = objValue.objectives.objective1.progress.progressCurrent;
    let objective1ProgressTotal = objValue.objectives.objective1.progress.progressTotal;

    let objective2ProgressCurrent = objValue.objectives.objective2.progress.progressCurrent;
    let objective2ProgressTotal = objValue.objectives.objective2.progress.progressTotal;

    let objective3ProgressCurrent = objValue.objectives.objective3.progress.progressCurrent;
    let objective3ProgressTotal = objValue.objectives.objective3.progress.progressTotal;

    if (complete === true) { completeChecked = "checked"; } // Checks Whether Mission is complete or not.  If complete, checkbox is checked.  If not, checkbox is open.
    if (objective1Status === true) { obj1Checked = "checked"; }
    if (objective2Status === true) { obj2Checked = "checked"; }
    if (objective3Status === true) { obj3Checked = "checked"; }
  } 

  if (objective1Exists === true) { // If mission has objectives:

    tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" data-id="${id}" class="mission-progress ${loggedOut}" ${completeChecked}>
        </div>
        <div class='mission-details hide'>
          <div class='objectives-container'>
            <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->

            <div class='objective-container obj-1'>
              <input type='checkbox' class='objective-checkbox obj-1-checkbox ${loggedOut}' ${obj1Checked} />
              <div class='objective-progress-container ${loggedOut}'>
                <p>0 / 1</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective1Text}</p>
            </div>
      
            <div class='objective-container obj-2 ${obj2Exists}'>
              <input type='checkbox' class='objective-checkbox obj-2-checkbox ${loggedOut}' ${obj2Checked}/>
              <div class='objective-progress-container ${loggedOut}'>
                <p>0 / 2</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective2Text}</p>
            </div>
      
            <div class='objective-container obj-3 ${obj3Exists}'>
              <input type='checkbox' class='objective-checkbox obj-3-checkbox ${loggedOut}' ${obj3Checked}/>
              <div class='objective-progress-container ${loggedOut}'>
                <p>0 / 3</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective3Text}</p>
            </div>
          </div>

        <p class='mission-description'>
          ${description}
        </p>

        </div>
      </div>
    `)
  } else { // if mission doesn't have an objective yet, just print the mission title
    tierContainer.insertAdjacentHTML('beforeend', `
    <div class="mission-container">
      <div class="mission-header-container">
        <header class="mission-title">${title}</header>
        <input type="checkbox" name="" data-id="${id}" class="mission-progress ${loggedOut}" ${completeChecked}>
      </div>
      <div class='mission-details hide'>

      </div>
    </div>
  `)
  }
}

const resetGrid = async () => {
  // console.log('resetGrid triggered'); // For Error Checking

  blackMousTier1Container.innerHTML = '';
  blackMousTier2Container.innerHTML = '';
  blackMousTier3Container.innerHTML = '';
  blackMousTier4Container.innerHTML = '';
  blackMousTier5Container.innerHTML = '';

  whiteLotusTier1Container.innerHTML = '';
  whiteLotusTier2Container.innerHTML = '';
  whiteLotusTier3Container.innerHTML = '';
  whiteLotusTier4Container.innerHTML = '';
  whiteLotusTier5Container.innerHTML = '';

  phalanxTier1Container.innerHTML = '';
  phalanxTier2Container.innerHTML = '';
  phalanxTier3Container.innerHTML = '';
  phalanxTier4Container.innerHTML = '';
  phalanxTier5Container.innerHTML = '';

  crownTier1Container.innerHTML = '';
  crownTier2Container.innerHTML = '';
  crownTier3Container.innerHTML = '';
  crownTier4Container.innerHTML = '';
  crownTier5Container.innerHTML = '';

}
// console.log('End of dmz-missions.js triggered');