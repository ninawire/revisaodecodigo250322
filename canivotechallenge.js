let myAge = Math.floor(Math.random()*100);

console.log(`I am ${myAge} years old, can I vote?`);

function canIVote(age) {
    if (age >= 16){
        return 'Yes, you can vote!'
    } else {
        return 'No, you cannot vote right now.'
    }
}

console.log(canIVote(myAge));

