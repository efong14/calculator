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

let operator = "";
let numOne = "";
let numTwo = "";

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

function clearBtn () {
    display.textContent = 0;
    numOne = 0;
    numTwo = 0;
    operator = ""
};
function numberBtn (a){
    if (operator != "") {
        if (numTwo == 0) {
            display.textContent = a;
        } else {
            display.textContent += a;
        };
        numTwo += a;
    } else { 
        if (numOne == 0) {
            display.textContent = a;
        } else {
            display.textContent += a;
        };
        numOne += a;
    }
};
function opBtn (a){
    display.textContent = a;
    operator = a;
};


// display.textContent = ops.operator + ops.numOne + ops.numtwo
// let ops = {
//     operator : "*",
//     numOne : display.textContent,
//     numtwo : 5
// };
// operate (ops.operator, ops.numOne, ops.numTwo);



btnClear.onclick = () => clearBtn ()
btnOne.onclick = () => numberBtn (1);
btnTwo.onclick = () => numberBtn (2);
btnThree.onclick = () => numberBtn (3);
btnFour.onclick = () => numberBtn (4);
btnFive.onclick = () => numberBtn (5);
btnSix.onclick = () => numberBtn (6);
btnSeven.onclick = () => numberBtn (7);
btnEight.onclick = () => numberBtn (8);
btnNine.onclick = () => numberBtn (9);
btnZero.onclick = () => numberBtn (0);
btnDivide.onclick = () => opBtn ("/")
btnMultiply.onclick = () => opBtn ("*")
btnMinus.onclick = () => opBtn ("-")
btnAdd.onclick = () => opBtn ("+")
// btnEquals.onclick = () => 



btnEquals

// function btnOp



