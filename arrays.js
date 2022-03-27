//Create arrays
let newYearsResolution = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
//Log an array
console.log(newYearsResolution);
//Acessing elements
let listItem = newYearsResolution[1];
console.log(listItem);
//Update elements
newYearsResolution[0] = 'Start a journal';
console.log(newYearsResolution);
//The .length property
console.log(newYearsResolution.length);
//The .push() method
newYearsResolution.push('Try new recipes');
console.log(newYearsResolution);
//The .pop() method
newYearsResolution.pop();
console.log(newYearsResolution);
//Other intersting array methods
newYearsResolution.shift();
console.log(newYearsResolution);
newYearsResolution.unshift('Read 3 books');
console.log(newYearsResolution);
console.log(newYearsResolution.slice(0, 2));
console.log(newYearsResolution.indexOf('Learn to juggle'));
let moreResolutions = ['Buy new cocktail dress', 'Make a career goals list', 'Meet new people'];
let allResolutions = newYearsResolution.concat(moreResolutions);
console.log(allResolutions);
allResolutions.splice(3, 1, 'Learn to play the flute');
console.log(allResolutions);
//Nested Arrays
const sweetSalty = [['chocolate', 'candy', 'lollipop'], ['popcorn', 'potato chips', 'crackers']];
console.log(sweetSalty);
console.log(sweetSalty[0]);
console.log(sweetSalty[1]);
console.log(sweetSalty[0][0]);
console.log(sweetSalty[1][0]);
