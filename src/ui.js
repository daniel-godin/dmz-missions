import { auth, } from "./firebase";
import { onAuthStateChanged, } from "firebase/auth";
import { createSignOutButtonFunction } from "./auth";
// import { menu.svg } from "./resources"

export const navContainer = document.getElementById('navContainer');
export const profileLinkContainer = document.getElementById('profileLinkContainer');
const footerContainer = document.getElementById('footerContainer');

// Variables That Change:
const lastUpdated = "(2023.07.22)";
const currentWebAppVersion = "version: 0.1" + " " + lastUpdated;

// console.log('Error Checking:  Beginning of UI.js File');

onAuthStateChanged(auth, user => {
  if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
    const userID = user.uid;
    loadPage(user); // Should I put this into the onSnapshot or other listener position?
  } else { // IF USER IS FALSE, MEAING IF USER IS NOT LOGGED IN
    loadPage(); // No user sent as a parameter.
  }
})

function loadPage(user) {
  // showLoginState();
  if (user) {
    createNavigation(user);
    createFooter(currentWebAppVersion);
  } else {
    createNavigation();
    createFooter(currentWebAppVersion);
  }
}

const createNavigation = async (user) => {
  // Inserts HTML first thing inside of the navContainer div
  navContainer.innerHTML = ""; // "Resets" the navContainer with nothing, and then creates the nav bar depending on if a user is signed in or not.  This works, but is a little clunky.  This is a fix to the nav bar duplicating on the page after user has signed-in or signed-up, etc.
  let btnSignOutStatus;
  let btnSignInStatus;
  let btnSignUpStatus;
  if (user) { // If user is true (meaning logged in), no change to variable status.  If logged out, variable status becomes string "hide", which is a class that will hide the log out button container.
    btnSignOutStatus = "";
    btnSignInStatus = "hide";
    btnSignUpStatus = "hide";
  } else {
    btnSignOutStatus = "hide";
    btnSignInStatus = "";
    btnSignUpStatus = "";
  }
  navContainer.insertAdjacentHTML('afterbegin', `
  <header class='logo'><a href='./index.html'>DMZ-Missions</a></header>

  <div id='middleNavbarSpecialSpace'><a class='nav-link special-link' href='../events/event-the-boys-diabolical.html'>Event: The Boys (July 2023)</a></div>

  <button id='btnMenuClosed' class='btn-drop-down-menu'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  </button>

  <button id='btnMenuOpen' class='btn-drop-down-menu hide'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
    </svg>
  </button>
  
  <nav class='nav-drop-down-menu hide' id='navDropDownMenu'>
    <ul class='nav-links'>
      <li class='nav-link'><a href='../dmz-missions.html'>DMZ Missions Page</a></li>
      <li class='nav-link'><a href='../to-do.html'>To-Do Page</a></li>
      <li class='nav-link'><a href='../events/event-the-boys-diabolical.html'>Event: S4 The Boys</a></li>
      <li class='nav-link'><a href='../auth.html'>Log In</a></li>
      <li class='nav-link'><a href='../sign-up.html'>Sign Up</a></li>
    </ul>
    <div id='profileLinkContainer' class=''>
      <button type='button' id='btnSignOut' class='btn btn-auth ${btnSignOutStatus}'>Sign Out</button>
      <button type='button' id='btnSignIn' class='btn btn-auth ${btnSignInStatus}'>Sign In</button>
      <button type='button' id='btnSignUp' class='btn btn-auth  ${btnSignUpStatus}'>Sign Up</button>
    </div>
  </nav>
  `)

  const btnMenuClosed = document.getElementById('btnMenuClosed');
  const btnMenuOpen = document.getElementById('btnMenuOpen');
  const dropDownMenuButtons = document.getElementsByClassName('btn-drop-down-menu');
  for (let i = 0; i < dropDownMenuButtons.length && i < 10; i++) {
    dropDownMenuButtons[i].addEventListener('click', (e) => {
      // I'll need to have it toggle class hide.
      console.log('drop down menu clicked');
      btnMenuClosed.classList.toggle('hide');
      btnMenuOpen.classList.toggle('hide');
    })
  }


  if (user) { // Function should only trigger if user is logged in.
   createSignOutButtonFunction();
  }
}

const createFooter = async (version) => {
  footerContainer.insertAdjacentHTML('afterbegin', `
    <p>Created by Daniel Godin</p>
    <p id='appVersion'>${version}</p>
  `)
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

export const recommendLogInBox = async (attachmentPoint) => {

  attachmentPoint.insertAdjacentHTML('beforebegin', `
    <div class='log-in-recommended-container'>
      <h3 class='log-in-recommended-h3'>
        It is recommended to <a href='../auth.html'>LOG IN</a> or <a href='../sign-up.html'>SIGN UP</a> to get the full features of this page.</h2>
      </h3>
      <button type='button' id='btnHideRecommendedLogInBox'>Hide This</button>
    </div>
  `)

  const btnHideRecommendedLogInBox = document.getElementById('btnHideRecommendedLogInBox');
  btnHideRecommendedLogInBox.addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('hide');
  })

}



// console.log('Error Checking:  End of UI.js File');