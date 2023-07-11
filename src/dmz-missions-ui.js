import { AuthErrorCodes } from "firebase/auth";

import { doc, getDoc, getDocs, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
import { dataDmzStandardMissionsS4 } from "./data/data-dmz-standard-missions-s4";
import { dataDmzFobS4 } from "./data/data-dmz-fob-s4";

import { loadNavigation, navContainer } from "./nav";

export const arrayOfMissionTitles = document.getElementsByClassName('mission-title');
export const arrayOfMissionCheckboxes = document.getElementsByClassName('mission-progress');

export const authContainer = document.getElementById('authContainer');
export const txtEmail = document.getElementById('txtEmail');
export const txtPassword = document.getElementById('txtPassword');
export const txtName = document.getElementById('txtName');

export const errorContainer = document.getElementById('errorContainer');
export const errorMessage = document.getElementById('errorMessage');

export const btnLogIn = document.getElementById('btnLogIn');
export const btnSignUp = document.getElementById('btnSignUp');
export const btnHandleGoogle = document.getElementById('btnHandleGoogle');

export const btnAuthLink = document.getElementById('btnAuthLink');

export const dmzPageHeader = document.getElementById('dmzPageHeader');

export const profileLinkContainer = document.getElementById('profileLinkContainer');

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


// console.log('Beginning of dmz-missions-ui triggered.  After variables'); // For Testing Purposes

// New Logged Out Mission Grid Creation: 2023.07.11
export const fullCreateMissionGridLoggedOut = async (obj) => { // THIS IS THE NOT-LOGGED IN VERSION.  THE CHECKBOXES ARE NOT CREATED.
  // This should load from the JS Object file, NOT database.  Should speed things up, and reduce doc reads.
  for (let [key, value] of Object.entries(obj)) {
    let title = value.title;
    let id = value.id;
      if (id >= 10101 && id <=10107) {
        createMissionGridLoggedOut(blackMousTier1Container, title);
      } else if (id >= 10201 && id <=10207) {
        createMissionGridLoggedOut(blackMousTier2Container, title);
      } else if (id >= 10301 && id <=10307) {
        createMissionGridLoggedOut(blackMousTier3Container, title);
      } else if (id >= 10401 && id <=10407) {
        createMissionGridLoggedOut(blackMousTier4Container, title);
      } else if (id >= 10501 && id <=10507) {
        createMissionGridLoggedOut(blackMousTier5Container, title);
      } else if (id >= 20101 && id <=20107) {
        createMissionGridLoggedOut(whiteLotusTier1Container, title);
      } else if (id >= 20201 && id <=20207) {
        createMissionGridLoggedOut(whiteLotusTier2Container, title);
      } else if (id >= 20301 && id <=20307) {
        createMissionGridLoggedOut(whiteLotusTier3Container, title);
      } else if (id >= 20401 && id <=20407) {
        createMissionGridLoggedOut(whiteLotusTier4Container, title);
      } else if (id >= 20501 && id <=20507) {
        createMissionGridLoggedOut(whiteLotusTier5Container, title);
      } else if (id >= 30101 && id <=30107) {
        createMissionGridLoggedOut(phalanxTier1Container, title);
      } else if (id >= 30201 && id <=30207) {
        createMissionGridLoggedOut(phalanxTier2Container, title);
      } else if (id >= 30301 && id <=30307) {
        createMissionGridLoggedOut(phalanxTier3Container, title);
      } else if (id >= 30401 && id <=30407) {
        createMissionGridLoggedOut(phalanxTier4Container, title);
      } else if (id >= 30501 && id <=30507) {
        createMissionGridLoggedOut(phalanxTier5Container, title);
      } else if (id >= 40101 && id <=40107) {
        createMissionGridLoggedOut(crownTier1Container, title);
      } else if (id >= 40201 && id <=40207) {
        createMissionGridLoggedOut(crownTier2Container, title);
      } else if (id >= 40301 && id <=40307) {
        createMissionGridLoggedOut(crownTier3Container, title);
      } else if (id >= 40401 && id <=40407) {
        createMissionGridLoggedOut(crownTier4Container, title);
      } else if (id >= 40501 && id <=40507) {
        createMissionGridLoggedOut(crownTier5Container, title);
      } 
  } 
}

// New Version:  Testing:
export const fullCreateMissionGridLoggedIn = async (userMissionsGridDoc, userMissionsGridDocRef, database, uid) => { // THIS IS THE LOGGED IN VERSION.  THE CHECKBOXES ARE CREATED.
  if (userMissionsGridDoc.exists()) { // Checks to see if the Missions To-Do Doc exists.  If it does not, it creates it, if it does, it does nothing.
    console.log('user mission grid doc exists');
    let obj = userMissionsGridDoc.data(); // converts firebase doc into an object which I can iterate on.
    for (let [key, value] of Object.entries(obj)) {
      let title = value.title;
      let id = value.id;
      let complete = value.complete;
        if (id >= 10101 && id <=10107) {
          createMissionGridLoggedIn(blackMousTier1Container, value);
        } else if (id >= 10201 && id <=10207) {
          createMissionGridLoggedIn(blackMousTier2Container, value);
        } else if (id >= 10301 && id <=10307) {
          createMissionGridLoggedIn(blackMousTier3Container, value);
        } else if (id >= 10401 && id <=10407) {
          createMissionGridLoggedIn(blackMousTier4Container, value);
        } else if (id >= 10501 && id <=10507) {
          createMissionGridLoggedIn(blackMousTier5Container, value);
        } else if (id >= 20101 && id <=20107) {
          createMissionGridLoggedIn(whiteLotusTier1Container, value);
        } else if (id >= 20201 && id <=20207) {
          createMissionGridLoggedIn(whiteLotusTier2Container, value);
        } else if (id >= 20301 && id <=20307) {
          createMissionGridLoggedIn(whiteLotusTier3Container, value);
        } else if (id >= 20401 && id <=20407) {
          createMissionGridLoggedIn(whiteLotusTier4Container, value);
        } else if (id >= 20501 && id <=20507) {
          createMissionGridLoggedIn(whiteLotusTier5Container, value);
        } else if (id >= 30101 && id <=30107) {
          createMissionGridLoggedIn(phalanxTier1Container, value);
        } else if (id >= 30201 && id <=30207) {
          createMissionGridLoggedIn(phalanxTier2Container, value);
        } else if (id >= 30301 && id <=30307) {
          createMissionGridLoggedIn(phalanxTier3Container, value);
        } else if (id >= 30401 && id <=30407) {
          createMissionGridLoggedIn(phalanxTier4Container, value);
        } else if (id >= 30501 && id <=30507) {
          createMissionGridLoggedIn(phalanxTier5Container, value);
        } else if (id >= 40101 && id <=40107) {
          createMissionGridLoggedIn(crownTier1Container, value);
        } else if (id >= 40201 && id <=40207) {
          createMissionGridLoggedIn(crownTier2Container, value);
        } else if (id >= 40301 && id <=40307) {
          createMissionGridLoggedIn(crownTier3Container, value);
        } else if (id >= 40401 && id <=40407) {
          createMissionGridLoggedIn(crownTier4Container, value);
        } else if (id >= 40501 && id <=40507) {
          createMissionGridLoggedIn(crownTier5Container, value);
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

export function createMissionGridLoggedOut (tierContainer, title) {
  tierContainer.insertAdjacentHTML('beforeend', `
  <div class="mission-container">
    <header class="mission-title">${title}</header>
  </div>`)
}

// new version in which the values get passed
export function createMissionGridLoggedIn (tierContainer, value) {
  let title = value.title;
  let id = value.id;
  let complete = value.complete;
  let unlocked = value.unlocked;

  // console.log(title, id, complete, unlocked);

  if (complete) {
    if (unlocked === true) {
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <header class="mission-title">${title}</header>
        <input type="checkbox" name="" id="${id}" class="mission-progress" checked>
      </div>`)
    } else if (unlocked === false) {
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <header class="mission-title mission-locked">${title}</header>
        <input type="checkbox" name="" id="${id}" class="mission-progress mission-locked-checkbox" checked>
      </div>`)
    }
  } else {
    if (unlocked === true) {
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <header class="mission-title">${title}</header>
        <input type="checkbox" name="" id="${id}" class="mission-progress">
      </div>`)
    } else if (unlocked === false) {
      tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <header class="mission-title mission-locked">${title}</header>
        <input type="checkbox" name="" id="${id}" class="mission-progress mission-locked-checkbox">
      </div>`)
    }
  }
}

export const logInRequiredFunction = async () => {
  // const logInRequiredContainer = document.querySelector('logInRequiredContainer')
  const logInRequiredContainer = document.getElementById('loggedInConfirmContainer');
  // const contentContainer = document.getElementById('contentContainer');

  const contentContainer = document.getElementsByClassName('main-content-container');

  logInRequiredContainer.style.display = 'flex';
  contentContainer[0].style.display = 'none';

  logInRequiredContainer.insertAdjacentHTML('afterbegin', `
    <h2>This page requires an account to work correctly.  
    Please <a href='./auth.html'>Log In</a> or <a href='./sign-up.html'>Sign Up</a>.</h2>
  `)

}

// console.log('End of dmz-missions-ui triggered');