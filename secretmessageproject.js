let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();
console.log(secretMessage);
//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');
console.log(secretMessage);
//Change the word easily to the word right by accessing the index and replacing it.
console.log(secretMessage.indexOf('easily'));
secretMessage.splice(7, 1, 'right');
console.log(secretMessage);
//Use an array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);
//Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
console.log(secretMessage);
//On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join());