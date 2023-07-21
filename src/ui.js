import { loadNavigation, navContainer } from "./nav";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


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