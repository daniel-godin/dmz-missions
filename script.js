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
    // console.log('clicking checkboxes is working');
    // console.log(e.target);
    // let parent = e.target.parentNode;
    // let grandParent = e.target.parentNode.parentNode;
    // let greatGreatGrandParent = e.target.parentNode.parentNode.parentNode.parentNode;
    // let tierHead = greatGreatGrandParent.previousElementSibling;
    // let tierStatus = tierHead.lastElementChild;
    
    // console.log(greatGreatGrandParent);
    // console.log(tierHead);
    // console.log(tierStatus);
  });

  missionCheckbox[i].addEventListener('click', (e) => {
    let boxChecked = e.target;
    let tierMissionsContainer = e.target.parentNode.parentNode.parentNode;
    let tierProgressElementToChange = e.target.parentNode.parentNode.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild;
    // console.log(tierProgressElementToChange);
    console.log(tierMissionsContainer);
    tierProgressDisplay(boxChecked, tierMissionsContainer, tierProgressElementToChange);
  });
}



// Function to calculate number of boxes checked in a tier.  Automatically updates number of missions completed.  ??/7.
function tierProgressDisplay(boxChecked, tierMissionsContainer, progressElement) {
  // Need a refresh of redactedT1Progress element.  Right now it just adds another number.
  let status = tierMissionsContainer.querySelectorAll("input[type='checkbox']:checked").length;



  // let status = document.querySelectorAll('#redactedT1Form input[type="checkbox"]:checked').length;
  console.table(status);

  progressElement.innerText = `${status} / 7`;


}

function displayAllTierProgress() {
  
}











// Functions To Run On Load:
tierProgressDisplay();