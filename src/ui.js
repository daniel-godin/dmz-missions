import { auth, } from "./firebase";
import { onAuthStateChanged, } from "firebase/auth";
import { createSignOutButtonFunction } from "./auth";

export const navContainer = document.getElementById('navContainer');
export const profileLinkContainer = document.getElementById('profileLinkContainer');

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
    loadNavigation(user);
  } else {
    loadNavigation();
  }
}

export const loadNavigation = async (user) => {
  // Inserts HTML first thing inside of the navContainer div
  navContainer.innerHTML = ""; // "Resets" the navContainer with nothing, and then creates the nav bar depending on if a user is signed in or not.  This works, but is a little clunky.  This is a fix to the nav bar duplicating on the page after user has signed-in or signed-up, etc.
  let status;
  if (user) { // If user is true (meaning logged in), no change to variable status.  If logged out, variable status becomes string "hide", which is a class that will hide the log out button container.
    status = "";
  } else {
    status = "hide";
  }
  navContainer.insertAdjacentHTML('afterbegin', `
  <header class='logo'><a href='./index.html'>DMZ-Missions</a></header>
  <nav class='nav'>
    <ul class='nav-links'>
      <li class='nav-link'><a href='../dmz-missions.html'>DMZ Missions Page</a></li>
      <li class='nav-link'><a href='../to-do.html'>To-Do Page</a></li>
      <li class='nav-link'><a href='../events/event-the-boys-diabolical.html'>Event: S4 The Boys</a></li>
      <li class='nav-link'><a href='../auth.html'>Log In</a></li>
      <li class='nav-link'><a href='../sign-up.html'>Sign Up</a></li>
    </ul>
    <div id='profileLinkContainer' class='${status}'>
      <button type='button' id='btnSignOut'>Sign Out</button>
    </div>
  </nav>
  `)
  if (user) { // Function should only trigger if user is logged in.
   createSignOutButtonFunction();
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