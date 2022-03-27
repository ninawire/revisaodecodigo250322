//The for loop
for (let counter = 1; counter < 11; counter++) {
    console.log(counter);
}
console.log('');

//Looping in reverse
for (let counter = 10; counter >= 0; counter--) {
    console.log(counter);
}
console.log('');

//Looping through Arrays
const animals = ['Dog', 'Cat', 'Bear', 'Lion'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log('');

//Nested loops
const domesticAnimals = ['Fish', 'Bird', 'Dog', 'Cat'];
for (let i = 0; i < animals.length; i++) {
    for(let j = 0; j < domesticAnimals.length; j++){
        if(animals[i] === domesticAnimals[j]) {
            console.log('Both arrays have ' + domesticAnimals[j] + '.');
        }
    }
}
console.log('');

//The while loop
let counter2 = 1;
while (counter2 < 6) {
    console.log(counter2);
    counter2++
}
console.log('');

//Do...While statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do{
    cupsAdded++
    console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);
console.log('');

//Break keyword
for (let i = 1; i < 99; i++) {
    if(i > 3) {
        break;
    }
    console.log([i] + ' Banana');
}
console.log('Orange you glad I broke out the loop?');
console.log('');

