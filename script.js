var display = document.getElementById("display");
var lastResult = "";

function appendToDisplay(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = display.value;
  let result = "";
  let firstNum = "";
  let secondNum = "";
  let operator = "";
  let operatorFound = false;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    console.log(char);

    if (!operatorFound && ["+", "-", "*", "/", "%"].includes(char)) {
      operator = char;
      operatorFound = true;
    } else if (operatorFound) {
      secondNum += char;
    } else {
      firstNum += char;
    }
  }

  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);

  if (operator == "+") {
    result = firstNum + secondNum;
  } else if (operator == "-") {
    result = firstNum - secondNum;
  } else if (operator == "*") {
    result = firstNum * secondNum;
  } else if (operator == "/") {
    if (secondNum == 0) {
      result = "undefined";
    } else {
      result = firstNum / secondNum;
    }
  } else if (operator === "%") {
    result = firstNum * (secondNum / 100);
  }

  display.value = result;
  lastResult = result;
}

function useAnswer() {
  display.value = lastResult;
}
