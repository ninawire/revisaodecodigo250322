//Function Declarations
function greetWorld(){
    console.log('Hello World!');
}
function getReminder(){
    console.log('Water the plants!');
}
function greetInSpanish(){
    console.log('Buenas tardes!');
}
//Function calls
greetWorld();
greetInSpanish();
getReminder();

//Paramenters and arguments
function sayThanks(name) {
    console.log(`Thanks for your purchase ${name}!`);
}

sayThanks('Cole');
sayThanks('Evan');
sayThanks('Dora');

//Default parameters
function sayHi (name = 'Stranger'){
    console.log(`Hi ${name}!`);
}

sayHi();
sayHi('Cole');
sayHi('Dora');

//Return
function rectangleArea(width, height){
    let area = width * height;
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return area;
}

console.log(rectangleArea(5, 7));
console.log(rectangleArea(5, -1));

//Function expression
let calculateArea = function(width, height) {
    let area = width * height;
    return area;
}

console.log(calculateArea(3, 8));

//Arrow functions
let recArea = (width, height) => {
    let area = width * height;
    return area;
}

console.log(recArea(8, 4));

//Concise body arrow function
let squareNum = num => num*num;
console.log(squareNum(5));

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Monday'));
console.log(plantNeedsWater('Wednesday'));
