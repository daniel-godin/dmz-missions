// This file is intended to be a one-change, all sites changed thing.
// Eventually create 3 versions:  Desktop, Mobile, Tablet.

import { createSignOutButtonFunction } from "./auth";

export const navContainer = document.getElementById('navContainer');
export const profileLinkContainer = document.getElementById('profileLinkContainer');

// console.log('Beginning of nav.js triggered');

export async function loadNavigation(user) {
  // Inserts HTML first thing inside of the navContainer div
  if (user) {
    navContainer.insertAdjacentHTML('afterbegin', `
    <header class='logo'><a href='./index.html'>DMZ-Missions</a></header>
    <nav class='nav'>
      <ul class='nav-links'>
        <li class='nav-link'><a href='./dmz-standard-missions-s4.html'>DMZ Missions Page</a></li>
        <li class='nav-link'><a href='./auth.html'>Log In</a></li>
        <li class='nav-link'><a href='./sign-up.html'>Sign Up</a></li>
        <li class='nav-link'><a href='./to-do.html'>To-Do Page</a></li>
      </ul>
      <div id='profileLinkContainer'>
        <button type='button' id='btnSignOut'>Sign Out</button>
      </div>
    </nav>
    `)
    createSignOutButtonFunction();
  } else {
    navContainer.insertAdjacentHTML('afterbegin', `
    <header class='logo'><a href='./index.html'>DMZ-Missions</a></header>
    <nav class='nav'>
      <ul class='nav-links'>
        <li class='nav-link'><a href='./dmz-standard-missions-s4.html'>DMZ Missions Page</a></li>
        <li class='nav-link'><a href='./auth.html'>Log In</a></li>
        <li class='nav-link'><a href='./sign-up.html'>Sign Up</a></li>
        <li class='nav-link'><a href='./to-do.html'>To-Do Page</a></li>
      </ul>
      <div id='profileLinkContainer'>
      </div>
    </nav>
    `) 
  }
}

// console.log('End of nav.js Triggered'); // FOR TESTING PURPOSES