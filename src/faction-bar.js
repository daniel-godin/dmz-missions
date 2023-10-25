// This is a bar that can be imported into other pages to display a user's faction levels.
import { pageContainer } from "./ui"
import { camelCase } from "./tools";
import { DMZFactionsArray, dataDMZFactionLevels } from "./data/data-dmz-faction-levels";



export const createFactionLevelDisplay = () => {

    console.log("factionLevelObject", dataDMZFactionLevels);

    pageContainer.insertAdjacentHTML('afterbegin', `
        <div class='box' id='factionLevelsContainer'></div>
    `);

    let factionLevelsContainer = document.getElementById('factionLevelsContainer');

    for (let i = 0; i < DMZFactionsArray.length; i++) {

        let objProp = camelCase(DMZFactionsArray[i]);
        let factionLevel = dataDMZFactionLevels[objProp];

        console.log("objProp", objProp, "factionLevel", factionLevel);

        factionLevelsContainer.insertAdjacentHTML('beforeend', `
            <div class='faction-name-container'>
                <p class='faction-name'>${DMZFactionsArray[i]} : ${factionLevel}</p>
                <button class='btn-task-change-amount' data-obj-notation='' data-btn-type='-' data-progress-current='' data-progress-total=''>-</button>
                <button class='btn-task-change-amount' data-obj-notation='' data-btn-type='+' data-progress-current='' data-progress-total=''>+</button>
            </div>
        `)
    }

    // factionLevelsContainer.insertAdjacentHTML('beforeend', `
    //     <div class='faction-name-container hide-btn'>
    //         <button type='button' class='btn-hide'>Hide</button>
    //     </div>
    // `)
}