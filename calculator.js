const digitButton = document.querySelectorAll(".digit-btn");
const operatorButton = document.querySelectorAll(".operator-btn");
const negButton = document.getElementById("negate");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const output = document.querySelector(".output");
const log = document.querySelector(".log");
const history = document.querySelector(".history");

const values = {
  current: "",
  currentDisplay: "",
  num1: 0,
  num2: 0,
  result: null,
  operator: "",
};

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    setCurrentValue(button.textContent);
    output.textContent = parseFloat(values.current).toLocaleString();
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    values.operator = button.textContent;
    values.num1 = parseFloat(values.current);
    output.textContent = "";
    values.result === null
      ? (log.textContent = values.num1.toLocaleString() + " " + values.operator)
      : values.result.toLocaleString() + " " + values.operator;
    values.current = "";
  });
});

clearButton.addEventListener("click", () => {
  clearCalculator();
  console.log("Values have been cleared.");
});

equalButton.addEventListener("click", () => {
  calculate();
  output.textContent = values.result.toLocaleString();
  log.textContent =
    values.num1.toLocaleString() +
    " " +
    values.operator +
    " " +
    values.num2.toLocaleString() +
    " =";
  history.textContent =
    values.num1.toLocaleString() +
    " " +
    values.operator +
    " " +
    values.num2.toLocaleString() +
    " = " +
    values.result.toLocaleString();
});

negButton.addEventListener("click", () => {
  values.num1 = parseFloat(values.current) * -1;
  values.current = values.num1.toString();
  console.log(values);
});

//============
//FUNCTIONS
//============
function setCurrentValue(value) {
  values.current += value;
  values.currentDisplay = parseFloat(values.current).toLocaleString();
}

function updateValues(operator) {
  if (values.num1 === 0) {
    values.num1 = parseFloat(values.current);
  } else {
    values.num2 = values.current;
  }

  values.current = "";
  values.operator = operator;
}

function calculate() {
  if (values.operator === "") return;
  values.num2 = parseFloat(values.current);

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
  values.current = "";
}

function clearCalculator() {
  values.current = "";
  values.num1 = 0;
  values.num2 = 0;
  values.result = 0;
  values.operator = "";
  output.textContent = "";
  log.textContent = "";
}
