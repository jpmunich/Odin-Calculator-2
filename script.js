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

function limitNumberToOneDecimalPoint() {
    if (calcTextBottom.innerText.indexOf(".") === -1) {
        calcTextBottom.innerText += decimalButton.innerText;
    }
}

decimalButton.addEventListener("click", () => {
    limitNumberToOneDecimalPoint();
})

deleteButton.addEventListener("click", () => {
    calcTextBottom.innerText = calcTextBottom.innerText.substring(0, calcTextBottom.innerText.length - 1);
})

clearButton.addEventListener("click", () => {
    clearText();
})

function updateText() {
    // Replaces previous answer/operand with the current one and removes the previous operand
    calcTextTop.innerText = calcTextBottom.innerText;
    calcTextBottom.innerText = "";
}

function clearText() {
    // Removes all input
    calcTextBottom.innerText = "";
    calcTextTop.innerText = "";
}

function checkIfOperatingWorks(operation) {
    // Checks whether there are two operands or not
    if (calcTextTop.innerText != "" && calcTextBottom.innerText != "") {
        operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
    }
        selectedOperation = operation;

    // Allows operation to be switched indefinitely without updating text
    if (calcTextBottom.innerText != "") {
        updateText();
    }
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        if (operationButtons[i].innerText == "+") {
            checkIfOperatingWorks("+");
        } else if (operationButtons[i].innerText == "-") {
            checkIfOperatingWorks("-");
        } else if (operationButtons[i].innerText == "*") {
            checkIfOperatingWorks("*");
        } else if (operationButtons[i].innerText == "/") {
            checkIfOperatingWorks("/");
        }
    })
}

function add(a, b) {
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
    if (calcTextBottom.innerText !== NaN && calcTextBottom.innerText != "ERROR") {
        if (operation === "+") { add(operand1, operand2); } 
        if (operation === "-") { subtract(operand1, operand2); } 
        if (operation === "*") { multiply(operand1, operand2); } 
        
        if (operation === "/" && operand2 != 0) {
            divide(operand1, operand2);
        } else if (operation == "/" && operand2 == 0) {
            clearText();
            calcTextBottom.innerText = "ERROR! Calculator Will Clear";
            setTimeout(() => {
                clearText()
            }, 2000)
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


const allowedNumberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const allowedOperationKeys = ["+", "-", "*", "/"];

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "=") {
        pressedEqualsButton();
    }    

    for (let i = 0; i < allowedNumberKeys.length; i++) {
        if (e.key === allowedNumberKeys[i]) {
            calcTextBottom.innerText += allowedNumberKeys[i];
        }
    }
    for (let i = 0; i < allowedOperationKeys.length; i++) {
        if (e.key === allowedOperationKeys[i]) {
            checkIfOperatingWorks(allowedOperationKeys[i]);
        }
    }
    
    if (e.key === ".") {
        limitNumberToOneDecimalPoint();
    }
    if (e.key === "Backspace") {
        calcTextBottom.innerText = calcTextBottom.innerText.substring(0, calcTextBottom.innerText.length - 1);
    }

})
