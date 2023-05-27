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


// Import Non-Firebase Code From Other Files:  THIS IS ONLY FOR TESTING, THIS IS THE OFFICIAL VIDEO GITHUB CODE.
import { 
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
  btnLogin,
  btnSignup,
  btnGoogleSignUp,
  btnLogout,
  txtPassword, 
  lblAuthState,
  btnTestingDocAdd,
  btnTestingDocAddTwo

} from "./ui";


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
const loginEmailPassword = async () => {
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

btnLogin.addEventListener("click", loginEmailPassword);

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
}

btnSignup.addEventListener("click", createAccount);
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
    }
    else {
      showLoginForm();
      lblAuthState.innerHTML = "You're not logged in.";

    }

  })
const monitorAuthState = async () => {

}

monitorAuthState();

const logout = async () => {
  await signOut(auth);

}

btnLogout.addEventListener("click", logout);

// Sign-in With Google:

const handleGoogle = async () => {
  const provider = await new GoogleAuthProvider();

  // FUTURE:  if(desktop) = popup, elseif(mobile) = redirect

  console.log('handleGoogle function triggered');
  return signInWithPopup(auth, provider);


}

btnGoogleSignUp.addEventListener("click", handleGoogle);

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
btnTestingDocAdd.addEventListener("click", testAddDocFunction);

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

const dmzMissionObjectDocTemplate = {
  redacted: {
    status: true, // This should be true for all factions, except crown, where the user would need to own MW2 to "unlock" this set of missions.
    complete: false,
    t1: { 
      status: true, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t2: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t3: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t4: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t5: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
  },
  whiteLotus: {
    status: true, // This should be true for all factions, except crown, where the user would need to own MW2 to "unlock" this set of missions.
    complete: false,
    t1: { 
      status: true, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t2: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t3: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t4: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t5: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
  },
  legion: {
    status: true, // This should be true for all factions, except crown, where the user would need to own MW2 to "unlock" this set of missions.
    complete: false,
    t1: { 
      status: true, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t2: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t3: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t4: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t5: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
  },
  blackMous: {
    status: true, // This should be true for all factions, except crown, where the user would need to own MW2 to "unlock" this set of missions.
    complete: false,
    t1: { 
      status: true, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t2: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t3: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t4: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t5: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
  },
  crown: {
    status: false, // This should be true for all factions, except crown, where the user would need to own MW2 to "unlock" this set of missions.
    complete: false,
    t1: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t2: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t3: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t4: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
    t5: { 
      status: false, // true for all t1, false for all others, to start.
      complete: false,
      mission1: {
        status: false,
        complete: false,
        title: ""
      },
      mission2: {
        status: false,
        complete: false,
        title: ""
      },
      mission3: {
        status: false,
        complete: false,
        title: ""
      },
      mission4: {
        status: false,
        complete: false,
        title: ""
      },
      mission5: {
        status: false,
        complete: false,
        title: ""
      },
      mission6: {
        status: false,
        complete: false,
        title: ""
      },
      mission7: {
        status: false,
        complete: false,
        storyMission: true,
        title: ""
      }, 
    },
  }
};

// console.table(dmzMissionObjectDocTemplate);

// await setDoc(doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate'), dmzMissionObjectDocTemplate);

const docRef = doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.table("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

// JS File Creates entire Grid in div 'testing-dmz-data'

const testDMZDataContainer = document.getElementById('testDMZDataContainer');

function createDMZDataGrid () {
  console.log('create dmz grid function working');





  // let dataIWant = docSnap.data().blackMous.t2.mission2.title;

  for (let i = 1; i < 8; i++) {
    let thing = docSnap.data().blackMous.t[i].mission[i].title;
    console.log(thing);
  }





  // console.log(dataIWant);


  // let q = query(docRef, where(""))

  testDMZDataContainer.insertAdjacentHTML('afterbegin', `
    <h1>DMZ DATA GRID INSERT HTML WORKING</h1>
  
  
  `
      
    )
}


createDMZDataGrid();




