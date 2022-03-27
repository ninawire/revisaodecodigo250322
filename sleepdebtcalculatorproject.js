const getSleepHours = day => {
    switch (day) {
        case 'Sunday' :
            return 8;
        case 'Monday' :
            return 6;
        case 'Tuesday' :
            return 6;
        case 'Wednesday' :
            return 5;
        case 'Thursday' :
            return 6;
        case 'Friday' :
            return 8;
        case 'Saturday' :
            return 10;
    }
}

const getActualSleepHours = () => {
    let sum = getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');
    return sum;
}

const getIdealSleepHours = () => {
    let idealSleepHours = 8;
    return idealSleepHours *= 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
        return "You have been sleeping your ideal sleep hours and got perfect amount of sleep";
    } else if (actualSleepHours > idealSleepHours) {
        return "You are sleeping too much, " + (actualSleepHours - idealSleepHours) + " hours more than you should.";
    } else {
        return "You are sleeping too little, " + (idealSleepHours - actualSleepHours) + " hours less than you should.";
    }
}

console.log(calculateSleepDebt());