const digitButton = document.querySelectorAll(".digit-btn");
const operatorButton = document.querySelectorAll(".operator-btn");
const decimalButton = document.getElementById("decimal");
const negButton = document.getElementById("negate");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const clearHistory = document.getElementById("clearHistory");
const output = document.querySelector(".output");
const log = document.querySelector(".log");
const historyDisplay = document.querySelector(".history");

const values = {
  current: "",
  num1: 0,
  num2: 0,
  result: null,
  operator: "",
};

const storedHistory = [];

const valuesHistory = {
  historyNum1: 0,
  historyNum2: 0,
  historyOperator: "",
  historyResult: 0,
};

digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    values.current += button.textContent;
    output.textContent = parseFloat(values.current).toLocaleString("en-US", {
      maximumFractionDigits: 20,
    });
    console.log(values.current);
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

    output.textContent = values.num1.toLocaleString("en-US", {
      maximumFractionDigits: 20,
    });
    log.textContent = `${values.num1.toLocaleString("en-US", {
      maximumFractionDigits: 20,
    })} ${values.operator}`;
  });
});

equalButton.addEventListener("click", () => {
  if (values.operator === "" || values.current === "") return;

  values.num2 = parseFloat(values.current);
  calculate();

  valuesHistory.historyNum1 = values.num1;
  valuesHistory.historyNum2 = values.num2;
  valuesHistory.historyOperator = values.operator;
  valuesHistory.historyResult = values.result;

  log.textContent = `${values.num1.toLocaleString("en-US", {
    maximumFractionDigits: 20,
  })} ${values.operator} ${values.num2.toLocaleString("en-US", {
    maximumFractionDigits: 20,
  })}`;

  output.textContent = values.result.toLocaleString("en-US", {
    maximumFractionDigits: 20,
  });

  updateHistory();
  historyOutput();

  values.num1 = values.result;
  values.current = "";
  values.operator = "";
  console.log(storedHistory);
});

clearButton.addEventListener("click", () => {
  clearCalculator();
  console.log("Values have been cleared.");
});

negButton.addEventListener("click", () => {
  if (values.current !== "") {
    values.current = (parseFloat(values.current) * -1).toString();
    output.textContent = Number(values.current).toLocaleString("en-US", {
      maximumFractionDigits: 20,
    });
  } else if (values.result !== null) {
    values.result = values.result * -1;
    output.textContent = values.result.toLocaleString("en-US", {
      maximumFractionDigits: 20,
    });
  }
});

decimalButton.addEventListener("click", () => {
  if (values.current.includes(".")) {
    return;
  } else {
    values.current += ".";
  }
});

clearHistory.addEventListener("click", () => {
  console.log("History cleared.");
  storedHistory.length = 0;
  console.log(storedHistory);
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

function updateHistory() {
  storedHistory.unshift(
    `${valuesHistory.historyNum1.toLocaleString("en-US", {
      maximumFractionDigits: 20,
    })} ${valuesHistory.historyOperator} ${valuesHistory.historyNum2.toLocaleString(
      "en-US",
      {
        maximumFractionDigits: 20,
      },
    )} = ${valuesHistory.historyResult.toLocaleString("en-US", {
      maximumFractionDigits: 20,
    })}`,
  );

  if (storedHistory.length > 10) {
    storedHistory.pop();
  }
}

function historyOutput() {
  historyDisplay.textContent = storedHistory;
}
