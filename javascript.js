let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMult = document.getElementById('buttonMult');
let buttonDivide = document.getElementById('buttonDivide');
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

function onButtonPlus() {
  makeOperation('+');
}
function onButtonMinus() {
  makeOperation('-');
}
function onButtonMult() {
  makeOperation('*');
}
function onButtonDivide() {
  makeOperation('/');
}

buttonPlus.addEventListener('click', onButtonPlus);
buttonMinus.addEventListener('click', onButtonMinus);
buttonMult.addEventListener('click', onButtonMult);
buttonDivide.addEventListener('click', onButtonDivide);