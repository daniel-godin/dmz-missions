// Various Repeatable Functional Tools.

// String parameter.  Returns a camelCase string.
export const camelCase = (str) => {
    let answer = str.toLowerCase();

    // Changing to camelCase:
    return answer.split(" ").reduce((s, c) => 
        s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

// export const findPropFromNotation = (arr, obj) => {
//     for (let i = 0; i < arr.length; i++) { // Loops through the Notation Array and combines them back into a notation for the tempObj notation.
//         let key = arr[i];
//         if (obj && obj[key]) {
//             obj = obj[key];
//         } else {
//             console.log("nested property not found.");
//             break;
//         }
//     }
//     return obj;
// }