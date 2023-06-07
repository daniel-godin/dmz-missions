import { AuthErrorCodes } from "firebase/auth";

import { doc, getDoc, getDocs, onSnapshot, updateDoc} from "firebase/firestore";
import { dmzMissionsS3 } from "./dmz-missions-s3";

import { loadNavigation, navContainer } from "./nav";

export const arrayOfMissionTitles = document.getElementsByClassName('mission-title');
export const arrayOfMissionCheckboxes = document.getElementsByClassName('mission-progress');

export const navSignedIn = document.getElementById('navSignedIn');
export const navSignedOut = document.getElementById('navSignedOut');

export const authContainer = document.getElementById('authContainer');
export const txtEmail = document.getElementById('txtEmail');
export const txtPassword = document.getElementById('txtPassword');
export const txtName = document.getElementById('txtName');

export const errorContainer = document.getElementById('errorContainer');
export const errorMessage = document.getElementById('errorMessage');

export const btnLogIn = document.getElementById('btnLogIn');
export const btnSignUp = document.getElementById('btnSignUp');
export const btnGoogleSignIn = document.getElementById('btnGoogleSignIn');

export const btnSignOut = document.getElementById('btnSignOut');
export const btnAuthLink = document.getElementById('btnAuthLink');

export const dmzPageHeader = document.getElementById('dmzPageHeader');

export const profileLinkContainer = document.getElementById('profileLinkContainer');

export const dmzMissionsContainer = document.getElementById('dmzMissionsContainer');

export const redactedTier1Container = document.getElementById('redactedTier1MissionsContainer');
export const redactedTier2Container = document.getElementById('redactedTier2MissionsContainer');
export const redactedTier3Container = document.getElementById('redactedTier3MissionsContainer');
export const redactedTier4Container = document.getElementById('redactedTier4MissionsContainer');
export const redactedTier5Container = document.getElementById('redactedTier5MissionsContainer');

export const whiteLotusTier1Container = document.getElementById('whiteLotusTier1MissionsContainer');
export const whiteLotusTier2Container = document.getElementById('whiteLotusTier2MissionsContainer');
export const whiteLotusTier3Container = document.getElementById('whiteLotusTier3MissionsContainer');
export const whiteLotusTier4Container = document.getElementById('whiteLotusTier4MissionsContainer');
export const whiteLotusTier5Container = document.getElementById('whiteLotusTier5MissionsContainer');

export const legionTier1Container = document.getElementById('legionTier1MissionsContainer');
export const legionTier2Container = document.getElementById('legionTier2MissionsContainer');
export const legionTier3Container = document.getElementById('legionTier3MissionsContainer');
export const legionTier4Container = document.getElementById('legionTier4MissionsContainer');
export const legionTier5Container = document.getElementById('legionTier5MissionsContainer');

export const blackMousTier1Container = document.getElementById('blackMousTier1MissionsContainer');
export const blackMousTier2Container = document.getElementById('blackMousTier2MissionsContainer');
export const blackMousTier3Container = document.getElementById('blackMousTier3MissionsContainer');
export const blackMousTier4Container = document.getElementById('blackMousTier4MissionsContainer');
export const blackMousTier5Container = document.getElementById('blackMousTier5MissionsContainer');

export const crownTier1Container = document.getElementById('crownTier1MissionsContainer');
export const crownTier2Container = document.getElementById('crownTier2MissionsContainer');
export const crownTier3Container = document.getElementById('crownTier3MissionsContainer');
export const crownTier4Container = document.getElementById('crownTier4MissionsContainer');
export const crownTier5Container = document.getElementById('crownTier5MissionsContainer');

export function loadPage(user) {
  loadNavigation();
  // showLoginState();
  if (user) {
    showDMZHeaderAuthStatus(user);
  } else {
    showDMZHeaderAuthStatus();
  }
}

// New version:  This loads from a JS object, not from the Firestore db.
export function fullCreateMissionGridLoggedOut (obj) { // THIS IS THE NOT-LOGGED IN VERSION.  THE CHECKBOXES ARE NOT CREATED.
  // This should load from the JS Object file, NOT database.  Should speed things up, and reduce doc reads.
  for (let [key, value] of Object.entries(obj)) {
    let title = value.title;
    let id = value.id;
      if (id >= 10101 && id <=10107) {
        createMissionGridLoggedOut(redactedTier1Container, title);
      } else if (id >= 10201 && id <=10207) {
        createMissionGridLoggedOut(redactedTier2Container, title);
      } else if (id >= 10301 && id <=10307) {
        createMissionGridLoggedOut(redactedTier3Container, title);
      } else if (id >= 10401 && id <=10407) {
        createMissionGridLoggedOut(redactedTier4Container, title);
      } else if (id >= 10501 && id <=10507) {
        createMissionGridLoggedOut(redactedTier5Container, title);
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
        createMissionGridLoggedOut(legionTier1Container, title);
      } else if (id >= 30201 && id <=30207) {
        createMissionGridLoggedOut(legionTier2Container, title);
      } else if (id >= 30301 && id <=30307) {
        createMissionGridLoggedOut(legionTier3Container, title);
      } else if (id >= 30401 && id <=30407) {
        createMissionGridLoggedOut(legionTier4Container, title);
      } else if (id >= 30501 && id <=30507) {
        createMissionGridLoggedOut(legionTier5Container, title);
      } else if (id >= 40101 && id <=40107) {
        createMissionGridLoggedOut(blackMousTier1Container, title);
      } else if (id >= 40201 && id <=40207) {
        createMissionGridLoggedOut(blackMousTier2Container, title);
      } else if (id >= 40301 && id <=40307) {
        createMissionGridLoggedOut(blackMousTier3Container, title);
      } else if (id >= 40401 && id <=40407) {
        createMissionGridLoggedOut(blackMousTier4Container, title);
      } else if (id >= 40501 && id <=40507) {
        createMissionGridLoggedOut(blackMousTier5Container, title);
      } else if (id >= 50101 && id <=50107) {
        createMissionGridLoggedOut(crownTier1Container, title);
      } else if (id >= 50201 && id <=50207) {
        createMissionGridLoggedOut(crownTier2Container, title);
      } else if (id >= 50301 && id <=50307) {
        createMissionGridLoggedOut(crownTier3Container, title);
      } else if (id >= 50401 && id <=50407) {
        createMissionGridLoggedOut(crownTier4Container, title);
      } else if (id >= 50501 && id <=50507) {
        createMissionGridLoggedOut(crownTier5Container, title);
      } 
  }
}

export function fullCreateMissionGridLoggedIn (docRef) { // THIS IS THE LOGGED IN VERSION.  THE CHECKBOXES ARE CREATED.
  getDoc(docRef)
  .then((doc) => {
    let obj = doc.data();
    for (let [key, value] of Object.entries(obj)) {
      let title = value.title;
      let id = value.id;
      let complete = value.complete;
        if (id >= 10101 && id <=10107) {
          createMissionGridLoggedIn(redactedTier1Container, value);
        } else if (id >= 10201 && id <=10207) {
          createMissionGridLoggedIn(redactedTier2Container, value);
        } else if (id >= 10301 && id <=10307) {
          createMissionGridLoggedIn(redactedTier3Container, value);
        } else if (id >= 10401 && id <=10407) {
          createMissionGridLoggedIn(redactedTier4Container, value);
        } else if (id >= 10501 && id <=10507) {
          createMissionGridLoggedIn(redactedTier5Container, value);
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
          createMissionGridLoggedIn(legionTier1Container, value);
        } else if (id >= 30201 && id <=30207) {
          createMissionGridLoggedIn(legionTier2Container, value);
        } else if (id >= 30301 && id <=30307) {
          createMissionGridLoggedIn(legionTier3Container, value);
        } else if (id >= 30401 && id <=30407) {
          createMissionGridLoggedIn(legionTier4Container, value);
        } else if (id >= 30501 && id <=30507) {
          createMissionGridLoggedIn(legionTier5Container, value);
        } else if (id >= 40101 && id <=40107) {
          createMissionGridLoggedIn(blackMousTier1Container, value);
        } else if (id >= 40201 && id <=40207) {
          createMissionGridLoggedIn(blackMousTier2Container, value);
        } else if (id >= 40301 && id <=40307) {
          createMissionGridLoggedIn(blackMousTier3Container, value);
        } else if (id >= 40401 && id <=40407) {
          createMissionGridLoggedIn(blackMousTier4Container, value);
        } else if (id >= 40501 && id <=40507) {
          createMissionGridLoggedIn(blackMousTier5Container, value);
        } else if (id >= 50101 && id <=50107) {
          createMissionGridLoggedIn(crownTier1Container, value);
        } else if (id >= 50201 && id <=50207) {
          createMissionGridLoggedIn(crownTier2Container, value);
        } else if (id >= 50301 && id <=50307) {
          createMissionGridLoggedIn(crownTier3Container, value);
        } else if (id >= 50401 && id <=50407) {
          createMissionGridLoggedIn(crownTier4Container, value);
        } else if (id >= 50501 && id <=50507) {
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
        console.log('checkbox listener working');
        // const docRefS3 = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'); // Document Reference to a users Season 3 dmz Missions Doc
        updateDoc(docRef, {
          [checkId+".complete"] : checked,
        });
    })}
  })
}

export function createMissionGridLoggedOut (tierContainer, title) {
  tierContainer.insertAdjacentHTML('beforeend', `
  <div class="mission-container">
    <header class="mission-title">${title}</header>
  </div>`)
}

// working old version:
// export function createMissionGridLoggedIn (tierContainer, title, id, complete) {
//   if (complete) {
//     tierContainer.insertAdjacentHTML('beforeend', `
//     <div class="mission-container">
//       <header class="mission-title">${title}</header>
//       <input type="checkbox" name="" id="${id}" class="mission-progress" checked>
//     </div>`)
//   } else {
//     tierContainer.insertAdjacentHTML('beforeend', `
//     <div class="mission-container">
//       <header class="mission-title">${title}</header>
//       <input type="checkbox" name="" id="${id}" class="mission-progress">
//     </div>`)
//   }
// }

// new version in which the values get passed
export function createMissionGridLoggedIn (tierContainer, value) {
  let title = value.title;
  let id = value.id;
  let complete = value.complete;
  let unlocked = value.unlocked;

  // console.log(title, id, complete, unlocked);

  if (complete) {
    tierContainer.insertAdjacentHTML('beforeend', `
    <div class="mission-container">
      <header class="mission-title">${title}</header>
      <input type="checkbox" name="" id="${id}" class="mission-progress" checked>
    </div>`)
  } else {
    tierContainer.insertAdjacentHTML('beforeend', `
    <div class="mission-container">
      <header class="mission-title">${title}</header>
      <input type="checkbox" name="" id="${id}" class="mission-progress">
    </div>`)
  }
}

// export const showLoginState = async (user, state) => {
//   if (state === 'logged-in') {
//     // console.log('login-state-triggered for logged in')
//     navSignedOut.style.display = 'none';
//     navSignedIn.style.display = 'block';
//   } else if (state === 'logged-out') {
//     // console.log('login-state-triggered for logged out')
//     navSignedIn.style.display = 'none';
//     navSignedOut.style.display = 'block';
//   }
// }

export const hideLoginError = () => {
  errorContainer.style.display = 'none';
  errorMessage.innerText = '';
}

export const showLoginError = (error) => {
  errorContainer.style.display = 'block';
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    errorMessage.innerText = 'Wrong Password.  Try Again.';
  } else {
    errorMessage.insertAdjacentHTML('afterbegin', `Error: ${error.message}`)
  }
}

export const showDMZHeaderAuthStatus = async (user) => {
  if (user && dmzPageHeader) {
    let email = user.email;
    // console.log('showDMZHeaderAuthStatus Triggered with USER SIGNED IN');
    // console.log(user);
    dmzPageHeader.insertAdjacentHTML('afterbegin', `
      <header class='dmz-header' id='dmzHeaderSignedIn'>Welcome Back ${email}.  Thank you for signing in.</header>
    `)
    // insert html to header welcoming a logged in user.
  } else if (dmzPageHeader) {
    // console.log('showDMZHeaderAuthStatus Triggered with USER SIGNED OUT')
    dmzPageHeader.insertAdjacentHTML('afterbegin', `
      <header class='dmz-header' id='dmzHeaderSignedOut'>Thank you for visiting.  Please <a href='./auth.html'>Sign In or Sign Up</a> for full funcationality in tracking your progress.</header>
    `)
    // Insert HTML to header asking user to sign up for full functionality.  Importantly... Checkboxes don't appear with this one.
  } else {
    // Does Nothing because user is not in the dmz-missions.html page.
    // console.log('dmz show header do nothing'); // Testing purposes.
  }
}