let display = document.querySelector (".display");
let displayOP = document.querySelector (".displayOP")
let btnClear = document.querySelector (".btnClear")
let btnDel = document.querySelector (".btnDel")
let btnNum = document.querySelectorAll (".btnNum");
let btnDot = document.querySelector (".btnDot");
let btnOp = document.querySelectorAll (".btnOp");
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

function displayOne (a) {
    if (numOne == "") {
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

function operation (a) {
    if (result != "") {
        numOne = result;
    };
    display.textContent = a.textContent;
    operator = a.textContent;
    numTwo = "";
    displayOP.textContent = numOne + " " + operator;
};

function clickClear () {
    display.textContent = 0;
    numOne = 0;
    numTwo = 0;
    operator = "";
    displayOP.textContent = "";
    result = "";
};

function clickNum (a){
    if (display.textContent == result || display.textContent == "You can't do that!") {
        clickClear ();
    };
    if (operator != "") {
        displayTwo (a)
    } else { 
        displayOne (a)
    };
};

function clickDot () {
    let dotString = display.textContent;
    if (!dotString.includes(".")) {
        clickNum (btnDot);
    };
};

function clickOp (a){
    if (numTwo != "") {
        clickEquals ();
        operation (a);
    } else {
        operation (a);
    };
};

function clickEquals () { 
    if (operator != "" && numTwo != "") {
        result = operate (operator, +numOne, +numTwo);
        result = result.toString();
        displayOP.textContent = numOne + " " + operator + " " + numTwo;
        if (result != "Infinity") {
            display.textContent = result;
        } else {
            display.textContent = "You can't do that!"
        }
    };
};

// function clickDel () {
//     if (display.textContent == result) {
//         result = result.slice (0, -1);
//         display.textContent = display.textContent.slice (0, -1);
//     } else if (numTwo == "" ) {
//         numOne = numOne.slice (0, -1);
//         display.textContent = display.textContent.slice (0, -1);
//     } else {
//         numTwo = numTwo.slice(0, -1);
//         display.textContent = display.textContent.slice (0, -1);
//     };
// };


btnClear.onclick = () => clickClear ();
btnNum.forEach ((button) => button.onclick = () => clickNum (button));
btnOp.forEach ((button) => button.onclick = () => clickOp (button))
btnDot.onclick = () => clickDot ();
// btnDel.onclick = () => clickDel ();
btnEquals.onclick = () => clickEquals ();




