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
    console.log(selectedOperation);
    calcTextBottom.innerText = "";
})

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {
        if (operationButtons[i].innerText == "+") {
            selectedOperation = "addition";
            calcTextTop.innerText = calcTextBottom.innerText;
            calcTextBottom.innerText = "";
        } else if (operationButtons[i].innerText == "-") {
            selectedOperation = "subtraction";
            calcTextTop.innerText = calcTextBottom.innerText;
            calcTextBottom.innerText = "";
        } else if (operationButtons[i].innerText == "*") {
            selectedOperation = "multiplication";
            calcTextTop.innerText = calcTextBottom.innerText;
            calcTextBottom.innerText = "";
        } else if (operationButtons[i].innerText == "/") {
            selectedOperation = "division";
            calcTextTop.innerText = calcTextBottom.innerText;
            calcTextBottom.innerText = "";
        }
    })
}

function add(a, b) {
    // Turns string value in calctextbottom into numbers
    calcTextBottom.innerText = (parseFloat(a) + parseFloat(b));
    calcTextTop.innerText = "";
}

function subtract(a, b) {
    calcTextBottom.innerText = (parseFloat(a) - parseFloat(b));
    calcTextTop.innerText = "";
}
function multiply(a, b) {
    calcTextBottom.innerText = (parseFloat(a) * parseFloat(b));
    calcTextTop.innerText = "";
}

function divide(a, b) {
    calcTextBottom.innerText = (parseFloat(a) / parseFloat(b));
    calcTextTop.innerText = "";
}

function operate(operand1, operation, operand2) {
    if (operation == "addition") {
        add(operand1, operand2);
    } else if (operation == "subtraction") {
        subtract(parseFloat(calcTextTop.innerText), parseFloat(calcTextBottom.innerText));
    } else if (operation == "multiplication") {
        multiply(parseFloat(calcTextTop.innerText), parseFloat(calcTextBottom.innerText));
    } else if (operation == "division") {
        divide(parseFloat(calcTextTop.innerText), parseFloat(calcTextBottom.innerText));
    } else {
    
    }
}
equalsButton.addEventListener("click", () => {
    operate(parseFloat(calcTextTop.innerText), selectedOperation, parseFloat(calcTextBottom.innerText));
})
