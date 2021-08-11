
let operationButtons = document.getElementsByClassName('operation-button')

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');



function makeOperation(operator) {

  let number1 = +input1.value;
  let number2 = +input2.value;

  let result;
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else if (operator === '*') {
    result = number1 * number2;
  } else if (operator === '/') {
    result = number1 / number2;
  } else {
    alert('operation is unknown')
  }
  alert(result);
}


function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation)
}

let i;

for (i = 0; i < operationButtons.length; i++) {
  let button = operationButtons[i]
  button.addEventListener('click', onOperationButtonClick);

}

