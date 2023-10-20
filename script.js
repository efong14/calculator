let display = document.querySelector (".display");
let displayOP = document.querySelector (".displayOP")
let btnClear = document.querySelector (".btnClear")
let btnDel = document.querySelector (".btnDel")
let btnNum = document.querySelectorAll (".btnNum");
let btnDot = document.querySelector (".btnDot");
let btnOp = document.querySelectorAll (".btnOp");
let btnEquals = document.querySelector (".btnEquals");
let button = document.querySelectorAll("button")

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
    btnClear.classList.add ("clicked");
};

function clickNum (a){
    if (display.textContent.length > 10) return;
    if (display.textContent == result || display.textContent == "You can't do that!") {
        clickClear ();
    };
    if (operator != "") {
        displayTwo (a)
    } else { 
        displayOne (a)
    };
    a.classList.add ("clicked");
};

function clickDot () {
    let dotString = display.textContent;
    if (!dotString.includes(".")) {
        clickNum (btnDot);
    };
    btnClear.classList.add ("clicked");
};

function clickOp (a){
    if (numTwo != "") {
        clickEquals ();
        operation (a);
    } else {
        operation (a);
    };
    a.classList.add ("clicked");
};

function clickEquals () { 
    if (operator != "" && numTwo != "") {
        result = operate (operator, +numOne, +numTwo);
        result = Math.round (result * 10000) / 10000
        result = result.toString();
        displayOP.textContent = numOne + " " + operator + " " + numTwo;
        if (result != "Infinity" && result != "NaN") {
            display.textContent = result;
        } else {
            display.textContent = "You can't do that!"
        };
    };
    btnEquals.classList.add ("clicked");
};

function clickDel () {
    if (display.textContent == numOne ) {
        numOne = numOne.slice (0, -1);
        display.textContent = display.textContent.slice (0, -1);
    } else if (display.textContent == numTwo) {
        numTwo = numTwo.slice(0, -1);
        display.textContent = display.textContent.slice (0, -1);
    } else {
        return;
    };
    btnDel.classList.add ("clicked");
};

function clickEnd (e) {
    if (e.propertyName !== "background-color") return;
    this.classList.remove("clicked");
}

btnClear.onclick = () => clickClear ();
btnNum.forEach ((button) => button.onclick = () => clickNum (button));
btnOp.forEach ((button) => button.onclick = () => clickOp (button))
btnDot.onclick = () => clickDot ();
btnDel.onclick = () => clickDel ();
btnEquals.onclick = () => clickEquals ();
button.forEach((buttons) => buttons.addEventListener("transitionend", clickEnd));


window.addEventListener ("keydown", function (e) {
    let keyPress = document.querySelector(`button[keyboard="${e.key}"]`);
    if (e.key === "=" || e.key == "Enter") {
        btnEquals.click();
    } else if (e.key === "Delete" || e.key === "Backspace") {    
        btnDel.click();
    } else if (!keyPress) {
        return;
    } else {
        keyPress.click();
    }
});







