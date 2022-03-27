var favoriteFood; // Creates a variable without value
favoriteFood = 'Pizza'; // Atributes a value to variable
var numOfSlices = 8; // Creates a variable with value

//Prints variable value
console.log(favoriteFood); 
console.log(numOfSlices);

let changeMe = true; // Can have a value reassigned
const dontChange = true; // Constant, can´t be reassigned after the value was set. Can't be declared with no value

console.log(changeMe);
console.log(dontChange);

//Mathematical assignment operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

console.log(levelUp += 5); //Adds 5 and prints 15
console.log(powerLevel -= 100); //Subtracts 100 and prints 8901
console.log(multiplyMe *= 11); //Multiplies by 11 and prints 352
console.log(quarterMe /= 4); //Quarter and prints 288

//Increment and decrement operators
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar); //4
console.log(lostDollar); //49

//String concatenation
let favoriteAnimal = 'dog';
console.log('My favorite animal is ' + favoriteAnimal); //My favorite animal is dog

//String interpolation
let myName = 'Thatiana';
let myCity = 'Porto';
console.log(`My name is ${myName} and I live in ${myCity}.`); //My name is Thatiana and I live in Porto.
//Attention that, to work, interpolation must be between (` `) and not (' ')

//typeof Operator
let newVariable = 'Playing around with typeof';
console.log(typeof newVariable); //string
newVariable = 1;
console.log(typeof newVariable); //number

