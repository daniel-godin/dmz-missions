import { doc, getDoc, onSnapshot, updateDoc, setDoc, } from "firebase/firestore";
import { dataDMZFOBS4 } from "./data/data-dmz-fob-s4";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { recommendLogInBox } from "./ui";


const DMZFOBContainer = document.getElementById('DMZFOBContainer');


const currentFOBTasks = dataDMZFOBS4;
const currentFOBDocName = 'DMZFOBS4';
// const currentFOBSeasonNumberOfTasks = 99; // 99 IS NOT TRUE, IT'S A PLACEHOLDER

onAuthStateChanged(auth, user => {
    if (DMZFOBContainer) { // If DMZFOBContainer is true, it means the user is on the fob.html page.
        if (user) { // IF USER IS TRUE, MEANING IF USER IS LOGGED IN
            // Create logged in FOB grid.
            const docRefFOBGrid = doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`);
            onSnapshot(docRefFOBGrid, (snapshot) => {
                if (snapshot.exists()) {
                    snapshot = snapshot.data();
                    createFOBGrid(snapshot, docRefFOBGrid, user, db);
                } else if (!snapshot.exists()) {
                    setDoc(doc(db, 'users', user.uid, 'mw2-trackers', `${currentFOBDocName}`), currentFOBTasks);
                }
            })
        } else {
            // Create logged OUT FOB grid.
            console.log("dmz fob container and not logged in");
            createFOBGrid(currentFOBTasks, undefined, undefined, undefined);
            recommendLogInBox(DMZFOBContainer);
        }
    }
})

const createFOBGrid = async (obj, docRef, user, db) => {


    const arrayOfPassiveMissionScreens = ["Stash", "Weapons Locker", "Bounty Board", "Communications Station", ]
    // Move this array into the main data object later.
    // 11 items.  11 columns.
    const arrayOfPassiveTasks = [
       "Wallet", "Stash", "Wallet (Crown)", "Stash (Crown)",
        "1st Insured Slot", "2nd Insured Slot", "3rd Insured Slot", "Contraband Stash", "Contraband Stash (Crown)",
        "Bounty Board", "Communications Station",
    ];

    for (let i = 0; i < arrayOfPassiveTasks.length && i < 15; i++) {
        DMZFOBContainer.insertAdjacentHTML('beforeend', `
            <div class='fob-column' data-fob-column-id='${arrayOfPassiveTasks[i]}'>
                <header>${arrayOfPassiveTasks[i]}</header>
            </div>
        `);

    }



}