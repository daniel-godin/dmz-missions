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

for (i = 0; i < tierHeader.length; i++) {
  tierHeader[i].addEventListener('click', (e) => {
    // console.log('tier toggle is working');
    // Need a way to know toggle classList('hidden') to Parents next sibling.  Could possibly change the structure to make the title headers a direct sibling to tier-mission-container.
    let parent = e.target.parentNode;
    let linkedMissionsContainer = e.target.parentNode.nextElementSibling;
    // console.log(parent);
    // console.log(linkedMissionsContainer);
    linkedMissionsContainer.classList.toggle('hidden');
  });
}

// Event handler every time user clicks on a mission checkbox.
for (i = 0; i < missionCheckbox.length; i++) {
  missionCheckbox[i].addEventListener('click', (e) => {
    let boxChecked = e.target;
    let tierMissionsContainer = e.target.parentNode.parentNode.parentNode;
    let tierProgressElementToChange = e.target.parentNode.parentNode.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild;
    // console.log(tierProgressElementToChange);
    // console.log(tierMissionsContainer);
    tierProgressDisplay(boxChecked, tierMissionsContainer, tierProgressElementToChange);
  });
}

// Testing how to export all event listeners:
function eventListeners() {
  for (i = 0; i < tierHeader.length; i++) {
    tierHeader[i].addEventListener('click', (e) => {
      console.log('tier toggle is working');
      // Need a way to know toggle classList('hidden') to Parents next sibling.  Could possibly change the structure to make the title headers a direct sibling to tier-mission-container.
      let parent = e.target.parentNode;
      let linkedMissionsContainer = e.target.parentNode.nextElementSibling;
      // console.log(parent);
      // console.log(linkedMissionsContainer);
      linkedMissionsContainer.classList.toggle('hidden');
    });
  }
  
  // Event handler every time user clicks on a mission checkbox.
  for (i = 0; i < missionCheckbox.length; i++) {
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

  for (i = 0; i < tierStatus.length; i++) {
    let status = tierStatus[i].parentNode.parentNode.querySelectorAll("input[type='checkbox']:checked").length;
    // let status = e.querySelectorAll("input[type='checkbox']:checked").length;
    tierStatus[i].innerText = `${status} / 7`;
    // console.log(`${status}`);
    // console.log(`tier status working`);
    
  }
  
}













// Functions To Run On Load:
// tierProgressDisplay();
displayAllTierProgress();









// Loading everything from the original super nested object
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

// export function createMissionGrid (missionsArr, tierContainer) {
//   for (let i = 0; i < missionsArr.length; i++) {
//     let title = missionsArr[i].title;
//     let complete = missionsArr[i].complete;
//     let checkboxId = missionsArr[i].missionId; // What I really want... is a way to 'map' this checkbox to it's sibling 'completed' true/false.

//     if (complete === true) {
//       tierContainer.insertAdjacentHTML('beforeend', `
//         <div class="mission-container">
//           <header class="mission-title">${title}</header>
//           <input type="checkbox" name="" id="${checkboxId}" class="mission-progress" checked>
//         </div>`
//     )} else {
//       tierContainer.insertAdjacentHTML('beforeend', `
//         <div class="mission-container">
//           <header class="mission-title">${title}</header>
//           <input type="checkbox" name="" id="${checkboxId}" class="mission-progress">
//         </div>`
//     )}
//   }
// }

// export function createMissionGridLoggedOut (missionsArr, tierContainer) {
//   for (let i = 0; i < missionsArr.length; i++) {
//     let title = missionsArr[i].title;
//     tierContainer.insertAdjacentHTML('beforeend', `
//       <div class="mission-container">
//         <header class="mission-title">${title}</header>
//       </div>`
//   )}
// }