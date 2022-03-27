//If statement
let sale = true;
if (sale) {
    console.log('Time to buy!');
}

//If...Else statement
sale = false;
if (sale) {
    console.log('Time to buy');
} else {
    console.log("Let's wait for a sale");
}

//Comparison operators
console.log(10 < 12); //Less than
console.log(20 > 1); //Greater than
console.log(1 <= 1); //Less or equal
console.log(2 >= 2); //Great or equal
console.log(0 === 0); //Equal
console.log(3 !== 4); //Different
//All must return true

//Logical Operators
// && - And / || - or / ! - not
let mood = 'Sleepy'
let tiredness = 6;

if (mood === 'Sleepy' && tiredness >= 8) {
    console.log('Time to bed!');
} else {
    console.log('Not bedtime yet!')
}

//Ternary operator
//This:
let isNightTime = true;

if (isNightTime) {
    console.log('Turn the lights on!');
} else {
    console.log('Turn the lights off!');
}
//Is the same of:
isNightTime ? console.log('Turn the lights on!') : console.log('Turn the lights off!');

//Else...if statement
let stopLight = 'Red';

if (stopLight === 'Green') {
    console.log('You can go!');
} else if (stopLight === 'Yellow') {
    console.log('Attention, slow down.');
} else if (stopLight === 'Red') {
    console.log('Stop!');
} else {
    console.log('Caution, the stoplight is not working!');
}

//The switch keyword
let groceryItem = 'Papaya';

switch (groceryItem) {
    case 'Tomato' :
        console.log('Tomatoes are $0.49');
        break;
    case 'Lime' :
        console.log('Limes are $1.49');
        break;
    case 'Papaya' :
        console.log('Papayas are $1.29');
        break;
    default : 
        console.log('Invalid item');
        break;
}