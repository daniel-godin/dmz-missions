// DOM Variables:



// DOM ID Variables:
const redactedT1Header = document.getElementById('redactedT1Header');
const redactedT1MissionsContainer = document.getElementById('redactedT1MissionsContainer');

// DOM Faction Column Variables:
const factionColumnNodeList = document.getElementById('contentContainer').childNodes; // Should have 5 child nodes:  Each faction div column.  id='"factionName"Column' with a class of 'faction-column'.
const redactedColumn = document.getElementById('redactedColumn');

// DOM Class Variables:
const tierContainer = document.getElementsByClassName('tier-container');
const tierHeader = document.getElementsByClassName('tier-header');


// Events / Event Handlers

redactedT1Header.addEventListener('click', toggleT1TierVisible);

// Class Event Listeners:
// function classEventListeners() {
//   for (i = 0; i < tierHeader.length; i++) {
//     tierHeader[i].addEventListener('click', (e) => {
//       console.log('tier toggle is working');
//       // Need a way to know toggle classList('hidden') to Parents next sibling.  Could possibly change the structure to make the title headers a direct sibling to tier-mission-container.
//       let parent = e.parentElement;
//       console.log(parent);
//     });
//   }
// }

for (i = 0; i < tierHeader.length; i++) {
  tierHeader[i].addEventListener('click', (e) => {
    console.log('tier toggle is working');
    // Need a way to know toggle classList('hidden') to Parents next sibling.  Could possibly change the structure to make the title headers a direct sibling to tier-mission-container.
    let parent = e.target.parentNode;
    let linkedMissionsContainer = e.target.parentNode.nextElementSibling;
    console.log(parent);
    console.log(linkedMissionsContainer);
    linkedMissionsContainer.classList.toggle('hidden');
  });
}



// Function to show/hide list of tier missions.
// Start with 'just' Redacted T1, then expand to all tiers

function toggleT1TierVisible() {
  // When user clicks a tier title/header, show or hide its cooresponding mission list (tier-missions-container) = Up one level, next sibling, I think.
  redactedT1MissionsContainer.classList.toggle('hidden');
  console.log('toggle working');
}

// function toggleTierVisible(event) {

// }







// Functions To Run On Load:
// classEventListeners();