let display = document.querySelector (".display");
let displayOP = document.querySelector (".displayOP")
let btnClear = document.querySelector (".btnClear")
let btnNum = document.querySelectorAll (".btnNum");
let btnDivide = document.querySelector (".btnDivide");
let btnMultiply = document.querySelector (".btnMultiply");
let btnMinus = document.querySelector (".btnMinus");
let btnAdd = document.querySelector (".btnAdd");
let btnEquals = document.querySelector (".btnEquals");

let operator = "";
let numOne = "";
let numTwo = "";
let result = "";

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
    return a == "+" ? add (b, c) : a == "-" ? 
    subtract (b, c) : a == "x" ?
    multiply (b, c) : a == "÷" ?
    divide (b, c) : "Please try again.";
};


function clearBtn () {
    display.textContent = 0;
    numOne = 0;
    numTwo = 0;
    operator = "";
    displayOP.textContent = "";
    result = "";
};

function clickNum (a){
    if (display.textContent == result) {
        clearBtn ();
    };
    if (operator != "") {
        displayTwo (a)
    } else { 
        displayOne (a)
    };
};

function displayOne (a) {
    if (numOne == 0) {
    display.textContent = a.textContent;
    numOne = a.textContent;
    } else {
    display.textContent += a.textContent;
    numOne += a.textContent;
    };
};
function displayTwo (a) {
    if (numTwo == "") {
        display.textContent = a.textContent;
        numTwo = a.textContent;
    } else {
        display.textContent += a.textContent;
        numTwo += a.textContent;
    };
};

function opBtn (a){
    if (result != "") {
        numOne = result;
    };
    display.textContent = a.textContent;
    operator = a.textContent;
    numTwo = "";
    displayOP.textContent = numOne + " " + operator
};

function equals () { 
    if (numOne != "") {
    result = operate (operator, +numOne, +numTwo);
    display.textContent = result;
    displayOP.textContent = numOne + " " + operator + " " + numTwo
    };
};


btnClear.onclick = () => clearBtn ();
btnNum.forEach ((button) => button.onclick = () => clickNum (button));
btnDivide.onclick = () => opBtn (btnDivide);
btnMultiply.onclick = () => opBtn (btnMultiply) ;
btnMinus.onclick = () => opBtn (btnMinus);
btnAdd.onclick = () => opBtn (btnAdd);
btnEquals.onclick = () => equals ();




