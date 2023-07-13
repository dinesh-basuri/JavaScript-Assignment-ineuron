/*
Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let now = new Date();

console.log('What is the year today? ',now.getFullYear());
console.log('What is the month today as a number? ',now.getMonth()+1);
console.log('What is the date today? ',now.getDate());
console.log('What is the day today as a number? ',now.getDay());
console.log('What is the hours now? ',now.getHours());
console.log('What is the minutes now? ',now.getMinutes());


let oldDate = new Date(1970, 0, 1);

let currrentSeconds = now.getSeconds();
let oldSeconds = oldDate.getSeconds();

let elapsedT = currrentSeconds - oldSeconds;

console.log('Time elapsed ',elapsedT);