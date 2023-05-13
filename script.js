// DOM Variables:

// DOM ID Variables:

// DOM Faction Column Variables:

// DOM Class Variables:
const tierHeader = document.getElementsByClassName('tier-header');

// Events / Event Handlers

// Class Event Handlers:
// Event Handler + Function to hide/show mission container under the header that users clicks.
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










// Functions To Run On Load:
