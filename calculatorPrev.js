const digitButton = document.querySelectorAll(".digit-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const divisionButton = document.getElementById("divide");
const multiplicationButton = document.getElementById("multiply");
const subtractionButton = document.getElementById("subtract");
const additionButton = document.getElementById("add");
const outputPara = document.querySelector(".output");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const logPara = document.querySelector(".log");

let currentValue = "";
let previousValue = "";
let displayValue = "";
let operator = null;
let calculatedValue = 0;
updateDisplay();

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentValue += button.textContent;
    outputPara.textContent = currentValue;
    updateDisplay();
    console.log(`Current Value: ${currentValue}`);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentValue === "") return;
    if (previousValue !== "") {
      // Perform calculation based on previousValue, currentValue, and operator
      // For now, just log the values
      console.log("Previous Value:", previousValue);
      console.log("Current Value:", currentValue);
    }
    previousValue = currentValue;
    currentValue = "";
    displayValue = previousValue + " " + button.textContent;
    updateDisplay();
    console.log(`Display Value: ${displayValue}`);
    console.log(`Previous Value: ${previousValue}`);
    console.log(`Current Value: ${currentValue}`);
  });
});

function updateDisplay() {
  outputPara.textContent = currentValue === "" ? "0" : currentValue;
  logPara.textContent = displayValue;
}

clearButton.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  displayValue = "";
  updateDisplay();
  console.log("Values cleared");
});

additionButton.addEventListener("click", () => {
  if (currentValue === "") return;
  if (previousValue !== "") {
    calculate();
  }
  operator = "+";
  previousValue = currentValue;
  currentValue = "";
  displayValue = previousValue + " " + operator;
  updateDisplay();
  console.log(`Addition Operator Selected: ${displayValue}`);
});

equalButton.addEventListener("click", () => {
  if (currentValue === "" && previousValue === "" && operator === null) return;
  if (operator === null) {
    logPara.textContent = currentValue;
    return;
  }
  calculate();
  operator = null;
});

function calculate() {
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  let calcResult;

  switch (operator) {
    case "+":
      calcResult = num1 + num2;
      break;
    case "-":
      calcResult = num1 - num2;
      break;
    case "*":
      calcResult = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      calcResult = num1 / num2;
      break;
    default:
      return;
  }

  currentValue = calcResult.toString();
  previousValue = "";
  updateDisplay();
  console.log(`Result: ${calcResult}`);
}

function calcuateAddition() {
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  const displayCalculation = `${num1} + ${num2}`;
  calculatedValue = num1 + num2;
  currentValue = calculatedValue.toString();
  previousValue = "";
  updateDisplay();
  console.log(`Addition Performed: ${displayCalculation} = ${calculatedValue}`);
}
//-------------------------------------------------------------------

//const digitButton = document.querySelectorAll(".digit-btn");
//const operatorButtons = document.querySelectorAll(".operator-btn");
//const equalsButton = document.getElementById("equals");
//const clearButton = document.getElementById("clear");
//const outputPara = document.getElementById("output");

//let currentInput = "";
//let previousInput = "";
//let operator = null;

/*
let currentValue = "";

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentValue += button.textContent;
    outputPara.textContent = currentValue;
  });
  updateDisplay();
  console.log(currentValue);
});

// let currentInput = "";
// let previousInput = "";
// let operator = null;


digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    operator = button.textContent;
    previousInput = currentInput;
    currentInput = "";
  });
});

equalsButton.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "" || operator === null) return;
  calculate();
  operator = null;
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
});

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = "";
  updateDisplay();
}


function updateDisplay() {
  outputPara.textContent = currentInput || "0";
}
*/
