import { AuthErrorCodes } from "firebase/auth";

import { doc, getDoc, getDocs, onSnapshot, } from "firebase/firestore";
import { dmzMissionsS3 } from "./dmz-missions-s3";

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

export function createMissionGrid (missionsArr, tierContainer) {
  for (let i = 0; i < missionsArr.length; i++) {
    let title = missionsArr[i].title;
    let complete = missionsArr[i].complete;
    let checkboxId = missionsArr[i].missionId; // What I really want... is a way to 'map' this checkbox to it's sibling 'completed' true/false.

    if (complete === true) {
      tierContainer.insertAdjacentHTML('beforeend', `
        <div class="mission-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" id="${checkboxId}" class="mission-progress" checked>
        </div>`
    )} else {
      tierContainer.insertAdjacentHTML('beforeend', `
        <div class="mission-container">
          <header class="mission-title">${title}</header>
          <input type="checkbox" name="" id="${checkboxId}" class="mission-progress">
        </div>`
    )}
  }
}

export function createMissionGridLoggedOut (missionsArr, tierContainer) {
  for (let i = 0; i < missionsArr.length; i++) {
    let title = missionsArr[i].title;
    tierContainer.insertAdjacentHTML('beforeend', `
      <div class="mission-container">
        <header class="mission-title">${title}</header>
      </div>`
  )}
}


export function createMissionGridTEST (tierContainer, title) {
  tierContainer.insertAdjacentHTML('beforeend', `
  <div class="mission-container">
    <header class="mission-title">${title}</header>
  </div>`)
}





// export function createMissionGridLoggedOutTEST (obj) {
//   console.log('create mission grid logged out test activated');
  
//   console.log(obj.data());


// }










// Log-in Stuff:
// export const showLoginForm = () => {
//   authContainer.style.display = 'block';
//   dmzMissionsContainer.style.display = 'none';
// }

// export const showApp = () => {
//   authContainer.style.display = 'none';
//   dmzMissionsContainer.style.display = 'grid';
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

// export const showLoginState = async (user, state) => {
//   if (state === 'logged-in') {
//     let userId = user.uid;
//     profileLinkContainer.insertAdjacentHTML('afterbegin', `
//       <button type='button' id='btnSignOut'>Sign Out ${userId}</button>
//     `)
//     btnSignOut.addEventListener('click', logout);
//   } else if (state === 'logged-out') {
//     profileLinkContainer.insertAdjacentHTML('afterbegin', `
//       <button type='button' id='btnAuthLink'>Sign In/Sign Up</button>
//     `)
//     }
// }

// testing:
// export const showLoginState = async (user, state) => {
//   if (state === 'logged-in') {
//     console.log('login-state-triggered for logged in')
//     navSignedOut.display.style = 'none';
//     navSignedIn.display.style = 'block';
//   } else if (state === 'logged-out') {
//     console.log('login-state-triggered for logged out')

//     navSignedIn.display.style = 'none';
//     navSignedOut.display.style = 'block';
//   }
// }


// export function createAuthBox (container) {
//   // if... user NOT logged in... creates html for log-in box.

//   container.insertAdjacentHTML('afterbegin', 
//   `
//   <form id='formDMZLogIn'>
//     <label>Email:
//       <input type='email' placeholder='Email@Email.com' id='txtEmail'>
//     </label>

//     <label>Password:
//       <input type='password' placeholder='password' id='txtPassword'>
//     </label>

//     <div id='errorContainer'>
//       <p id='errorMessage'></p>
//     </div>
    
//     <button type='button' id='btnLogIn'>Log In</button>
//     <button type='button' id='btnSignUp'>Sign Up</button>
//     <button type='button' id='btnGoogleSignIn'>Sign In With Google</button>
//   </form>
//   `
//   )
//   // if... user LOGGED IN, puts .hidden class in authContainer div
// }

// Testing Purposes:  arrayOfMissions.  For Later.
// const arrayOfMissions = [
//   redactedTier1MissionsArray,
//   redactedTier2MissionsArray,
//   redactedTier3MissionsArray,
//   redactedTier4MissionsArray,
//   redactedTier5MissionsArray,
//   whiteLotusTier1MissionsArray,
//   whiteLotusTier2MissionsArray,
//   whiteLotusTier3MissionsArray,
//   whiteLotusTier4MissionsArray,
//   whiteLotusTier5MissionsArray,

//   legionTier1MissionsArray,
//   legionTier2MissionsArray,
//   legionTier3MissionsArray,
//   legionTier4MissionsArray,
//   legionTier5MissionsArray,

//   blackMousTier1MissionsArray,
//   blackMousTier2MissionsArray,
//   blackMousTier3MissionsArray,
//   blackMousTier4MissionsArray,
//   blackMousTier5MissionsArray,

//   crownTier1MissionsArray,
//   crownTier2MissionsArray,
//   crownTier3MissionsArray,
//   crownTier4MissionsArray,
//   crownTier5MissionsArray,
// ]

export const showDMZHeaderAuthStatus = async (user) => {
  if (user) {
    let email = user.email;
    // console.log('showDMZHeaderAuthStatus Triggered with USER SIGNED IN');
    // console.log(user);
    dmzPageHeader.insertAdjacentHTML('afterbegin', `
      <header class='dmz-header' id='dmzHeaderSignedIn'>Welcome Back ${email}.  Thank you for signing in.</header>
    `)
    // insert html to header welcoming a logged in user.
  } else {
    // console.log('showDMZHeaderAuthStatus Triggered with USER SIGNED OUT')
    dmzPageHeader.insertAdjacentHTML('afterbegin', `
      <header class='dmz-header' id='dmzHeaderSignedOut'>Thank you for visiting.  Please <a href='./auth.html'>Sign In or Sign Up</a> for full funcationality in tracking your progress.</header>
    `)
    // Insert HTML to header asking user to sign up for full functionality.  Importantly... Checkboxes don't appear with this one.
  }
}