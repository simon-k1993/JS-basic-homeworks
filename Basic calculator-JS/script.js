const calculatorKeys = document.querySelector(".allButtons");
const userInput = document.querySelector("#userInput");
const calculator = document.querySelector(".calculator");
const displayResult = document.querySelector("#result");
let isEqualsPressed = false;
let equation = 0;
let checkForDecimal = "";

function calculation(firstNumber, operator, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  if (operator === "plus" || operator === "+")
    return firstNumber + secondNumber;
  if (operator === "minus" || operator === "-")
    return firstNumber - secondNumber;
  if (operator === "multiply" || operator === "x")
    return firstNumber * secondNumber;
  if (operator === "divide" || operator === "/")
    return firstNumber / secondNumber;
  if (operator === "remainder" || operator === "%")
    return firstNumber % secondNumber;
}

function handleEquation(equation) {
  equation = equation.split(" ");
  const operators = ["/", "x", "%", "+", "-"];
  let firstNumber;
  let secondNumber;
  let operator;
  let operatorIndex;
  let result;

  for (let i = 0; i < operators.length; i++) {
    while (equation.includes(operators[i])) {
      operatorIndex = equation.findIndex((item) => item === operators[i]);
      firstNumber = equation[operatorIndex - 1];
      operator = equation[operatorIndex];
      secondNumber = equation[operatorIndex + 1];
      result = calculation(firstNumber, operator, secondNumber);
      equation.splice(operatorIndex - 1, 3, result);
    }
  }

  return result;
}

document.addEventListener("keydown", (event) => {
  let getOperators = {
    "/": "divide",
    x: "multiply",
    "*": "multiply",
    "%": "remainder",
    "+": "plus",
    "-": "minus",
  };

  if (!isNaN(event.key) && event.key !== " ") {
    document.getElementById(`digit-${event.key}`).click();
  }
  if (["/", "x", "+", "-", "*", "%"].includes(event.key)) {
    document.getElementById(getOperators[event.key]).click();
  }
  if (event.key === "Backspace" || event.key === "c" || event.key === "C") {
    document.getElementById("clear").click();
  }
  if (event.key === "=" || event.key === "Enter") {
    document.getElementById("equals").click();
  }
  if (event.key === ".") {
    document.getElementById("decimal").click();
  }
});

calculatorKeys.addEventListener("click", function (event) {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  let inputDisplay = userInput.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === "number" && !isEqualsPressed) {
    if (inputDisplay === "0") {
      userInput.textContent =
        previousKeyType === "operator" ? inputDisplay + keyValue : keyValue;
      equation =
        previousKeyType === "operator" ? equation + key.value : key.value;
      checkForDecimal = checkForDecimal + keyValue;
    } else {
      if (checkForDecimal.length >= 19) {
        var replaceNumber = checkForDecimal;
        checkForDecimal = Number(checkForDecimal).toExponential(2);
        userInput.textContent = inputDisplay.replace(
          replaceNumber,
          checkForDecimal
        );
      } else {
        userInput.textContent = userInput.textContent.includes("N")
          ? "NaN"
          : userInput.textContent.includes("I")
          ? "Infinity"
          : inputDisplay + keyValue;
        equation = equation + key.value;
        checkForDecimal = checkForDecimal + keyValue;
      }
    }
  }

  if (
    type === "operator" &&
    previousKeyType !== "operator" &&
    !isEqualsPressed &&
    !inputDisplay.includes("Infinity")
  ) {
    checkForDecimal = "";
    userInput.textContent = inputDisplay + " " + keyValue + " ";
    equation = equation + " " + key.value + " ";
  }

  if (
    type === "decimal" &&
    (previousKeyType === "number" || inputDisplay === "0") &&
    !isEqualsPressed &&
    !inputDisplay.includes("Infinity")
  ) {
    if (!checkForDecimal.includes(".")) {
      userInput.textContent = inputDisplay + keyValue;
      equation = equation + key.value;
      checkForDecimal = checkForDecimal + keyValue;
    }
  }

  if ((type === "backspace" || type === "reset") && inputDisplay !== "0") {
    if (type === "backspace" && !isEqualsPressed) {
      userInput.textContent = inputDisplay.substring(
        0,
        inputDisplay.length - 1
      );
      equation = equation.substring(0, equation.length - 1);
      checkForDecimal = checkForDecimal.substring(
        0,
        checkForDecimal.length - 1
      );
    } else {
      inputDisplay = "0";
      userInput.textContent = inputDisplay;
      displayResult.innerHTML = "&nbsp;";
      isEqualsPressed = false;
      equation = "";
      checkForDecimal = "";
    }
  }

  if (type === "equal") {
    isEqualsPressed = true;
    const finalResult = handleEquation(equation);

    if (finalResult || finalResult === 0) {
      displayResult.textContent = !Number.isInteger(finalResult)
        ? finalResult.toFixed(2)
        : finalResult.toString().length >= 16
        ? finalResult.toExponential(2)
        : finalResult;
    } else {
      displayResult.textContent = "Math Error";
    }
  }

  calculator.dataset.previousKeyType = type;
});
