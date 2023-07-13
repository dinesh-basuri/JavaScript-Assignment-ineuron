/*Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
*/

let firstNumber = Number(prompt('enter first number'));
let operator = prompt('enter the operator to calculate');
let secondNumber = Number(prompt('enter the second number'));

function add() {
    return firstNumber+secondNumber;
}
function subtract() {
    return firstNumber-secondNumber;
}
function multiply() {
    return firstNumber*secondNumber;
}
function divide() {
    return firstNumber/secondNumber;
}

switch(operator) {
    case '+':
        console.log(add());
    break;
    case '-':
        console.log(subtract());
    break;
    case '*':
        console.log(multiply());
    break;
    case '/':
        console.log(divide());
    break;
}