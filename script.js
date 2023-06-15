const numberButtons = Array.from(document.getElementsByClassName("number-button"));
const operationButtons = Array.from(document.getElementsByClassName("operation-button"));

const calcTextBottom = document.getElementById("calc-top-text-bottom");
const deleteButton = document.getElementById("delete-button");
const clearButton = document.getElementById("clear-button");

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
        } else if (operationButtons[i].innerText == "-") {
            selectedOperation = "subtraction";
        } else if (operationButtons[i].innerText == "*") {
            selectedOperation = "multiplication";
        } else if (operationButtons[i].innerText == "/") {
            selectedOperation = "division";
        }
    })
}

