const buttons = Array.from(document.getElementsByClassName("small-button"));
const calcTextBottom = document.getElementById("calc-top-text-bottom");
const deleteButton = document.getElementById("delete-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        calcTextBottom.innerText += buttons[i].innerText;
    })
}

deleteButton.addEventListener("click", () => {
    calcTextBottom.innerText = calcTextBottom.innerText.substring(0, calcTextBottom.innerText.length - 1);
})

