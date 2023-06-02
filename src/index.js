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

import {
  createMissionGrid,
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
  showLoginState,
  btnLogIn,
  btnSignUp,
  btnSignOut,
  btnGoogleSignIn,
  checkBoxFunction,
  txtName,

} from "./dmz-missions-ui";

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

// App Configurations:
// Setting Up Auth From Video:
const loginEmailPassword = async () => {
  console.log('login button clicked');
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}
btnLogIn.addEventListener('click', loginEmailPassword);

const createAccount = async () => {
  console.log('sign up button clicked');

  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  const loginName = txtName.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      name: loginName,
    })
    await setDoc(doc(db, 'users', userCredential.user.uid, 'mw2-trackers', 'dmzMissions'), { });

    await initialDatabaseSetUp(userCredential, loginName) // Experimenting to call a function, instead of doing this INSIDE of the signup thing.  Later I will do this after a verification email is confirmed.
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}
btnSignUp.addEventListener('click', createAccount);

// Sign-in With Google:
const handleGoogle = async () => {
  console.log('google button clicked');

  const provider = await new GoogleAuthProvider();

  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect
  return signInWithPopup(auth, provider);
}
btnGoogleSignIn.addEventListener('click', handleGoogle);


function initialDatabaseSetUp (userCredentials, name) {
  let uid = userCredentials.user.uid;
  const newUser = {
    userName: name,
    userEmail: userCredentials.user.email,
    userActivisionId: "",
    userRegion: "",
    signedUp: "time"
  }
  setDoc(doc(db, 'users', uid), newUser );

  setDoc(doc(db, 'users', uid, 'mw2-trackers', 'dmzMissions'), { dmzMissionInformation });
  

}

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('onAuthStateChanged function triggered');
    showApp();
    // console.table(user);
    showLoginState(user);
    displayUserName(user);

    const uid = user.uid;

    console.log(uid);







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
    console.log('user not logged in');
    showLoginForm();
    // lblAuthState.innerHTML = "You're not logged in.";
  }
})

const monitorAuthState = async () => {

}
monitorAuthState();

const logout = async () => {
  console.log('sign out button clicked');
  await signOut(auth);
}
btnSignOut.addEventListener('click', logout);



// Testing:


// Testing whether I can put this function OUTSIDE of the authState function, and pass the parameters that I need.

const displayUserName = async (user) => {
  const docRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const name = docSnap.data().userName;
    console.log(name);

    profileLinkContainer.insertAdjacentHTML('afterbegin', `
      You're Logged In, ${name}.
    `);


  } else {
    console.log('no info');
  }
}



const dmzMissionDocRef = async (user) => {
  const docRef = doc(db, 'users', user.uid, 'mw2-trackers', 'dmzMissions');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
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

};







// btnLogin.addEventListener("click", loginEmailPassword);
// btnSignup.addEventListener("click", createAccount);
// btnLogout.addEventListener("click", logout);
// btnGoogleSignUp.addEventListener("click", handleGoogle);

// createAuthBox(authContainer);

console.log('before button listeners');





const missionCheckboxArray = document.getElementsByClassName('mission-progress');

for (let i = 0; i < missionCheckboxArray.length; i++) {
  missionCheckboxArray[i].addEventListener('click', (e) => {
    let checkId = Number(e.target.id);
    console.log(checkId);
    console.log('checkbox listener working');
})}

console.log('Got to the end of Index.js script');