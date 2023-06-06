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
  updateDoc,
  query,
  where,
  Timestamp,
  onSnapshot,
} from 'firebase/firestore';

// DMZ Missions Imports
import { dmzMissionInformation } from "./full-mission-information";

import { dmzMissionsS3 } from "./dmz-missions-s3";

import {
  // createMissionGrid, 
  // createMissionGridLoggedOut,
  arrayOfMissionCheckboxes,
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
  createMissionGridTEST, createMissionGridTESTLOGGEDIN,


} from "./dmz-missions-ui";

import { addDMZMissionsS3ObjToDb, } from "./db-creation";

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


// Figuring out how to make dmz mission grid from dmzMissionsS3 doc
const docTestRef = doc(db, 'users', 'uQvLZlDwAsXufUmgDp3lQVapxucM', 'mw2-trackers', 'dmzMissionsS3');

function createMissionGridLoggedOut (docRef) { // THIS IS THE NOT-LOGGED IN VERSION.  THE CHECKBOXES ARE NOT CREATED.
  getDoc(docRef)
  .then((doc) => {
    const obj = doc.data();
    for (let [key, value] of Object.entries(obj)) {
      let title = value.title;
        if (id >= 10101 && id <=10107) {
          createMissionGridTEST(redactedTier1Container, title);
          console.log(title);
        } else if (id >= 10201 && id <=10207) {
          createMissionGridTEST(redactedTier2Container, title);
          console.log(title);
        } else if (id >= 10301 && id <=10307) {
          createMissionGridTEST(redactedTier3Container, title);
          console.log(title);
        } else if (id >= 10401 && id <=10407) {
          createMissionGridTEST(redactedTier4Container, title);
          console.log(title);
        } else if (id >= 10501 && id <=10507) {
          createMissionGridTEST(redactedTier5Container, title);
          console.log(title);
        } else if (id >= 20101 && id <=20107) {
          createMissionGridTEST(whiteLotusTier1Container, title);
          console.log(title);
        } else if (id >= 20201 && id <=20207) {
          createMissionGridTEST(whiteLotusTier2Container, title);
          console.log(title);
        } else if (id >= 20301 && id <=20307) {
          createMissionGridTEST(whiteLotusTier3Container, title);
          console.log(title);
        } else if (id >= 20401 && id <=20407) {
          createMissionGridTEST(whiteLotusTier4Container, title);
          console.log(title);
        } else if (id >= 20501 && id <=20507) {
          createMissionGridTEST(whiteLotusTier5Container, title);
          console.log(title);
        } else if (id >= 30101 && id <=30107) {
          createMissionGridTEST(legionTier1Container, title);
          console.log(title);
        } else if (id >= 30201 && id <=30207) {
          createMissionGridTEST(legionTier2Container, title);
          console.log(title);
        } else if (id >= 30301 && id <=30307) {
          createMissionGridTEST(legionTier3Container, title);
          console.log(title);
        } else if (id >= 30401 && id <=30407) {
          createMissionGridTEST(legionTier4Container, title);
          console.log(title);
        } else if (id >= 30501 && id <=30507) {
          createMissionGridTEST(legionTier5Container, title);
          console.log(title);
        } else if (id >= 40101 && id <=40107) {
          createMissionGridTEST(blackMousTier1Container, title);
          console.log(title);
        } else if (id >= 40201 && id <=40207) {
          createMissionGridTEST(blackMousTier2Container, title);
          console.log(title);
        } else if (id >= 40301 && id <=40307) {
          createMissionGridTEST(blackMousTier3Container, title);
          console.log(title);
        } else if (id >= 40401 && id <=40407) {
          createMissionGridTEST(blackMousTier4Container, title);
          console.log(title);
        } else if (id >= 40501 && id <=40507) {
          createMissionGridTEST(blackMousTier5Container, title);
          console.log(title);
        } else if (id >= 50101 && id <=50107) {
          createMissionGridTEST(crownTier1Container, title);
          console.log(title);
        } else if (id >= 50201 && id <=50207) {
          createMissionGridTEST(crownTier2Container, title);
          console.log(title);
        } else if (id >= 50301 && id <=50307) {
          createMissionGridTEST(crownTier3Container, title);
          console.log(title);
        } else if (id >= 50401 && id <=50407) {
          createMissionGridTEST(crownTier4Container, title);
          console.log(title);
        } else if (id >= 50501 && id <=50507) {
          createMissionGridTEST(crownTier5Container, title);
          console.log(title);
        } 
    }
  })
}

// createMissionGridLoggedOut(docTestRef);

function createMissionGridLoggedIn (docRef) {
  getDoc(docRef)
  .then((doc) => {
    const obj = doc.data();
    for (let [key, value] of Object.entries(obj)) {
      let title = value.title;
      let id = value.id;
      let complete = value.complete;
        if (id >= 10101 && id <=10107) {
          createMissionGridTESTLOGGEDIN(redactedTier1Container, title, id, complete);
          console.log(title);
        } else if (id >= 10201 && id <=10207) {
          createMissionGridTESTLOGGEDIN(redactedTier2Container, title, id, complete);
          console.log(title);
        } else if (id >= 10301 && id <=10307) {
          createMissionGridTESTLOGGEDIN(redactedTier3Container, title, id, complete);
          console.log(title);
        } else if (id >= 10401 && id <=10407) {
          createMissionGridTESTLOGGEDIN(redactedTier4Container, title, id, complete);
          console.log(title);
        } else if (id >= 10501 && id <=10507) {
          createMissionGridTESTLOGGEDIN(redactedTier5Container, title, id, complete);
          console.log(title);
        } else if (id >= 20101 && id <=20107) {
          createMissionGridTESTLOGGEDIN(whiteLotusTier1Container, title, id, complete);
          console.log(title);
        } else if (id >= 20201 && id <=20207) {
          createMissionGridTESTLOGGEDIN(whiteLotusTier2Container, title, id, complete);
          console.log(title);
        } else if (id >= 20301 && id <=20307) {
          createMissionGridTESTLOGGEDIN(whiteLotusTier3Container, title, id, complete);
          console.log(title);
        } else if (id >= 20401 && id <=20407) {
          createMissionGridTESTLOGGEDIN(whiteLotusTier4Container, title, id, complete);
          console.log(title);
        } else if (id >= 20501 && id <=20507) {
          createMissionGridTESTLOGGEDIN(whiteLotusTier5Container, title, id, complete);
          console.log(title);
        } else if (id >= 30101 && id <=30107) {
          createMissionGridTESTLOGGEDIN(legionTier1Container, title, id, complete);
          console.log(title);
        } else if (id >= 30201 && id <=30207) {
          createMissionGridTESTLOGGEDIN(legionTier2Container, title, id, complete);
          console.log(title);
        } else if (id >= 30301 && id <=30307) {
          createMissionGridTESTLOGGEDIN(legionTier3Container, title, id, complete);
          console.log(title);
        } else if (id >= 30401 && id <=30407) {
          createMissionGridTESTLOGGEDIN(legionTier4Container, title, id, complete);
          console.log(title);
        } else if (id >= 30501 && id <=30507) {
          createMissionGridTESTLOGGEDIN(legionTier5Container, title, id, complete);
          console.log(title);
        } else if (id >= 40101 && id <=40107) {
          createMissionGridTESTLOGGEDIN(blackMousTier1Container, title, id, complete);
          console.log(title);
        } else if (id >= 40201 && id <=40207) {
          createMissionGridTESTLOGGEDIN(blackMousTier2Container, title, id, complete);
          console.log(title);
        } else if (id >= 40301 && id <=40307) {
          createMissionGridTESTLOGGEDIN(blackMousTier3Container, title, id, complete);
          console.log(title);
        } else if (id >= 40401 && id <=40407) {
          createMissionGridTESTLOGGEDIN(blackMousTier4Container, title, id, complete);
          console.log(title);
        } else if (id >= 40501 && id <=40507) {
          createMissionGridTESTLOGGEDIN(blackMousTier5Container, title, id, complete);
          console.log(title);
        } else if (id >= 50101 && id <=50107) {
          createMissionGridTESTLOGGEDIN(crownTier1Container, title, id, complete);
          console.log(title);
        } else if (id >= 50201 && id <=50207) {
          createMissionGridTESTLOGGEDIN(crownTier2Container, title, id, complete);
          console.log(title);
        } else if (id >= 50301 && id <=50307) {
          createMissionGridTESTLOGGEDIN(crownTier3Container, title, id, complete);
          console.log(title);
        } else if (id >= 50401 && id <=50407) {
          createMissionGridTESTLOGGEDIN(crownTier4Container, title, id, complete);
          console.log(title);
        } else if (id >= 50501 && id <=50507) {
          createMissionGridTESTLOGGEDIN(crownTier5Container, title), id, complete;
          console.log(title);
        } 
    }

    // This adds eventlistener and update Doc to all the checkboxes.
    const arrayOfMissionCheckboxes = document.getElementsByClassName('mission-progress');

    for (let i = 0; i < arrayOfMissionCheckboxes.length; i++) {
      arrayOfMissionCheckboxes[i].addEventListener('click', (e) => {
        // e.preventDefault();
        let checked = e.target.checked; // checked = boolean true or false depending on checked or not checked
        let checkId = Number(e.target.id); // Grabs the event target's id property, makes it into a Number (integar) from a string.
        console.log('checkbox listener working');
        // const docRefS3 = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'); // Document Reference to a users Season 3 dmz Missions Doc
        updateDoc(docRef, {
          [checkId+".complete"] : checked,
        });
    })}
  })
}

// createMissionGridLoggedIn(docTestRef);




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
    await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissions'), { dmzMissionInformation });
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
  setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissionsS3'), dmzMissionsS3); //  Creates season 3 mission tracking doc inside a users UID Doc sub-collection.  This is the newest version I'm working with.
}

onAuthStateChanged(auth, user => {
  if (user) {
    // console.log('onAuthStateChanged function triggered');
    showLoginState(user, 'logged-in');
    showDMZHeaderAuthStatus(user);
    // hideLoginError();
    // dmzMissionDocRef(user); // This function passes the user information, so I can grab the user's uid and grab their appropriate doc and create the grid, based on their "complete"ness.    
    createMissionGridLoggedIn(docTestRef);
  }
  else {
    showDMZHeaderAuthStatus();
    createMissionGridLoggedOut(docTestRef);
    // dmzMissionDocRef(user);
    showLoginState(user, 'logged-out')
    // showLoginForm();
    // showLoginState(user, 'logged-out');
  }
})

// I don't know what this does... I will delete soon if nothing breaks.
// const monitorAuthState = async () => {

// }
// monitorAuthState();

const logout = async () => {
  // Do I need a preventDefault() function?
  console.log('sign out button clicked');

  await signOut(auth);
}
// Testing:

const showLoginState = async (user, state) => {
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

// Testing whether I can put this function OUTSIDE of the authState function, and pass the parameters that I need.


// const dmzMissionDocRef = async (user) => {
//   if (user) {
//     const docRefS3 = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissionsS3'); // Document Reference to a users Season 3 dmz Missions Doc
//     const docRef = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissions');
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {

//       const redactedTier1MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier1.missions;
//       const redactedTier2MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier2.missions;
//       const redactedTier3MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier3.missions;
//       const redactedTier4MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier4.missions;
//       const redactedTier5MissionsArray = docSnap.data().dmzMissionInformation.redacted.tier5.missions;

//       const whiteLotusTier1MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier1.missions;
//       const whiteLotusTier2MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier2.missions;
//       const whiteLotusTier3MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier3.missions;
//       const whiteLotusTier4MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier4.missions;
//       const whiteLotusTier5MissionsArray = docSnap.data().dmzMissionInformation.whiteLotus.tier5.missions;

//       const legionTier1MissionsArray = docSnap.data().dmzMissionInformation.legion.tier1.missions;
//       const legionTier2MissionsArray = docSnap.data().dmzMissionInformation.legion.tier2.missions;
//       const legionTier3MissionsArray = docSnap.data().dmzMissionInformation.legion.tier3.missions;
//       const legionTier4MissionsArray = docSnap.data().dmzMissionInformation.legion.tier4.missions;
//       const legionTier5MissionsArray = docSnap.data().dmzMissionInformation.legion.tier5.missions;

//       const blackMousTier1MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier1.missions;
//       const blackMousTier2MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier2.missions;
//       const blackMousTier3MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier3.missions;
//       const blackMousTier4MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier4.missions;
//       const blackMousTier5MissionsArray = docSnap.data().dmzMissionInformation.blackMous.tier5.missions;

//       const crownTier1MissionsArray = docSnap.data().dmzMissionInformation.crown.tier1.missions;
//       const crownTier2MissionsArray = docSnap.data().dmzMissionInformation.crown.tier2.missions;
//       const crownTier3MissionsArray = docSnap.data().dmzMissionInformation.crown.tier3.missions;
//       const crownTier4MissionsArray = docSnap.data().dmzMissionInformation.crown.tier4.missions;
//       const crownTier5MissionsArray = docSnap.data().dmzMissionInformation.crown.tier5.missions;

//       // Is it possible to make an array of arrays and loop through them with 1 loop/function, instead of triggering this a million times?

//       createMissionGrid(redactedTier1MissionsArray, redactedTier1Container);
//       createMissionGrid(redactedTier2MissionsArray, redactedTier2Container);
//       createMissionGrid(redactedTier3MissionsArray, redactedTier3Container);
//       createMissionGrid(redactedTier4MissionsArray, redactedTier4Container);
//       createMissionGrid(redactedTier5MissionsArray, redactedTier5Container);

//       createMissionGrid(whiteLotusTier1MissionsArray, whiteLotusTier1Container);
//       createMissionGrid(whiteLotusTier2MissionsArray, whiteLotusTier2Container);
//       createMissionGrid(whiteLotusTier3MissionsArray, whiteLotusTier3Container);
//       createMissionGrid(whiteLotusTier4MissionsArray, whiteLotusTier4Container);
//       createMissionGrid(whiteLotusTier5MissionsArray, whiteLotusTier5Container);

//       createMissionGrid(legionTier1MissionsArray, legionTier1Container);
//       createMissionGrid(legionTier2MissionsArray, legionTier2Container);
//       createMissionGrid(legionTier3MissionsArray, legionTier3Container);
//       createMissionGrid(legionTier4MissionsArray, legionTier4Container);
//       createMissionGrid(legionTier5MissionsArray, legionTier5Container);

//       createMissionGrid(blackMousTier1MissionsArray, blackMousTier1Container);
//       createMissionGrid(blackMousTier2MissionsArray, blackMousTier2Container);
//       createMissionGrid(blackMousTier3MissionsArray, blackMousTier3Container);
//       createMissionGrid(blackMousTier4MissionsArray, blackMousTier4Container);
//       createMissionGrid(blackMousTier5MissionsArray, blackMousTier5Container);


//       createMissionGrid(crownTier1MissionsArray, crownTier1Container);
//       createMissionGrid(crownTier2MissionsArray, crownTier2Container);
//       createMissionGrid(crownTier3MissionsArray, crownTier3Container);
//       createMissionGrid(crownTier4MissionsArray, crownTier4Container);
//       createMissionGrid(crownTier5MissionsArray, crownTier5Container);
      
//       console.log('User Signed In and Mission Grid Created');

//     } else {
//       // docSnap.data() will be undefined in this case
//       // console.log("No such document!");

//       // Possibly load the entire grid... WITHOUT checkboxes, along with a header that says "Not logged in - log in to keep track of your progress".
//     }
//   } else { // This is if user does not exist.
//     // Loads Mission Grid From JS Object, without checkboxes.

//     // console.log('not signed in grid creation');

//     const redactedTier1MissionsArray = dmzMissionInformation.redacted.tier1.missions;
//     const redactedTier2MissionsArray = dmzMissionInformation.redacted.tier2.missions;
//     const redactedTier3MissionsArray = dmzMissionInformation.redacted.tier3.missions;
//     const redactedTier4MissionsArray = dmzMissionInformation.redacted.tier4.missions;
//     const redactedTier5MissionsArray = dmzMissionInformation.redacted.tier5.missions;

//     const whiteLotusTier1MissionsArray = dmzMissionInformation.whiteLotus.tier1.missions;
//     const whiteLotusTier2MissionsArray = dmzMissionInformation.whiteLotus.tier2.missions;
//     const whiteLotusTier3MissionsArray = dmzMissionInformation.whiteLotus.tier3.missions;
//     const whiteLotusTier4MissionsArray = dmzMissionInformation.whiteLotus.tier4.missions;
//     const whiteLotusTier5MissionsArray = dmzMissionInformation.whiteLotus.tier5.missions;

//     const legionTier1MissionsArray = dmzMissionInformation.legion.tier1.missions;
//     const legionTier2MissionsArray = dmzMissionInformation.legion.tier2.missions;
//     const legionTier3MissionsArray = dmzMissionInformation.legion.tier3.missions;
//     const legionTier4MissionsArray = dmzMissionInformation.legion.tier4.missions;
//     const legionTier5MissionsArray = dmzMissionInformation.legion.tier5.missions;

//     const blackMousTier1MissionsArray = dmzMissionInformation.blackMous.tier1.missions;
//     const blackMousTier2MissionsArray = dmzMissionInformation.blackMous.tier2.missions;
//     const blackMousTier3MissionsArray = dmzMissionInformation.blackMous.tier3.missions;
//     const blackMousTier4MissionsArray = dmzMissionInformation.blackMous.tier4.missions;
//     const blackMousTier5MissionsArray = dmzMissionInformation.blackMous.tier5.missions;

//     const crownTier1MissionsArray = dmzMissionInformation.crown.tier1.missions;
//     const crownTier2MissionsArray = dmzMissionInformation.crown.tier2.missions;
//     const crownTier3MissionsArray = dmzMissionInformation.crown.tier3.missions;
//     const crownTier4MissionsArray = dmzMissionInformation.crown.tier4.missions;
//     const crownTier5MissionsArray = dmzMissionInformation.crown.tier5.missions;

//     // Is it possible to make an array of arrays and loop through them with 1 loop/function, instead of triggering this a million times?

//     createMissionGridLoggedOut(redactedTier1MissionsArray, redactedTier1Container);
//     createMissionGridLoggedOut(redactedTier2MissionsArray, redactedTier2Container);
//     createMissionGridLoggedOut(redactedTier3MissionsArray, redactedTier3Container);
//     createMissionGridLoggedOut(redactedTier4MissionsArray, redactedTier4Container);
//     createMissionGridLoggedOut(redactedTier5MissionsArray, redactedTier5Container);

//     createMissionGridLoggedOut(whiteLotusTier1MissionsArray, whiteLotusTier1Container);
//     createMissionGridLoggedOut(whiteLotusTier2MissionsArray, whiteLotusTier2Container);
//     createMissionGridLoggedOut(whiteLotusTier3MissionsArray, whiteLotusTier3Container);
//     createMissionGridLoggedOut(whiteLotusTier4MissionsArray, whiteLotusTier4Container);
//     createMissionGridLoggedOut(whiteLotusTier5MissionsArray, whiteLotusTier5Container);

//     createMissionGridLoggedOut(legionTier1MissionsArray, legionTier1Container);
//     createMissionGridLoggedOut(legionTier2MissionsArray, legionTier2Container);
//     createMissionGridLoggedOut(legionTier3MissionsArray, legionTier3Container);
//     createMissionGridLoggedOut(legionTier4MissionsArray, legionTier4Container);
//     createMissionGridLoggedOut(legionTier5MissionsArray, legionTier5Container);

//     createMissionGridLoggedOut(blackMousTier1MissionsArray, blackMousTier1Container);
//     createMissionGridLoggedOut(blackMousTier2MissionsArray, blackMousTier2Container);
//     createMissionGridLoggedOut(blackMousTier3MissionsArray, blackMousTier3Container);
//     createMissionGridLoggedOut(blackMousTier4MissionsArray, blackMousTier4Container);
//     createMissionGridLoggedOut(blackMousTier5MissionsArray, blackMousTier5Container);


//     createMissionGridLoggedOut(crownTier1MissionsArray, crownTier1Container);
//     createMissionGridLoggedOut(crownTier2MissionsArray, crownTier2Container);
//     createMissionGridLoggedOut(crownTier3MissionsArray, crownTier3Container);
//     createMissionGridLoggedOut(crownTier4MissionsArray, crownTier4Container);
//     createMissionGridLoggedOut(crownTier5MissionsArray, crownTier5Container);

//   }

// };


onSnapshot(docTestRef, (doc) => {
  console.log(doc.data(), doc.id);
  // addDMZMissionsS3ObjToDb(db); // Adds the dmzMissionsS3 object to db, mw2-info, dmzMissions.  This is OUTSIDE of the user collection stuff.

  
})


btnLogIn.addEventListener('click', loginEmailPassword);
btnSignOut.addEventListener('click', logout);
btnSignUp.addEventListener('click', createAccount);
btnGoogleSignIn.addEventListener('click', handleGoogle);



console.log('Got to the end of Index.js script');