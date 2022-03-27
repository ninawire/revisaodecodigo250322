function toEmoticon(name) {
    switch (name) {
        case 'srug' :
            return '|_{"}_|';
        case 'smiley face' :
            return ':)';
        case 'frowny face' :
            return ':(';
        case 'winky face' :
            return ';)';
        case 'heart' :
            return '<3';
        default :
            return "|_(* ~ *)_|";
    }
}

console.log(toEmoticon('srug'));
console.log(toEmoticon('smiley face'));
console.log(toEmoticon('frowny face'));
console.log(toEmoticon('winky face'));
console.log(toEmoticon('heart'));
console.log(toEmoticon(''));

