// DOM Variables:
// DOM ID Variables:
const redactedT1Header = document.getElementById('redactedT1Header');
const redactedT1MissionsContainer = document.getElementById('redactedT1MissionsContainer');

// DOM Faction Column Variables:
const factionColumnNodeList = document.getElementById('contentContainer').childNodes;
const redactedColumn = document.getElementById('redactedColumn');

// DOM Class Variables:
const tierContainer = document.getElementsByClassName('tier-container');
const tierHeader = document.getElementsByClassName('tier-header');


// Events / Event Handlers

redactedT1Header.addEventListener('click', toggleTierVisible);


// Function to show/hide list of tier missions.
// Start with 'just' Redacted T1, then expand to all tiers

function toggleTierVisible() {
  // When user clicks a tier title/header, show or hide its cooresponding mission list (tier-missions-container) = Up one level, next sibling, I think.
  redactedT1MissionsContainer.classList.toggle('hidden');
  console.log('toggle working');
}








// Functions To Run On Load:
