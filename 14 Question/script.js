// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let number = Number(prompt('Enter a number to check whether it is odd or even'));

// let number = 10;

if(number%2 == 0) {
  console.log('even number');
}
else {
  console.log('odd');
}