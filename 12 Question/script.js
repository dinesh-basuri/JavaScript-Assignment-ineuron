// Create a human readable time format using the Date time object
// DD-MM-YYYY HH:mm

let now = new Date();

console.log(now.toLocaleDateString() , now.toTimeString());