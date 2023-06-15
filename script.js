const numberButtons = Array.from(document.getElementsByClassName("number-button"));
const operationButtons = Array.from(document.getElementsByClassName("operation-button"));

const calcTextBottom = document.getElementById("calc-top-text-bottom");
const deleteButton = document.getElementById("delete-button");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        calcTextBottom.innerText += numberButtons[i].innerText;
    })
}

deleteButton.addEventListener("click", () => {
    calcTextBottom.innerText = calcTextBottom.innerText.substring(0, calcTextBottom.innerText.length - 1);
})

