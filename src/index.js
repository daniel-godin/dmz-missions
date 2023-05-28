// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  connectAuthEmulator, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  GoogleAuthProvider
} from "firebase/auth";
import { 
  getFirestore,
  connectFirestoreEmulator,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  Timestamp
} from 'firebase/firestore';
import {
  dmzMissionObjectDocTemplate
} from './dmz-missions';
// import {

// } from './dmz-missions-script';


// Import Non-Firebase Code From Other Files:  THIS IS ONLY FOR TESTING, THIS IS THE OFFICIAL VIDEO GITHUB CODE.
// import { 
//   hideLoginError,
//   showLoginState,
//   showLoginForm,
//   showApp,
//   showLoginError,
//   btnLogin,
//   btnSignup,
//   btnGoogleSignUp,
//   btnLogout,
//   txtPassword, 
//   lblAuthState,
//   btnTestingDocAdd,
//   btnTestingDocAddTwo
// } from "./ui";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcnF8Vqs9g2gNmIYUCIFbbbkBnSMAQOo0",
  authDomain: "dmz-missions-150b0.firebaseapp.com",
  projectId: "dmz-missions-150b0",
  storageBucket: "dmz-missions-150b0.appspot.com",
  messagingSenderId: "756249949288",
  appId: "1:756249949288:web:8f6dbb7b6cbfe6853577dd",
  measurementId: "G-Z86M5P6WED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// App Configurations:

// Setting Up Auth From Video:
// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//     console.log(userCredential.user);
//   }
//   catch(error) {
//     console.log(error);
//     showLoginError(error);
//   }
// }

// btnLogin.addEventListener("click", loginEmailPassword);

// const createAccount = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
//     console.log(userCredential.user);
//   }
//   catch(error) {
//     console.log(error);
//     showLoginError(error);
//   }
// }

// btnSignup.addEventListener("click", createAccount);
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user);
//       showApp();
//       showLoginState(user);

//       hideLoginError();
//     }
//     else {
//       showLoginForm();
//       lblAuthState.innerHTML = "You're not logged in.";

//     }

//   })
// const monitorAuthState = async () => {

// }

// monitorAuthState();

// const logout = async () => {
//   await signOut(auth);

// }

// btnLogout.addEventListener("click", logout);

// // Sign-in With Google:

// const handleGoogle = async () => {
//   const provider = await new GoogleAuthProvider();

//   // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect

//   console.log('handleGoogle function triggered');
//   return signInWithPopup(auth, provider);


// }

// btnGoogleSignUp.addEventListener("click", handleGoogle);

// Testing Firebase FireStore - Adding/Removing/Changing Data:

// Adding Doc (From Firebase Docs/Reference)
const testAddDocFunction = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// btnTestingDocAdd.addEventListener("click", testAddDocFunction);

// Adding a second doc
const testAddSecondDoc = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// btnTestingDocAddTwo.addEventListener("click", testAddSecondDoc);

// TEST:  Reading Docs
const querySnapshot = await getDocs(collection(db, "users"));

querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


// TEST:  Creating Objects (maps)





// console.table(dmzMissionObjectDocTemplate);

await setDoc(doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate'), dmzMissionObjectDocTemplate);

const docRef = doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.table("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

// JS File Creates entire Grid in div 'testing-dmz-data'


// COPIED FROM DMZ-MISSIONS-SCRIPT.  EXPORT/IMPORT THIS LATER

// DOM Variables:

// DOM ID Variables:
const redactedT1Progress = document.getElementById('redactedT1Progress');

// DOM Faction Column Variables:

// DOM Class Variables:
const tierHeader = document.getElementsByClassName('tier-header');
const tierStatus = document.getElementsByClassName('tier-status');
const missionCheckbox = document.getElementsByClassName('mission-checkbox');

// Events / Event Handlers

// Class Event Handlers:
// Event Handler + Function to hide/show mission container under the header that users clicks.

// Testing how to export all event listeners:
function eventListeners() {

  // for (let i = 0; i < tierHeader.length; i++) {
  //   tierHeader[i].addEventListener('click', (e) => {
  //     console.log('tier toggle is working');
  //     // Need a way to know toggle classList('hidden') to Parents next sibling.  Could possibly change the structure to make the title headers a direct sibling to tier-mission-container.
  //     // let parent = e.target.parentNode;
  //     // let linkedMissionsContainer = e.target.parentNode.lastElementSibling;
  //       e.target.parentNode.firstElementSibling.classList.toggle('hidden');
  //     // console.log(linkedMissionsContainer);
  //     // showHideContainer.classList.toggle('hidden');
  //   });
  // }
  
  // Event handler every time user clicks on a mission checkbox.
  for (let i = 0; i < missionCheckbox.length; i++) {
    missionCheckbox[i].addEventListener('click', (e) => {
      let boxChecked = e.target;
      let tierMissionsContainer = e.target.parentNode.parentNode.parentNode;
      let tierProgressElementToChange = e.target.parentNode.parentNode.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild;
      // console.log(tierProgressElementToChange);
      // console.log(tierMissionsContainer);
      tierProgressDisplay(boxChecked, tierMissionsContainer, tierProgressElementToChange);
    });
  }
  console.log("event listeners is working");
}







// Function to calculate number of boxes checked in a tier.  Automatically updates number of missions completed.  ??/7.
function tierProgressDisplay(boxChecked, tierMissionsContainer, progressElement) {
  // Need a refresh of redactedT1Progress element.  Right now it just adds another number.
  let status = tierMissionsContainer.querySelectorAll("input[type='checkbox']:checked").length;

  // let status = document.querySelectorAll('#redactedT1Form input[type="checkbox"]:checked').length;
  // console.table(status);

  progressElement.innerText = `${status} / 7`;


}



function displayAllTierProgress() {

  for (let i = 0; i < tierStatus.length; i++) {
    let status = tierStatus[i].parentNode.parentNode.querySelectorAll("input[type='checkbox']:checked").length;
    // let status = e.querySelectorAll("input[type='checkbox']:checked").length;
    tierStatus[i].innerText = `${status} / 7`;
    // console.log(`${status}`);
    // console.log(`tier status working`);
    
  }
  
}


























const redactedT1MissionsContainer = document.getElementById('redactedT1MissionsContainer');
const redactedColumn = document.getElementById('redactedColumn');




function createDMZDataGrid () {
  // const testDMZDataContainer = document.getElementById('testDMZDataContainer');

  // Starting with just Redacted
  const redactedObject = docSnap.data().redacted;

  let factionName = redactedObject.factionName;
  let status = redactedObject.status;
  let complete = redactedObject.complete;


  for (let i = 0; i < 5; i++) {
    let tier = redactedObject.tier[i];
    let tierName = redactedObject.tier[i].tierName;
      redactedColumn.insertAdjacentHTML('beforeend', `
        <div class="tier-container">
          <div class="tier-header-container">
            <header class="tier-header">${factionName} ${tierName}:</header>
            <span class='tier-status-container'><p class='tier-status' id='redactedT1Progress'></p></span>
          </div>
          <div class='tier-missions-container hidden'>
          </div>
        </div>
        
      `)
      tierHeader[i].addEventListener('click', showHideMissionContainer);

      for (let j = 0; j < 7; j++) {
        let title = tier.missions[j].title;
        let complete = tier.missions[j].complete;
        let box;
          if (complete === true) {
            box = 'checked';
          } else {
            box = '';
          }

        redactedColumn.firstElementChild.lastElementChild.insertAdjacentHTML('beforeend',`
            <div class="mission-container">
              <div class="mission-title-container">
              <header class='mission-title'>${title}</header>
              <input type='checkbox' class='mission-checkbox' name='' value='' ${box}>
              </div>
            </div>
        `)
      }
  }
}


createDMZDataGrid();

function showHideMissionContainer (e) {
  e.target.parentNode.firstElementSibling.classList.toggle('hidden');
}


// Functions To Run On Load:
// tierProgressDisplay();
displayAllTierProgress();
eventListeners();

