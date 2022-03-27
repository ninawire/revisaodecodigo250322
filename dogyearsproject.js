/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog? Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.

Create a variable named myAge, and set it equal to your age as a number.*/
let myAge = 39;

/*Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.*/
let earlyYears = 2;

/*Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.*/
earlyYears *= 10.5;

/*Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears.*/
let laterYears = myAge -= 2;

/*Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.*/
laterYears *= 4;

/*Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.*/
let myAgeInDogYears = earlyYears + laterYears;

/*Let’s use a string method next. Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.*/
let myName = 'THATIANA'.toLowerCase();

/*Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:*/
myAge = myAge += 2;
console.log(`My name is ${myName}, I am ${myAge} years old, and I would have ${myAgeInDogYears} in dog years!`);