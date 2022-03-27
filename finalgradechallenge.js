let finalGrade = (grade1, grade2, grade3) => {
    let average = Math.floor((grade1 + grade2 + grade3) / 3);
    if (average <= 59) {
        return 'F';
    } else if (average > 59 && average <= 69) {
        return 'D';
    } else if (average > 69 && average <= 79) {
        return 'C';
    } else if (average > 79 && average <= 89) {
        return 'B';
    } else if (average > 89 && average <= 100) {
        return 'A';
    } else {
        return 'Invalid grade, try again please.';
    }
}

console.log(finalGrade(80, 90, 100));
