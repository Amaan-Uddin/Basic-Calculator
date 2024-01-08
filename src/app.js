const calciNumbers = document.querySelectorAll(".calciNumber");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const display = document.getElementById("display");
const backButton = document.getElementById("backButton");

let displayString = "";
let operator = "";
let operand1 = null;

function arithmeticOperation(op1, op2, op) {
  if (op == "+") return op1 + op2;
  else if (op == "*") return op1 * op2;
  else if (op == "-") return op1 - op2;
  else if (op == "/") return op1 / op2;
  else if (op == "^") return Math.pow(op1, op2);
  else return op1 % op2;
}

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayString = displayString.slice(0, displayString.length - 1);
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
      operator = e.target.dataset.val;
      operand1 = display.value;
      displayString = "";
      display.value = null;
    }
  });
});

equals.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(operand1, operator, display.value);
  if (operand1 !== null && operator.length && displayString.length) {
    display.value = arithmeticOperation(Number(operand1), Number(display.value), operator);
    displayString = String(display.value);
  }
});
