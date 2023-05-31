const arrayOfMissionTitles = document.getElementsByClassName('mission-title');


function getMissionTitles(arr) {
  // let arr = arrayOfMissionTitles;


  for (let i = 0; i < arr.length; i++) {
    console.table(arr[i].innerText);
  }
}

getMissionTitles(arrayOfMissionTitles);