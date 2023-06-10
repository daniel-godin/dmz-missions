// This file is intended to be a one-change, all sites changed thing.
// Eventually create 3 versions:  Desktop, Mobile, Tablet.

export const navContainer = document.getElementById('navContainer');
export const profileLinkContainer = document.getElementById('profileLinkContainer');
export const btnSignOut = document.getElementById('btnSignOut');

export async function loadNavigation(user) {
  // Inserts HTML first thing inside of the navContainer div

  // navContainer.insertAdjacentHTML('afterbegin', `
  // <header class='logo'>DMZ-Missions</header>
  // <nav class='nav'>
  //   <ul class='nav-links'>
  //     <li class='nav-link'><a href='./dmz-missions.html'>DMZ Missions Page</a></li>
  //     <li class='nav-link'><a href='./auth.html'>Log In</a></li>
  //     <li class='nav-link'><a href='./sign-up.html'>Sign Up</a></li>
  //   </ul>
  //   <div id='profileLinkContainer'>
  //     <button type='button' id='btnSignOut'>Sign Out</button>
  //   </div>
  // </nav>
  // `)
  if (user) {
    console.log('gettinghere? user nav');

    navContainer.insertAdjacentHTML('afterbegin', `
    <header class='logo'>DMZ-Missions</header>
    <nav class='nav'>
      <ul class='nav-links'>
        <li class='nav-link'><a href='./dmz-missions.html'>DMZ Missions Page</a></li>
        <li class='nav-link'><a href='./auth.html'>Log In</a></li>
        <li class='nav-link'><a href='./sign-up.html'>Sign Up</a></li>
      </ul>
      <div id='profileLinkContainer'>
        <button type='button' id='btnSignOut'>Sign Out</button>
      </div>
    </nav>
    `)
  } else {
    console.log('gettinghere? no-user nav');

    navContainer.insertAdjacentHTML('afterbegin', `
    <header class='logo'>DMZ-Missions</header>
    <nav class='nav'>
      <ul class='nav-links'>
        <li class='nav-link'><a href='./dmz-missions.html'>DMZ Missions Page</a></li>
        <li class='nav-link'><a href='./auth.html'>Log In</a></li>
        <li class='nav-link'><a href='./sign-up.html'>Sign Up</a></li>
      </ul>
      <div id='profileLinkContainer'>
      </div>
    </nav>
    `) 
  }
}

// export const showLoginState = async (user) => {
//   if (user) {
//     console.log('login-state-triggered for logged in')
//     btnSignOut.style.display = 'block';
//   } else {
//     console.log('login-state-triggered for logged out')
//     btnSignOut.style.display = 'none';
//   }
// }