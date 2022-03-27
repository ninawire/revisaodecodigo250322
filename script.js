/*Prints on terminal*/
console.log('Hello World!');
/* This is a block comment
that continues till I 
close it with*/

// This is a inline comment

console.log('This is a string.');
console.log(5); /*now we have a number*/

console.log('Arithmetic Operators');
console.log(39+3.5);
console.log(2022-1969);
console.log(65/240);
console.log(0.2708*100);

console.log('String ' + 'concatenation.');

//Properties: 
console.log('Using .length property'.length); //Prints 21, the length of the string.

//Methods:
//No arguments:
console.log('.touppercase method'.toUpperCase()); //Prints .TOUPPERCASE METHOD
console.log('   Remove whitespace before and after string     '.trim()); //Prints Remove whitespace before and after string
//With arguments:
console.log('Starts with...'.startsWith('S')); //Prints true

//Built-in Objects:
//Math:
console.log(Math.random()); //Prints a random number between 0 and 1
console.log(Math.floor(Math.random()*50)); //Math.floor() rounds the number down to the nearest. The Math.random()*50 will generate a random number between 0 and 50
console.log(Math.ceil(Math.random()*100));
console.log(Number.isInteger(10));
console.log(Number.isInteger(0.2));