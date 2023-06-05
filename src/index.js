// Import the functions you need from Firebase SDK's.
import { initializeApp } from "firebase/app";
import { 
  getAnalytics 
} from "firebase/analytics";
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
  GoogleAuthProvider,
  FirebaseAuth,
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

// DMZ Missions Imports
import { dmzMissionInformation } from "./full-mission-information";

import { dmzMissionsS3 } from "./dmz-missions-s3";

import {
  createMissionGrid, createMissionGridLoggedOut,
  redactedTier1Container,
  redactedTier2Container,
  redactedTier3Container,
  redactedTier4Container,
  redactedTier5Container,
  whiteLotusTier1Container,
  whiteLotusTier2Container,
  whiteLotusTier3Container,
  whiteLotusTier4Container,
  whiteLotusTier5Container,
  legionTier1Container,
  legionTier2Container,
  legionTier3Container,
  legionTier4Container,
  legionTier5Container,
  blackMousTier1Container,
  blackMousTier2Container,
  blackMousTier3Container,
  blackMousTier4Container,
  blackMousTier5Container,
  crownTier1Container,
  crownTier2Container,
  crownTier3Container,
  crownTier4Container,
  crownTier5Container,
  authContainer,
  txtEmail,
  txtPassword,
  errorContainer,
  errorMessage,
  createAuthBox,
  profileLinkContainer,
  dmzMissionsContainer,
  showLoginForm,
  showApp,
  hideLoginError,
  showLoginError,
  // showLoginState,
  btnLogIn, btnSignUp, btnSignOut, btnGoogleSignIn,
  checkBoxFunction,
  txtName,
  navSignedIn, navSignedOut,
  dmzPageHeader,
  showDMZHeaderAuthStatus,


} from "./dmz-missions-ui";

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

// Import Non-Firebase Code From Other Files:  THIS IS ONLY FOR TESTING, THIS IS THE OFFICIAL VIDEO GITHUB CODE.
// Open-source Firebase log-in code.  For testing and getting it working.  Will replace all of this from 'ui' later.
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
// } from "./ui";

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

// Initialize Firebase Apps
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Local Emulators
connectAuthEmulator(auth, "http://localhost:9099"); // Auth Emulator
connectFirestoreEmulator(db, 'localhost', 8080);

// Early Console.log Check.  Before lots of code executes or gets stuck.
console.log('Early console log check, before lots of code executes or gets stuck');

addDMZMissionsS3ObjToDb(db); // Adds the dmzMissionsS3 object to db, mw2-info, dmzMissions.  This is OUTSIDE of the user collection stuff.




// Testing New S3 Missions Object
let testingMissions = Object.values(dmzMissionsS3);

for (let i = 0; i < testingMissions.length; i++) {
  let missionTitle = testingMissions[i].title;
  // console.log(missionTitle);
}

// console.table(testingMissions);

// Sending missions object to database


// App Configurations:
// Setting Up Auth From Video:
const loginEmailPassword = async () => {
    // Do I need a preventDefault() function?

  console.log('login button clicked');
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    // console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

const createAccount = async () => {
    // Do I need a preventDefault() function?
  console.log('sign up button clicked');
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissions'), { });
    await initialDatabaseSetUp(userCredential) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

// Sign-in With Google:
const handleGoogle = async () => {
    // Do I need a preventDefault() function?
  console.log('google button clicked');
  const provider = await new GoogleAuthProvider();
  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
  return signInWithPopup(auth, provider);
}

function initialDatabaseSetUp (userCredentials) {
  let uid = userCredentials.user.uid;
  const newUser = {
    userDisplayName: "Display Name - Future Fix",
    userEmail: userCredentials.user.email,
    userActivisionId: "",
    userRegion: "",
    signedUp: "time"
  }
  setDoc(doc(db, 'users', uid), newUser ); // Creates a doc in db > users > (unique user id [PRIVATE DOC])
  setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissions'), { dmzMissionInformation }); // Creates the mission tracking doc inside a users UID doc sub-collections
}

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('onAuthStateChanged function triggered');
    showLoginState(user, 'logged-in');
    showDMZHeaderAuthStatus(user);

    // showApp();
    const uid = user.uid;

    // hideLoginError();

    dmzMissionDocRef(user); // This function passes the user information, so I can grab the user's uid and grab their appropriate doc and create the grid, based on their "complete"ness.


    // THIS IS WHERE YOU WANT TO ADD THE LITTLE "BOX" OR PROFILE PICTURE IN THE TOP RIGHT TO INDICATE YOU'RE LOGGED IN.


    // const dmzMissionDocRef = async (user) => {
    //   const docRef = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissions');
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     // HERE'S WHERE I MAKE THE HTML GRID!!!!  
    //     // console.log('User Signed In - Mission Grid Loads Next');

    //     const redactedTier1MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier1.missions;
    //     const redactedTier2MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier2.missions;
    //     const redactedTier3MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier3.missions;
    //     const redactedTier4MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier4.missions;
    //     const redactedTier5MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier5.missions;

    //     const whiteLotusTier1MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier1.missions;
    //     const whiteLotusTier2MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier2.missions;
    //     const whiteLotusTier3MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier3.missions;
    //     const whiteLotusTier4MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier4.missions;
    //     const whiteLotusTier5MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier5.missions;

    //     const legionTier1MissionsArray = docSnap.data().dmzMissionInformation.legion.tier1.missions;
    //     const legionTier2MissionsArray = docSnap.data().dmzMissionInformation.legion.tier2.missions;
    //     const legionTier3MissionsArray = docSnap.data().dmzMissionInformation.legion.tier3.missions;
    //     const legionTier4MissionsArray = docSnap.data().dmzMissionInformation.legion.tier4.missions;
    //     const legionTier5MissionsArray = docSnap.data().dmzMissionInformation.legion.tier5.missions;

    //     const blackMousTier1MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier1.missions;
    //     const blackMousTier2MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier2.missions;
    //     const blackMousTier3MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier3.missions;
    //     const blackMousTier4MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier4.missions;
    //     const blackMousTier5MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier5.missions;

    //     const crownTier1MissionsArray = docSnap.data().dmzMissionInformation.crown.tier1.missions;
    //     const crownTier2MissionsArray = docSnap.data().dmzMissionInformation.crown.tier2.missions;
    //     const crownTier3MissionsArray = docSnap.data().dmzMissionInformation.crown.tier3.missions;
    //     const crownTier4MissionsArray = docSnap.data().dmzMissionInformation.crown.tier4.missions;
    //     const crownTier5MissionsArray = docSnap.data().dmzMissionInformation.crown.tier5.missions;
   
    //     // Is it possible to make an array of arrays and loop through them with 1 loop/function, instead of triggering this a million times?

    //     createMissionGrid(redactedTier1MissionsArray, redactedTier1Container);
    //     createMissionGrid(redactedTier2MissionsArray, redactedTier2Container);
    //     createMissionGrid(redactedTier3MissionsArray, redactedTier3Container);
    //     createMissionGrid(redactedTier4MissionsArray, redactedTier4Container);
    //     createMissionGrid(redactedTier5MissionsArray, redactedTier5Container);

    //     createMissionGrid(whiteLotusTier1MissionsArray, whiteLotusTier1Container);
    //     createMissionGrid(whiteLotusTier2MissionsArray, whiteLotusTier2Container);
    //     createMissionGrid(whiteLotusTier3MissionsArray, whiteLotusTier3Container);
    //     createMissionGrid(whiteLotusTier4MissionsArray, whiteLotusTier4Container);
    //     createMissionGrid(whiteLotusTier5MissionsArray, whiteLotusTier5Container);

    //     createMissionGrid(legionTier1MissionsArray, legionTier1Container);
    //     createMissionGrid(legionTier2MissionsArray, legionTier2Container);
    //     createMissionGrid(legionTier3MissionsArray, legionTier3Container);
    //     createMissionGrid(legionTier4MissionsArray, legionTier4Container);
    //     createMissionGrid(legionTier5MissionsArray, legionTier5Container);

    //     createMissionGrid(blackMousTier1MissionsArray, blackMousTier1Container);
    //     createMissionGrid(blackMousTier2MissionsArray, blackMousTier2Container);
    //     createMissionGrid(blackMousTier3MissionsArray, blackMousTier3Container);
    //     createMissionGrid(blackMousTier4MissionsArray, blackMousTier4Container);
    //     createMissionGrid(blackMousTier5MissionsArray, blackMousTier5Container);


    //     createMissionGrid(crownTier1MissionsArray, crownTier1Container);
    //     createMissionGrid(crownTier2MissionsArray, crownTier2Container);
    //     createMissionGrid(crownTier3MissionsArray, crownTier3Container);
    //     createMissionGrid(crownTier4MissionsArray, crownTier4Container);
    //     createMissionGrid(crownTier5MissionsArray, crownTier5Container);
        
    //     console.log('User Signed In and Mission Grid Created');

    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");

    //     // Possibly load the entire grid... WITHOUT checkboxes, along with a header that says "Not logged in - log in to keep track of your progress".

    //   }

    // };
    

  }
  else {
    showDMZHeaderAuthStatus();

    dmzMissionDocRef(user);

    showLoginState(user, 'logged-out')

    // showLoginForm();
    // showLoginState(user, 'logged-out');

    // lblAuthState.innerHTML = "You're not logged in.";
  }
})

const monitorAuthState = async () => {

}
monitorAuthState();

const logout = async () => {
  // Do I need a preventDefault() function?
  console.log('sign out button clicked');

  await signOut(auth);
}



// Testing:

const showLoginState = async (user, state) => {
  if (state === 'logged-in') {
    console.log('login-state-triggered for logged in')

    navSignedOut.style.display = 'none';
    navSignedIn.style.display = 'block';
  } else if (state === 'logged-out') {
    console.log('login-state-triggered for logged out')

    navSignedIn.style.display = 'none';
    navSignedOut.style.display = 'block';
  }
}

// Testing whether I can put this function OUTSIDE of the authState function, and pass the parameters that I need.


const dmzMissionDocRef = async (user) => {


  if (user) {
    const docRef = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissions');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      // console.table(data);
      // HERE'S WHERE I MAKE THE HTML GRID!!!!  
      // console.log('User Signed In - Mission Grid Loads Next');

      const redactedTier1MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier1.missions;
      const redactedTier2MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier2.missions;
      const redactedTier3MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier3.missions;
      const redactedTier4MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier4.missions;
      const redactedTier5MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier5.missions;

      const whiteLotusTier1MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier1.missions;
      const whiteLotusTier2MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier2.missions;
      const whiteLotusTier3MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier3.missions;
      const whiteLotusTier4MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier4.missions;
      const whiteLotusTier5MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier5.missions;

      const legionTier1MissionsArray = docSnap.data().dmzMissionInformation.legion.tier1.missions;
      const legionTier2MissionsArray = docSnap.data().dmzMissionInformation.legion.tier2.missions;
      const legionTier3MissionsArray = docSnap.data().dmzMissionInformation.legion.tier3.missions;
      const legionTier4MissionsArray = docSnap.data().dmzMissionInformation.legion.tier4.missions;
      const legionTier5MissionsArray = docSnap.data().dmzMissionInformation.legion.tier5.missions;

      const blackMousTier1MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier1.missions;
      const blackMousTier2MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier2.missions;
      const blackMousTier3MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier3.missions;
      const blackMousTier4MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier4.missions;
      const blackMousTier5MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier5.missions;

      const crownTier1MissionsArray = docSnap.data().dmzMissionInformation.crown.tier1.missions;
      const crownTier2MissionsArray = docSnap.data().dmzMissionInformation.crown.tier2.missions;
      const crownTier3MissionsArray = docSnap.data().dmzMissionInformation.crown.tier3.missions;
      const crownTier4MissionsArray = docSnap.data().dmzMissionInformation.crown.tier4.missions;
      const crownTier5MissionsArray = docSnap.data().dmzMissionInformation.crown.tier5.missions;

      // Is it possible to make an array of arrays and loop through them with 1 loop/function, instead of triggering this a million times?

      createMissionGrid(redactedTier1MissionsArray, redactedTier1Container);
      createMissionGrid(redactedTier2MissionsArray, redactedTier2Container);
      createMissionGrid(redactedTier3MissionsArray, redactedTier3Container);
      createMissionGrid(redactedTier4MissionsArray, redactedTier4Container);
      createMissionGrid(redactedTier5MissionsArray, redactedTier5Container);

      createMissionGrid(whiteLotusTier1MissionsArray, whiteLotusTier1Container);
      createMissionGrid(whiteLotusTier2MissionsArray, whiteLotusTier2Container);
      createMissionGrid(whiteLotusTier3MissionsArray, whiteLotusTier3Container);
      createMissionGrid(whiteLotusTier4MissionsArray, whiteLotusTier4Container);
      createMissionGrid(whiteLotusTier5MissionsArray, whiteLotusTier5Container);

      createMissionGrid(legionTier1MissionsArray, legionTier1Container);
      createMissionGrid(legionTier2MissionsArray, legionTier2Container);
      createMissionGrid(legionTier3MissionsArray, legionTier3Container);
      createMissionGrid(legionTier4MissionsArray, legionTier4Container);
      createMissionGrid(legionTier5MissionsArray, legionTier5Container);

      createMissionGrid(blackMousTier1MissionsArray, blackMousTier1Container);
      createMissionGrid(blackMousTier2MissionsArray, blackMousTier2Container);
      createMissionGrid(blackMousTier3MissionsArray, blackMousTier3Container);
      createMissionGrid(blackMousTier4MissionsArray, blackMousTier4Container);
      createMissionGrid(blackMousTier5MissionsArray, blackMousTier5Container);


      createMissionGrid(crownTier1MissionsArray, crownTier1Container);
      createMissionGrid(crownTier2MissionsArray, crownTier2Container);
      createMissionGrid(crownTier3MissionsArray, crownTier3Container);
      createMissionGrid(crownTier4MissionsArray, crownTier4Container);
      createMissionGrid(crownTier5MissionsArray, crownTier5Container);
      
      console.log('User Signed In and Mission Grid Created');

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");

      // Possibly load the entire grid... WITHOUT checkboxes, along with a header that says "Not logged in - log in to keep track of your progress".
    }
  } else {
    // Loads Mission Grid From JS Object, without checkboxes.

    console.log('not signed in grid creation');

    const redactedTier1MissionsArray = dmzMissionInformation.redacted.tier1.missions;
    const redactedTier2MissionsArray = dmzMissionInformation.redacted.tier2.missions;
    const redactedTier3MissionsArray = dmzMissionInformation.redacted.tier3.missions;
    const redactedTier4MissionsArray = dmzMissionInformation.redacted.tier4.missions;
    const redactedTier5MissionsArray = dmzMissionInformation.redacted.tier5.missions;

    const whiteLotusTier1MissionsArray = dmzMissionInformation.whiteLotus.tier1.missions;
    const whiteLotusTier2MissionsArray = dmzMissionInformation.whiteLotus.tier2.missions;
    const whiteLotusTier3MissionsArray = dmzMissionInformation.whiteLotus.tier3.missions;
    const whiteLotusTier4MissionsArray = dmzMissionInformation.whiteLotus.tier4.missions;
    const whiteLotusTier5MissionsArray = dmzMissionInformation.whiteLotus.tier5.missions;

    const legionTier1MissionsArray = dmzMissionInformation.legion.tier1.missions;
    const legionTier2MissionsArray = dmzMissionInformation.legion.tier2.missions;
    const legionTier3MissionsArray = dmzMissionInformation.legion.tier3.missions;
    const legionTier4MissionsArray = dmzMissionInformation.legion.tier4.missions;
    const legionTier5MissionsArray = dmzMissionInformation.legion.tier5.missions;

    const blackMousTier1MissionsArray = dmzMissionInformation.blackMous.tier1.missions;
    const blackMousTier2MissionsArray = dmzMissionInformation.blackMous.tier2.missions;
    const blackMousTier3MissionsArray = dmzMissionInformation.blackMous.tier3.missions;
    const blackMousTier4MissionsArray = dmzMissionInformation.blackMous.tier4.missions;
    const blackMousTier5MissionsArray = dmzMissionInformation.blackMous.tier5.missions;

    const crownTier1MissionsArray = dmzMissionInformation.crown.tier1.missions;
    const crownTier2MissionsArray = dmzMissionInformation.crown.tier2.missions;
    const crownTier3MissionsArray = dmzMissionInformation.crown.tier3.missions;
    const crownTier4MissionsArray = dmzMissionInformation.crown.tier4.missions;
    const crownTier5MissionsArray = dmzMissionInformation.crown.tier5.missions;

    // Is it possible to make an array of arrays and loop through them with 1 loop/function, instead of triggering this a million times?

    createMissionGridLoggedOut(redactedTier1MissionsArray, redactedTier1Container);
    createMissionGridLoggedOut(redactedTier2MissionsArray, redactedTier2Container);
    createMissionGridLoggedOut(redactedTier3MissionsArray, redactedTier3Container);
    createMissionGridLoggedOut(redactedTier4MissionsArray, redactedTier4Container);
    createMissionGridLoggedOut(redactedTier5MissionsArray, redactedTier5Container);

    createMissionGridLoggedOut(whiteLotusTier1MissionsArray, whiteLotusTier1Container);
    createMissionGridLoggedOut(whiteLotusTier2MissionsArray, whiteLotusTier2Container);
    createMissionGridLoggedOut(whiteLotusTier3MissionsArray, whiteLotusTier3Container);
    createMissionGridLoggedOut(whiteLotusTier4MissionsArray, whiteLotusTier4Container);
    createMissionGridLoggedOut(whiteLotusTier5MissionsArray, whiteLotusTier5Container);

    createMissionGridLoggedOut(legionTier1MissionsArray, legionTier1Container);
    createMissionGridLoggedOut(legionTier2MissionsArray, legionTier2Container);
    createMissionGridLoggedOut(legionTier3MissionsArray, legionTier3Container);
    createMissionGridLoggedOut(legionTier4MissionsArray, legionTier4Container);
    createMissionGridLoggedOut(legionTier5MissionsArray, legionTier5Container);

    createMissionGridLoggedOut(blackMousTier1MissionsArray, blackMousTier1Container);
    createMissionGridLoggedOut(blackMousTier2MissionsArray, blackMousTier2Container);
    createMissionGridLoggedOut(blackMousTier3MissionsArray, blackMousTier3Container);
    createMissionGridLoggedOut(blackMousTier4MissionsArray, blackMousTier4Container);
    createMissionGridLoggedOut(blackMousTier5MissionsArray, blackMousTier5Container);


    createMissionGridLoggedOut(crownTier1MissionsArray, crownTier1Container);
    createMissionGridLoggedOut(crownTier2MissionsArray, crownTier2Container);
    createMissionGridLoggedOut(crownTier3MissionsArray, crownTier3Container);
    createMissionGridLoggedOut(crownTier4MissionsArray, crownTier4Container);
    createMissionGridLoggedOut(crownTier5MissionsArray, crownTier5Container);

  }

};

console.log('before button listeners');





const missionCheckboxArray = document.getElementsByClassName('mission-progress');

for (let i = 0; i < missionCheckboxArray.length; i++) {
  missionCheckboxArray[i].addEventListener('click', (e) => {
    e.preventDefault();
    let checkId = Number(e.target.id);
    // console.log(checkId);
    console.log('checkbox listener working');
})}

btnLogIn.addEventListener('click', loginEmailPassword);
btnSignOut.addEventListener('click', logout);
btnSignUp.addEventListener('click', createAccount);
btnGoogleSignIn.addEventListener('click', handleGoogle);



console.log('Got to the end of Index.js script');