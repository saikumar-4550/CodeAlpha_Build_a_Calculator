let displayInput = document.getElementById('display-input');
let currentExpression = '';

function addDigit(digit) {
  currentExpression += digit;
  displayInput.value = currentExpression;
}

function addDecimal() {
  if (!currentExpression.includes('.')) {
    currentExpression += '.';
    displayInput.value = currentExpression;
  }
}

function addOperator(operator) {
  if (currentExpression !== '') {
    currentExpression += operator;
    displayInput.value = currentExpression;
  }
}

function calculateResult() {
  try {
    let result = eval(currentExpression); // Use eval for calculation
    displayInput.value = result;
    currentExpression = result.toString(); // Store the result for further calculation
  } catch (error) {
    displayInput.value = 'Error';
  }
}

function clearDisplay() {
  currentExpression = '';
  displayInput.value = '';
}

function deleteLastChar() {
  currentExpression = currentExpression.slice(0, -1);
  displayInput.value = currentExpression;
}
