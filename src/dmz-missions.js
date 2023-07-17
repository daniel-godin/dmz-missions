import { doc, getDoc, getDocs, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
import { dataDmzStandardMissionsS4 } from "./data/data-dmz-standard-missions-s4";
import { dataDmzFobS4 } from "./data/data-dmz-fob-s4";

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

const crownTier1Container = document.getElementById('crownTier1MissionsContainer');
const crownTier2Container = document.getElementById('crownTier2MissionsContainer');
const crownTier3Container = document.getElementById('crownTier3MissionsContainer');
const crownTier4Container = document.getElementById('crownTier4MissionsContainer');
const crownTier5Container = document.getElementById('crownTier5MissionsContainer');

const phalanxTier1Container = document.getElementById('phalanxTier1MissionsContainer');
const phalanxTier2Container = document.getElementById('phalanxTier2MissionsContainer');
const phalanxTier3Container = document.getElementById('phalanxTier3MissionsContainer');
const phalanxTier4Container = document.getElementById('phalanxTier4MissionsContainer');
const phalanxTier5Container = document.getElementById('phalanxTier5MissionsContainer');


// console.log('Beginning of dmz-missions.js triggered.  After variables'); // For Testing Purposes

// New Logged Out Mission Grid Creation: 2023.07.11
export const fullCreateMissionGridLoggedOut = async (obj) => { // THIS IS THE NOT-LOGGED IN VERSION.  THE CHECKBOXES ARE NOT CREATED.
  // This should load from the JS Object file, NOT database.  Should speed things up, and reduce doc reads.
  for (let [key, value] of Object.entries(obj)) {
    let title = value.title;
    let id = value.id;
      if (id >= 10101 && id <=10107) {
        createMissionGridDOM("logged-out", blackMousTier1Container, value);
      } else if (id >= 10201 && id <=10207) {
        createMissionGridDOM("logged-out", blackMousTier2Container, value);
      } else if (id >= 10301 && id <=10307) {
        createMissionGridDOM("logged-out", blackMousTier3Container, value);
      } else if (id >= 10401 && id <=10407) {
        createMissionGridDOM("logged-out", blackMousTier4Container, value);
      } else if (id >= 10501 && id <=10507) {
        createMissionGridDOM("logged-out", blackMousTier5Container, value);
      } else if (id >= 20101 && id <=20107) {
        createMissionGridDOM("logged-out", whiteLotusTier1Container, value);
      } else if (id >= 20201 && id <=20207) {
        createMissionGridDOM("logged-out", whiteLotusTier2Container, value);
      } else if (id >= 20301 && id <=20307) {
        createMissionGridDOM("logged-out", whiteLotusTier3Container, value);
      } else if (id >= 20401 && id <=20407) {
        createMissionGridDOM("logged-out", whiteLotusTier4Container, value);
      } else if (id >= 20501 && id <=20507) {
        createMissionGridDOM("logged-out", whiteLotusTier5Container, value);
      } else if (id >= 30101 && id <=30107) {
        createMissionGridDOM("logged-out", phalanxTier1Container, value);
      } else if (id >= 30201 && id <=30207) {
        createMissionGridDOM("logged-out", phalanxTier2Container, value);
      } else if (id >= 30301 && id <=30307) {
        createMissionGridDOM("logged-out", phalanxTier3Container, value);
      } else if (id >= 30401 && id <=30407) {
        createMissionGridDOM("logged-out", phalanxTier4Container, value);
      } else if (id >= 30501 && id <=30507) {
        createMissionGridDOM("logged-out", phalanxTier5Container, value);
      } else if (id >= 40101 && id <=40107) {
        createMissionGridDOM("logged-out", crownTier1Container, value);
      } else if (id >= 40201 && id <=40207) {
        createMissionGridDOM("logged-out", crownTier2Container, value);
      } else if (id >= 40301 && id <=40307) {
        createMissionGridDOM("logged-out", crownTier3Container, value);
      } else if (id >= 40401 && id <=40407) {
        createMissionGridDOM("logged-out", crownTier4Container, value);
      } else if (id >= 40501 && id <=40507) {
        createMissionGridDOM("logged-out", crownTier5Container, value);
      } 
  } 

  // This adds an eventListener click to all mission titles.  Purpose is to show/hide mission details below each mission title.
  const arrayOfMissionTitles = document.getElementsByClassName('mission-title');
  for (let i = 0; i < arrayOfMissionTitles.length && i < 300; i++) {
    arrayOfMissionTitles[i].addEventListener('click', (e) => {
      e.target.parentNode.nextElementSibling.classList.toggle('hide');

      //  e.target.parentNode.classList.toggle('hide');
      //  e.target.parentNode.nextElementSibling.classList.toggle('hide');
    })
  }
}

// Function to create the full mission grid if the user is logged in.
export const fullCreateMissionGridLoggedIn = async (userMissionsGridDoc, userMissionsGridDocRef, database, uid) => { // THIS IS THE LOGGED IN VERSION.  THE CHECKBOXES ARE CREATED.
  if (userMissionsGridDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.
    console.log('user mission grid doc exists');
    let obj = userMissionsGridDoc.data(); // converts firebase doc into an object which I can iterate on.
    for (let [key, value] of Object.entries(obj)) {
      let title = value.title;
      let id = value.id;
      let complete = value.complete;
        if (id >= 10101 && id <=10107) {
          createMissionGridDOM("logged-in", blackMousTier1Container, value);
        } else if (id >= 10201 && id <=10207) {
          createMissionGridDOM("logged-in", blackMousTier2Container, value);
        } else if (id >= 10301 && id <=10307) {
          createMissionGridDOM("logged-in", blackMousTier3Container, value);
        } else if (id >= 10401 && id <=10407) {
          createMissionGridDOM("logged-in", blackMousTier4Container, value);
        } else if (id >= 10501 && id <=10507) {
          createMissionGridDOM("logged-in", blackMousTier5Container, value);
        } else if (id >= 20101 && id <=20107) {
          createMissionGridDOM("logged-in", whiteLotusTier1Container, value);
        } else if (id >= 20201 && id <=20207) {
          createMissionGridDOM("logged-in", whiteLotusTier2Container, value);
        } else if (id >= 20301 && id <=20307) {
          createMissionGridDOM("logged-in", whiteLotusTier3Container, value);
        } else if (id >= 20401 && id <=20407) {
          createMissionGridDOM("logged-in", whiteLotusTier4Container, value);
        } else if (id >= 20501 && id <=20507) {
          createMissionGridDOM("logged-in", whiteLotusTier5Container, value);
        } else if (id >= 30101 && id <=30107) {
          createMissionGridDOM("logged-in", phalanxTier1Container, value);
        } else if (id >= 30201 && id <=30207) {
          createMissionGridDOM("logged-in", phalanxTier2Container, value);
        } else if (id >= 30301 && id <=30307) {
          createMissionGridDOM("logged-in", phalanxTier3Container, value);
        } else if (id >= 30401 && id <=30407) {
          createMissionGridDOM("logged-in", phalanxTier4Container, value);
        } else if (id >= 30501 && id <=30507) {
          createMissionGridDOM("logged-in", phalanxTier5Container, value);
        } else if (id >= 40101 && id <=40107) {
          createMissionGridDOM("logged-in", crownTier1Container, value);
        } else if (id >= 40201 && id <=40207) {
          createMissionGridDOM("logged-in", crownTier2Container, value);
        } else if (id >= 40301 && id <=40307) {
          createMissionGridDOM("logged-in", crownTier3Container, value);
        } else if (id >= 40401 && id <=40407) {
          createMissionGridDOM("logged-in", crownTier4Container, value);
        } else if (id >= 40501 && id <=40507) {
          createMissionGridDOM("logged-in", crownTier5Container, value);
        } 
    } 

    // This adds eventlistener and update Doc to all the checkboxes.
    const arrayOfMissionCheckboxes = document.getElementsByClassName('mission-progress');
    for (let i = 0; i < arrayOfMissionCheckboxes.length; i++) {
      arrayOfMissionCheckboxes[i].addEventListener('click', (e) => {
        // e.preventDefault();
        let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
        let checkId = Number(e.target.id); // Grabs the event target's id property, makes it into a Number (integar) from a string.
        // console.log('checkbox listener working');
        updateDoc(userMissionsGridDocRef, {
          [checkId+".complete"] : checked, // checkId variable finds the object, then +".complete" finds the key of complete.  Then : checked gives the boolean value of true or false, depending on variable checked.
        });
      })
    }  

  } else { // If the user's mission grid doc doe snot exists, it creates it.  This entire function should only trigger if the user is detected.  If user is not detected, it should trigger the non-logged in version, but later... I'd like to combine this all.
    console.log('Users mission grid doc does not exist.  Creating now');
    await setDoc(doc(database, 'users', uid, 'mw2-trackers', 'DMZStandardMissionsS4'), dataDmzStandardMissionsS4);
  }
}

const createMissionGridDOM = async (status, tierContainer, objValue) => {
  // Takes in:
  // tierContainer, which is the place to put the created HTML
  // objValue, which takes in each objects value from either hard coded JS object, or the user's mission grid doc.
  // status, takes in whether a user is logged in or not.  
  // If logged in... creates the full grid with users mission doc information
  // if logged out... creates the full grid with hard coded js object.

  // console.table(status, tierContainer, objValue); // For Testing Purposes

  if (status === "logged-out") {
    // if (objValue.title === undefined || objValue.description === undefined || objValue.objectives.objective1.exists === undefined) { console.log(`Error:  One of these is undefined: Title: ${objValue.title}, Description: ${objValue.description}, or Objectives.objective1.exists(true/false): ${objValue.objectives.objective1.exists}`) } // Catching undefined things before they become a problem.
      
    // Make the DOM
    let title = objValue.title;
    let description = objValue.description;
    
    let objective1Exists = objValue.objectives.objective1.exists;
    let objective2Exists = objValue.objectives.objective2.exists;
    let objective3Exists = objValue.objectives.objective3.exists;

    let objective1Text = objValue.objectives.objective1.objectiveText;
    let objective2Text = objValue.objectives.objective2.objectiveText;
    let objective3Text = objValue.objectives.objective3.objectiveText;


    if (objective1Exists === true && objective2Exists === true && objective3Exists === true) { // If mission has 3 objects:
      tierContainer.insertAdjacentHTML('beforeend', `
        <div class="mission-container">
          <div class="mission-header-container">
            <header class="mission-title">${title}</header>
          </div>
          <div class='mission-details hide'>
            <div class='objectives-container'>
              <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
      
              <div class='objective-container obj-1'>
                <p class='objective-text'>${objective1Text}</p>
              </div>
        
              <div class='objective-container obj-2'>
                <p class='objective-text'>${objective2Text}</p>
              </div>
        
              <div class='objective-container obj-3'>
                <p class='objective-text'>${objective3Text}</p>
              </div>
            </div>
      
          <p class='mission-description'>
            ${description}
          </p>
      
          </div>
        </div>
      `)
    } else if (objective1Exists === true && objective2Exists === true) { // if mission has 2 objectives:
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
        </div>
        <div class='mission-details hide'>
          <div class='objectives-container'>
            <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
    
            <div class='objective-container obj-1'>
              <p class='objective-text'>${objective1Text}</p>
            </div>
      
            <div class='objective-container obj-2'>
              <p class='objective-text'>${objective2Text}</p>
            </div>
          </div>
    
        <p class='mission-description'>
          ${description}
        </p>
    
        </div>
      </div>
    `)
    } else if (objective1Exists === true) { // if mission has 1 objective
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
        </div>
        <div class='mission-details hide'>
          <div class='objectives-container'>
            <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
    
            <div class='objective-container obj-1'>
              <p class='objective-text'>${objective1Text}</p>
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
        </div>
        <div class='mission-details hide'>
  
        </div>
      </div>
    `)
    }
  } 
  else if (status === "logged-in") { // Logged-in version of creating the Mission DOM
    // These are the same variables as logged-out version:
    let title = objValue.title;
    let description = objValue.description;

    // These are logged-in variables:
    let id = objValue.id;
    let complete = objValue.complete;

    // let unlocked = objValue.unlocked; // For Later.  Checks whether a mission is locked or unlocked.  This is from Faction Level and/or Previous Tier Story Mission Complete.

    // Objective(s) Variables:
    let objective1Status = objValue.objectives.objective1.complete;
    let objective2Status = objValue.objectives.objective2.complete;
    let objective3Status = objValue.objectives.objective3.complete;

    let completeChecked = "";
    let obj1Checked = " ";
    let obj2Checked = " ";
    let obj3Checked = " ";
  
    let objective1ProgressCurrent = objValue.objectives.objective1.progress.progressCurrent;
    let objective1ProgressTotal = objValue.objectives.objective1.progress.progressTotal;

    let objective2ProgressCurrent = objValue.objectives.objective2.progress.progressCurrent;
    let objective2ProgressTotal = objValue.objectives.objective2.progress.progressTotal;

    let objective3ProgressCurrent = objValue.objectives.objective3.progress.progressCurrent;
    let objective3ProgressTotal = objValue.objectives.objective3.progress.progressTotal;

       


    if (objective1Exists === true && objective2Exists === true && objective3Exists === true) { // If mission has 3 objects:
      if (complete === true) { completeChecked = "checked"; } // Checks Whether Mission is complete or not.  If complete, checkbox is checked.  If not, checkbox is open.
      if (objective1Status === true) { obj1Checked = "checked"; }
      if (objective2Status === true) { obj2Checked = "checked"; }
      if (objective3Status === true) { obj3Checked = "checked"; }

      tierContainer.insertAdjacentHTML('beforeend', `
        <div class="mission-container">
          <div class="mission-header-container">
            <header class="mission-title">${title}</header>
            <input type="checkbox" name="" id="${id}" class="mission-progress" ${completeChecked}>
          </div>
          <div class='mission-details hide'>
            <div class='objectives-container'>
              <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
      
              <div class='objective-container obj-1'>
                <input type='checkbox' class='objective-checkbox obj-1-checkbox' ${obj1Checked} />
                <div class='objective-progress-container'>
                  <p>0 / 1</p> <!-- Will need to fix this up later. -->
                </div>
                <p class='objective-text'>${objective1Text}</p>
              </div>
        
              <div class='objective-container obj-2'>
                <input type='checkbox' class='objective-checkbox obj-2-checkbox' ${obj2Checked}/>
                <div class='objective-progress-container'>
                  <p>0 / 2</p> <!-- Will need to fix this up later. -->
                </div>
                <p class='objective-text'>${objective2Text}</p>
              </div>
        
              <div class='objective-container obj-3'>
                <input type='checkbox' class='objective-checkbox obj-3-checkbox' ${obj3Checked}/>
                <div class='objective-progress-container'>
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
    } else if (objective1Exists === true && objective2Exists === true) { // if mission has 2 objectives:
      if (complete === true) { completeChecked = "checked"; } // Checks Whether Mission is complete or not.  If complete, checkbox is checked.  If not, checkbox is open.
      if (objective1Status === true) { obj1Checked = "checked"; }
      if (objective2Status === true) { obj2Checked = "checked"; }
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" id="${id}" class="mission-progress" ${completeChecked}>
        </div>
        <div class='mission-details hide'>
          <div class='objectives-container'>
            <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
    
            <div class='objective-container obj-1'>
              <input type='checkbox' class='objective-checkbox obj-1-checkbox' ${obj1Checked} />
              <div class='objective-progress-container'>
                <p>0 / 1</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective1Text}</p>
            </div>
      
            <div class='objective-container obj-2'>
              <input type='checkbox' class='objective-checkbox obj-2-checkbox' ${obj2Checked}/>
              <div class='objective-progress-container'>
                <p>0 / 2</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective2Text}</p>
            </div>
          </div>
    
        <p class='mission-description'>
          ${description}
        </p>
    
        </div>
      </div>
    `)
    } else if (objective1Exists === true) { // if mission has 1 objective
      if (complete === true) { completeChecked = "checked"; } // Checks Whether Mission is complete or not.  If complete, checkbox is checked.  If not, checkbox is open.
      if (objective1Status === true) { obj1Checked = "checked"; }
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" id="${id}" class="mission-progress" ${completeChecked}>
        </div>
        <div class='mission-details hide'>
          <div class='objectives-container'>
            <!-- I will need to dynamically create each of these objective containers.  If objects 2 and 3 don't exist for the mission, don't create it in the DOM. -->
    
            <div class='objective-container obj-1'>
              <input type='checkbox' class='objective-checkbox obj-1-checkbox' ${obj1Checked} />
              <div class='objective-progress-container'>
                <p>0 / 1</p> <!-- Will need to fix this up later. -->
              </div>
              <p class='objective-text'>${objective1Text}</p>
            </div>
          </div>
    
        <p class='mission-description'>
          ${description}
        </p>
    
        </div>
      </div>
    `)

    } else { // if mission doesn't have an objective yet, just print the mission title
      if (complete === true) { completeChecked = "checked"; } // Checks Whether Mission is complete or not.  If complete, checkbox is checked.  If not, checkbox is open.
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <div class="mission-header-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" id="${id}" class="mission-progress" ${completeChecked}>
        </div>
        <div class='mission-details hide'>
  
        </div>
      </div>
    `)
    }
  
      
  
  
  } else { // If neither logged-in nor logged-out are send, this is an error catch.
    console.log('error, createMissionGrid not working properly.')
  }
}

// console.log('End of dmz-missions.js triggered');

// TESTING:

// export const createMissionGrid = async () => {
//   // Goal:  First, figure out if user is logged in or logged out.
//   // 2:  If user logged out... use createMissionGridDOM with logged-out parameter to create the mission grid DOM.
//   // 3:  if user logged in... use createMissionGridDOM with logged-in parameter to create the mission grid DOM.

//   // Basically, I want to combine BOTH logged in and logged out functions into one easy function.

//   // Project for later.  Need to make progress on other things for now.








// }

