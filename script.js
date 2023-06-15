const numberButtons = Array.from(document.getElementsByClassName("number-button"));
const operationButtons = Array.from(document.getElementsByClassName("operation-button"));

const calcTextBottom = document.getElementById("calc-top-text-bottom");
const calcTextTop = document.getElementById("calc-top-text-top");
const deleteButton = document.getElementById("delete-button");
const clearButton = document.getElementById("clear-button");
const equalsButton = document.getElementById("equals-button");

let selectedOperation = "none";

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        calcTextBottom.innerText += numberButtons[i].innerText;
    })
}

deleteButton.addEventListener("click", () => {
    calcTextBottom.innerText = calcTextBottom.innerText.substring(0, calcTextBottom.innerText.length - 1);
})

clearButton.addEventListener("click", () => {
    clearText();
})

function updateText() {
    calcTextTop.innerText = calcTextBottom.innerText;
    calcTextBottom.innerText = "";
}

function clearText() {
    calcTextBottom.innerText = "";
    calcTextTop.innerText = "";
}
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        if (operationButtons[i].innerText == "+") {
            // If there is input 
            if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
                operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
            }
                selectedOperation = "addition";
            if (calcTextBottom.innerText != "") {
                updateText();
            }
        } else if (operationButtons[i].innerText == "-") {
            if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
                operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
            }
                selectedOperation = "subtraction";
            if (calcTextBottom.innerText != "") {
                updateText();
            }
        } else if (operationButtons[i].innerText == "*") {
            if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
                operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
            }
                selectedOperation = "multiplication";
            if (calcTextBottom.innerText != "") {
                updateText();
            }
        } else if (operationButtons[i].innerText == "/") {
            if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
                operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
            }
                selectedOperation = "division";
            if (calcTextBottom.innerText != "") {
                updateText();
            }
        }
    })
}

function add(a, b) {
    // Turns string value in calctextbottom into numbers
    calcTextBottom.innerText = (a + b);
    calcTextBottom.innerText = calcTextBottom.innerText.toString();
    calcTextTop.innerText = "";
}

function subtract(a, b) {
    calcTextBottom.innerText = (a - b);    
    calcTextTop.innerText = "";
}
function multiply(a, b) {
    calcTextBottom.innerText = (a * b);
    calcTextTop.innerText = "";
}

function divide(a, b) {
    calcTextBottom.innerText = (a / b);
    calcTextTop.innerText = "";
}

function operate(operand1, operation, operand2) {
    if (calcTextBottom.innerText !== NaN) {
        if (operation == "addition") {
            add(operand1, operand2);
        } else if (operation == "subtraction") {
            subtract(operand1, operand2);
        } else if (operation == "multiplication") {
            multiply(operand1, operand2);
        } else if (operation == "division") {
            if (operand2 != 0) {
                divide(operand1, operand2);
            } else {
                clearText();
                calcTextBottom.innerText = "ERROR";
            }
        } else {
            updateText();
        }
    }
}

function pressedEqualsButton() {
    if (calcTextBottom.innerText != "" && calcTextTop.innerText != "") {
        operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
    } else if (calcTextBottom.innerText == "") {
        calcTextBottom.innerText = calcTextTop.innerText;
        calcTextTop.innerText = "";
    }
}

equalsButton.addEventListener("click", () => {
    pressedEqualsButton();
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        pressedEqualsButton();
    }    
})
