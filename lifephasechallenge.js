let myAge = Math.floor(Math.random()*100);

function lifePhase(age) {
    if (age <= 3) {
        return 'baby';
    } else if (age > 3 && age <= 12) {
        return 'child';
    } else if (age > 12 && age <= 19) {
        return 'teen';
    } else if (age > 19 && age <= 64) {
        return 'adult'
    } else if (age > 64 && age <= 110) {
        return 'senior citizen';
    } else {
        return 'It is not a valid age.'
    }
}

console.log("You are " + myAge + " years old, and you are " + lifePhase(myAge));