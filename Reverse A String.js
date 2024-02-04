let fullName = "Naimul Hasan Emon";
console.log(fullName);
let reverseName = '';

// // Way 1:
// for (let i = fullName.length - 1; i >= 0; i--) {
//     reverseName += fullName[i];
// }
// console.log(reverseName);

// // Way 2:
// for (let letter of fullName) {
//     reverseName = letter + reverseName;
// }
// console.log(reverseName);

// // Way 3:
let fullNameArray = fullName.split('');
console.log(fullNameArray.reverse().join(''));
