let display = document.querySelector (".display");
let btnClear = document.querySelector (".btnClear")
let btnOne = document.querySelector (".btnOne");
let btnTwo = document.querySelector (".btnTwo");
let btnThree = document.querySelector (".btnThree");
let btnFour = document.querySelector (".btnFour");
let btnFive = document.querySelector (".btnFive");
let btnSix = document.querySelector (".btnSix");
let btnSeven = document.querySelector (".btnSeven");
let btnEight = document.querySelector (".btnEight");
let btnNine = document.querySelector (".btnNine");
let btnZero = document.querySelector (".btnZero");
let btnDot = document.querySelector (".btnDot");
let btnDivide = document.querySelector (".btnDivide");
let btnMultiply = document.querySelector (".btnMultiply");
let btnMinus = document.querySelector (".btnMinus");
let btnAdd = document.querySelector (".btnAdd");
let btnEquals = document.querySelector (".btnEquals");

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
    console.log(divide (b, c)) : "Please try again.";
};

operate (operator, numOne, numTwo);

// display.textContent = ops.operator + ops.numOne + ops.numtwo
// let ops = {
//     operator : "*",
//     numOne : display.textContent,
//     numtwo : 5
// };
// operate (ops.operator, ops.numOne, ops.numTwo);

btnClear.onclick = () => display.textContent = ""
btnOne.onclick = () => display.textContent += "1";
btnTwo.onclick = () => display.textContent += "2";
btnThree.onclick = () => display.textContent += "3";
btnFour.onclick = () => display.textContent += "4";
btnFive.onclick = () => display.textContent += "5";
btnSix.onclick = () => display.textContent += "6";
btnSeven.onclick = () => display.textContent += "7";
btnEight.onclick = () => display.textContent += "8";
btnNine.onclick = () => display.textContent += "9";
btnZero.onclick = () => display.textContent += "0";





