// TEST:  Creating Objects (maps)

// console.table(dmzMissionObjectDocTemplate);

await setDoc(doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate'), dmzMissionObjectDocTemplate);

const docRef = doc(db, 'users', 'test-template-UID', 'mw2-trackers', 'dmzMissionsTemplate');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.table("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}





























const redactedT1MissionsContainer = document.getElementById('redactedT1MissionsContainer');
const redactedColumn = document.getElementById('redactedColumn');




function createDMZDataGrid () {
  // const testDMZDataContainer = document.getElementById('testDMZDataContainer');

  // Starting with just Redacted
  const redactedObject = docSnap.data().redacted;

  let factionName = redactedObject.factionName;
  let status = redactedObject.status;
  let complete = redactedObject.complete;


  for (let i = 0; i < 5; i++) {
    let tier = redactedObject.tier[i];
    let tierName = redactedObject.tier[i].tierName;
      redactedColumn.insertAdjacentHTML('beforeend', `
        <div class="tier-container">
          <div class="tier-header-container">
            <header class="tier-header">${factionName} ${tierName}:</header>
            <span class='tier-status-container'><p class='tier-status' id='redactedT1Progress'></p></span>
          </div>
          <div class='tier-missions-container hidden'>
          </div>
        </div>
        
      `)
      tierHeader[i].addEventListener('click', showHideMissionContainer);

      for (let j = 0; j < 7; j++) {
        let title = tier.missions[j].title;
        let complete = tier.missions[j].complete;
        let box;
          if (complete === true) {
            box = 'checked';
          } else {
            box = '';
          }

        redactedColumn.firstElementChild.lastElementChild.insertAdjacentHTML('beforeend',`
            <div class="mission-container">
              <div class="mission-title-container">
              <header class='mission-title'>${title}</header>
              <input type='checkbox' class='mission-checkbox' name='' value='' ${box}>
              </div>
            </div>
        `)
      }
  }
}


createDMZDataGrid();