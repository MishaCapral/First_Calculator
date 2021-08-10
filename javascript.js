let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMult = document.getElementById('buttonMult');
let buttonDivide = document.getElementById('buttonDivide');
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function getNumber1() {
  return +input1.value;
}
function getNumber2() {
  return +input2.value;
}

function makeOperation(operator) {
  let result;
  if (operator === '+') {
    result = getNumber1() + getNumber2();
  } else if (operator === '-') {
    result = getNumber1() - getNumber2();
  } else if (operator === '*') {
    result = getNumber1() * getNumber2();
  } else if (operator === '/') {
    result = getNumber1() / getNumber2();
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