const digitButton = document.querySelectorAll(".digit-btn");
const operatorButton = document.querySelectorAll(".operator-btn");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const outputPara = document.querySelector(".output");
const logPara = document.querySelector(".log");

const values = {
  current: "",
  previous: "",
  num1: 0,
  num2: 0,
  result: 0,
  operator: "",
};

const calculatorState = {
  intialState: true,
  screenDisplay: "",
  historyDisplay: "",
};

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    setCurrentValue(button.textContent);
    updateDisplay();
    console.log(`Current Value: ${values.current}`);
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    updateValues(button.textContent);
    updateDisplay();
    console.log("Operator selected");
    console.log(values);
    console.log(calculatorState);
  });
});

clearButton.addEventListener("click", () => {
  clearCalculator();
  updateDisplay();
  console.log("Values have been cleared.");
  console.log(values);
  console.log(calculatorState);
});

equalButton.addEventListener("click", () => {
  console.log("Before:");
  console.log(values);
  calculate();
  console.log("After:");
  console.log(values);
  console.log(calculatorState);
  logPara.textContent = calculatorState.screenDisplay;
  outputPara.textContent = values.result;
});

//============
//FUNCTIONS
//============
function updateDisplay() {
  //outputPara.textContent = values.current === null ? "0" : values.current;
  outputPara.textContent = values.current;
  logPara.textContent = calculatorState.screenDisplay;
}

function setCurrentValue(value) {
  values.current += value;
  outputPara.textContent = values.current;
}

function updateValues(operator) {
  if (values.num1 === 0) {
    values.num1 = parseFloat(values.current);
  } else {
    values.num2 = values.current;
  }

  values.current = "";
  values.operator = operator;
  calculatorState.screenDisplay = values.num1 + " " + values.operator;
}

function calculate() {
  if (values.operator === "") return;
  values.num2 = parseFloat(values.current);
  //const num1 = parseFloat(values.previousValue);
  //const num2 = parseFloat(values.currentValue);

  switch (values.operator) {
    case "+":
      values.result = values.num1 + values.num2;
      break;
    case "-":
      values.result = values.num1 - values.num2;
      break;
    case "×":
      values.result = values.num1 * values.num2;
      break;
    case "÷":
      values.result = values.num1 / values.num2;
      break;
    default:
      return;
  }
  calculatorState.screenDisplay =
    values.num1 + " " + values.operator + " " + values.num2 + " =";
  values.num1 = values.result;
  values.num2 = 0;
  values.current = "";
}

function clearCalculator() {
  values.current = "";
  values.previous = "";
  values.num1 = 0;
  values.num2 = 0;
  values.result = 0;
  values.operator = "";
  Object.keys(calculatorState).forEach((key) => {
    calculatorState[key] = "";
  });
}
