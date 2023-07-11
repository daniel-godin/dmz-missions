import { loadNavigation, navContainer } from "./nav";

export function loadPage(user) {
  // showLoginState();
  if (user) {
    loadNavigation(user);
  } else {
    if (dmzMissionsContainer) {
      loadNavigation();
      // fullCreateMissionGridLoggedOut(dmzMissionsS3);
    } else {
      loadNavigation();
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