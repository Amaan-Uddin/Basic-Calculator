const calciNumbers = document.querySelectorAll(".calciNumber");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const display = document.getElementById("display");
const backButton = document.getElementById("backButton");

let displayString = "";

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayString = displayString.slice(0, displayString.length - 1).trimEnd();
  display.value = displayString.length == 0 ? null : displayString;
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayString = "";
  display.value = null;
});

calciNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    displayString += e.target.dataset.val;
    display.value = displayString;
  });
});

operators.forEach((optr) => {
  optr.addEventListener("click", (e) => {
    e.preventDefault();
    if (displayString.length) {
      displayString += e.target.dataset.val;
      display.value = displayString;
    }
  });
});

equals.addEventListener("click", (e) => {
  e.preventDefault();
  if (displayString.length) {
    displayString = displayString.replace(/x/g, "*").replace(/\^/g, "**");
    display.value = eval(displayString);
    displayString = "";
  }
});
