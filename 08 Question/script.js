// Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

/*
let word = '  hello  ';

console.log('before trim: ',word.length);

let trimWord = word.trim();

console.log('after time: ',trimWord.length);
*/

// we can also declare our own function instead of using inbuilt function 

/*
String.prototype.truelength = function() {
  console.log(this.trim().length);
}

let word = '  hello  ';

console.log(word.truelength());
*/