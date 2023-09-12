let operator = "*";
let numOne = 5;
let numTwo = 5;

function add (a, b) {
   return a + b;
};
function subtract (a, b) {
    return a - b;
};
function multiply (a, b) {
    return a * b;
};
function divide (a, b) {
    return a / b;
};

function operate (a, b, c) {
    return a == "+" ? console.log(add (b, c)) : a == "-" ? 
    console.log(subtract (b, c)) : a == "*" ?
    console.log(multiply (b, c)) : a == "/" ?
    console.log(divide (b, c)) : "Please try again."
}

operate (operator, numOne, numTwo)

