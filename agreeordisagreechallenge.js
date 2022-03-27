function agreeDisagree (string1, string2) {
    if (string1 === string2) {
        return 'Yey! You agree!';
    } else {
        return 'You disagree'
    }
}

console.log(agreeDisagree('5', '3'));
console.log(agreeDisagree('5', '5'));

console.log(agreeDisagree('blue', 'grey'));
console.log(agreeDisagree('red', 'red'));