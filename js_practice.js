//Getting Elements
let calcDisplayTop = document.querySelector('.calculator-display-top');
let calcDisplayBottom = document.querySelector('.calculator-display-bottom');
let buttons = document.querySelectorAll('.btn');


//Looping trough each btn and adding event listener
function addOnclickEvent(buttons){
for(let i = 0; i < buttons.length; i++) {
  switch(buttons[i].innerHTML) {
    case "AC":
    buttons[i].addEventListener('click', allClear);
    break;
    case "DEL":
    buttons[i].addEventListener('click', clearBottomDisplay);
    break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ",":
    buttons[i].addEventListener('click', displayNumber);
    break;
    case "+":
    buttons[i].addEventListener('click', calculateNum);
    break;
    case "-":
    buttons[i].addEventListener('click', calculateNum);
    break;
    case "÷":
    buttons[i].addEventListener('click', calculateNum);
    break;
    case "*":
    buttons[i].addEventListener('click', calculateNum);
    break;
    case "=":
    buttons[i].addEventListener('click', getResults);
    break;
  }
}
}

//Output numbers 0-9 and ","
function displayNumber() {
checkIfZero();
forbidSecondComma();
calcDisplayBottom.innerHTML += this.innerHTML;
}

//After clicking "="
function getResults() {
  let symbol = calcDisplayTop.innerHTML.match(/[\+\-\*\÷]/g); //Get symbol
  checkSign(symbol); //Function that checks symbol
}

//Depending on the symbol commit an operation
function checkSign(symbol) {
  commasIntoDots();
  if(symbol == '+') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) + parseInt(calcDisplayBottom.innerHTML);
} else if(symbol == '-') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) - parseInt(calcDisplayBottom.innerHTML);
} else if(symbol == '*') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) * parseInt(calcDisplayBottom.innerHTML);
} else if(symbol == '÷') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) / parseInt(calcDisplayBottom.innerHTML);
  }
}

function commasIntoDots() {
return [replaceTopComma(),replaceBottomComma()];
}

function replaceTopComma() {
  let matchTop = calcDisplayTop.innerHTML.match(/\d+\,\d+/g);
  let replaceTop = matchTop.join('').replace(',','.');
  return replaceTop;
}

function replaceBottomComma() {
  let matchBottom = calcDisplayBottom.innerHTML.match(/\d+\,\d+/g);
  let replaceBottom = matchBottom.join('').replace(',','.');
  return replaceBottom;
}

//Math operations func
function calculateNum() {
calcDisplayTop.innerHTML = calcDisplayBottom.innerHTML + this.innerHTML;
}

//If display contains zero remove it
function checkIfZero() {
if(calcDisplayBottom.innerHTML == 0){
calcDisplayBottom.innerHTML = '';
}
}

//Forbid Second Comma
function forbidSecondComma() {
  if(containsComma()){
  document.querySelector(".comma").removeEventListener('click', displayNumber);
  }
}

//Check if input already contains one comma
function containsComma() {
let test = /\,/.test(calcDisplayBottom.innerHTML);
return test;
}

//Completely clearing input
function allClear() {
document.querySelector(".comma").addEventListener('click', displayNumber); //Allow to press commas again
calcDisplayTop.innerHTML = '';
calcDisplayBottom.innerHTML = 0;
}

//Clearing bottom input
function clearBottomDisplay() {
calcDisplayBottom.innerHTML = 0;
}

//Activating function
addOnclickEvent(buttons);


/*
decimal number (2,5)
Пофиксить :
1. Операции с запятой (1.превратить ее в точку. 2.сложить числа)
Если решить не получится - просто заменить запятую на точку
2. Обнулить инпут после нажатия другой клавиши.
*/
