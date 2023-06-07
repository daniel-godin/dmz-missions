// This file is intended to be a one-change, all sites changed thing.
// Eventually create 3 versions:  Desktop, Mobile, Tablet.

export const navContainer = document.getElementById('navContainer');

export function loadNavigation(state) {
  // Inserts HTML first thing inside of the navContainer div.
  navContainer.insertAdjacentHTML('afterbegin', `
  <header class='logo'>DMZ-Missions</header>
  <nav class='nav'>
    <ul class='nav-links'>
      <li class='nav-link'><a href='./dmz-missions.html'>DMZ Missions Page</a></li>
      <li class='nav-link'><a href='./auth.html'>Auth Page</a></li>
      <li class='nav-link'>Link</li>
    </ul>
    <div id='profileLinkContainer'>
      <div id='navSignedIn'><button type='button' id='btnSignOut'>Sign Out</button></div>
      <div id='navSignedOut'><a href='./auth.html'>Sign In/Sign Up</a></div>
      <!-- Auto generated based on whether user is logged in or not -->
    </div>
  </nav>
  `)
  showLoginState(state);
}

export const showLoginState = async (state, user) => {
  if (state === 'logged-in') {
    // console.log('login-state-triggered for logged in')
    navSignedOut.style.display = 'none';
    navSignedIn.style.display = 'block';
  } else if (state === 'logged-out') {
    // console.log('login-state-triggered for logged out')
    navSignedIn.style.display = 'none';
    navSignedOut.style.display = 'block';
  }
}