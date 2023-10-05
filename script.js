let display = document.querySelector (".display");
let btnClear = document.querySelector (".btnClear")
let btnNum = document.querySelectorAll (".btnNum");
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
function clickNum (a){
    if (operator != "") {
        displayTwo (a)
    } else { 
        displayOne (a)
    }
};

function displayOne (a) {
    if (numOne == 0) {
    display.textContent = a.textContent;
    } else {
    display.textContent += a.textContent;
    };
    numOne += a;
}
function displayTwo (a) {
    if (numTwo == 0) {
        display.textContent = a.textContent;
    } else {
        display.textContent += a.textContent;
    };
    numTwo += a;
}


function opBtn (a){
    display.textContent = a;
    operator = a;
};


btnClear.onclick = () => clearBtn ()
btnNum.forEach ((button) => button.onclick = () => clickNum (button))
btnDivide.onclick = () => opBtn ("/")
btnMultiply.onclick = () => opBtn ("*")
btnMinus.onclick = () => opBtn ("-")
btnAdd.onclick = () => opBtn ("+")
// btnEquals.onclick = () => 




