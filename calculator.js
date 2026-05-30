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
  num1: 0,
  num2: 0,
  result: null,
  operator: "",
};

const historyArray = [
  "history slot 1", //h1
  "history slot 2", //h2
  "history slot 3", //h3
  "history slot 4", //h4
  "history slot 5", //h5
  "history slot 6", //h6
  "history slot 7", //h7
  "history slot 8", //h8
  "history slot 9", //h9
  "history slot 10", //h10
];

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    values.current += button.textContent;
    output.textContent = parseFloat(values.current).toLocaleString();
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenOperator = button.textContent;

    if (values.current === "" && values.result === null) return;

    if (values.operator !== "" && values.current !== "") {
      values.num2 = parseFloat(values.current);
      calculate();
      values.num1 = values.result;
    } else if (values.current !== "") {
      values.num1 = parseFloat(values.current);
    } else if (values.result !== null) {
      values.num1 = values.result;
    }

    values.operator = chosenOperator;
    values.current = "";

    output.textContent = values.num1.toLocaleString();
    log.textContent = `${values.num1.toLocaleString()} ${values.operator}`;
  });
});

equalButton.addEventListener("click", () => {
  if (values.operator === "" || values.current === "") return;

  values.num2 = parseFloat(values.current);
  calculate();

  log.textContent = `${values.num1.toLocaleString()} ${values.operator} ${values.num2.toLocaleString()}`;
  output.textContent = values.result.toLocaleString();

  values.num1 = values.result;
  values.current = "";
  values.operator = "";
});

clearButton.addEventListener("click", () => {
  clearCalculator();
  console.log("Values have been cleared.");
});

negButton.addEventListener("click", () => {
  values.num1 = parseFloat(values.current) * -1;
  values.current = values.num1.toString();
  console.log(values);
});

//============
//FUNCTIONS
//============
function calculate() {
  if (values.operator === "") return;

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
