const numberButtons = Array.from(document.getElementsByClassName("number-button"));
const operationButtons = Array.from(document.getElementsByClassName("operation-button"));
const decimalButton = document.getElementById("decimal-button");

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

decimalButton.addEventListener("click", () => {
    if (calcTextBottom.innerText.indexOf(".") === -1) {
        calcTextBottom.innerText += decimalButton.innerText;
    }
})


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

function checkIfOperatingWorks(operation) {
    if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
        operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
    }
        selectedOperation = operation;
    if (calcTextBottom.innerText != "") {
        updateText();
    }
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        if (operationButtons[i].innerText == "+") {
            checkIfOperatingWorks("addition");
        } else if (operationButtons[i].innerText == "-") {
            checkIfOperatingWorks("subtraction");
        } else if (operationButtons[i].innerText == "*") {
            checkIfOperatingWorks("multiplication");
        } else if (operationButtons[i].innerText == "/") {
            checkIfOperatingWorks("division");
        }
    })
}

function add(a, b) {
    // Turns string value in calctextbottom into numbers
    calcTextBottom.innerText = (a + b);
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
    if (e.key === "Enter" || e.key === "=") {
        pressedEqualsButton();
    }    
    if (e.key === "1") {
        calcTextBottom.innerText += "1";
    }
    if (e.key === "2") {
        calcTextBottom.innerText += "2";
    }
    if (e.key === "3") {
        calcTextBottom.innerText += "3";
    }
    if (e.key === "4") {
        calcTextBottom.innerText += "4";
    }
    if (e.key === "5") {
        calcTextBottom.innerText += "5";
    }
    if (e.key === "6") {
        calcTextBottom.innerText += "6";
    }
    if (e.key === "7") {
        calcTextBottom.innerText += "7";
    }
    if (e.key === "8") {
        calcTextBottom.innerText += "8";
    }
    if (e.key === "9") {
        calcTextBottom.innerText += "9";
    }
    if (e.key === "+") {
        checkIfOperatingWorks("addition");
    }
    if (e.key === "-") {
        checkIfOperatingWorks("subtraction");
    }
    if (e.key === "*") {
        checkIfOperatingWorks("multiplication");
    }
    if (e.key === "/") {
        checkIfOperatingWorks("division");
    }
})
