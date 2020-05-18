//Getting Elements
let calcDisplayTop = document.querySelector('.calculator-display-top');
let calcDisplayBottom = document.querySelector('.calculator-display-bottom');
let buttons = document.querySelectorAll('.btn');


//Looping trough each btn and adding event listener
function addOnclickEvent(buttons){
for(let i = 0; i < buttons.length; i++) {
  switch(buttons[i].innerHTML) {
    case "AC":
    buttons[i].addEventListener('click', clearInput);
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
if(forbidSecondComma()){
document.querySelector(".comma").removeEventListener('click', displayNumber);
}
calcDisplayBottom.innerHTML += this.innerHTML;
}

//Clearing only one element at a time
function clearBottomDisplay() {
calcDisplayBottom.innerHTML = 0;
}

//After clicking "="
function getResults() {
  let num = calcDisplayTop.innerHTML.match(/\d/g); //Get number
  let sign = calcDisplayTop.innerHTML.match(/\W+/g); //Get sign
  checkSign(sign); //Function that checks sign
}

//Depending on the sign make an operation
function checkSign(sign) {
  alert(replaceCommaWithDot(calcDisplayTop, calcDisplayBottom)[0]); //If inputs contain comma turn it into dot
  alert(replaceCommaWithDot(calcDisplayTop, calcDisplayBottom)[1]);
  if(sign == '+') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) + parseInt(calcDisplayBottom.innerHTML);
} else if(sign == '-') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) - parseInt(calcDisplayBottom.innerHTML);
} else if(sign == '*') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) * parseInt(calcDisplayBottom.innerHTML);
} else if(sign == '÷') {
  calcDisplayTop.innerHTML += calcDisplayBottom.innerHTML + '=';
  calcDisplayBottom.innerHTML = parseInt(calcDisplayTop.innerHTML) / parseInt(calcDisplayBottom.innerHTML);
  }
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

//If display already contains one "," forbid others
function forbidSecondComma() {
let test = /\W/.test(calcDisplayBottom.innerHTML);
return test;
}

//Replace ',' into '.' and completely remove operand sign
function replaceCommaWithDot(displayTop,displayBottom) {
  let regEx = /[\+\-\*\÷]/gi;
  let replaceSigns = displayTop.innerHTML.replace(regEx,'');
  let replaceBottom = displayBottom.innerHTML.replace(',','.');
  let replaceTop = replaceSigns.replace(',','.');
  return [replaceTop,replaceBottom];
}

//Completely clearing input
function clearInput() {
calcDisplayTop.innerHTML = '';
calcDisplayBottom.innerHTML = 0;
}

//Activating function
addOnclickEvent(buttons);




/*
decimal number (2,5)
2. Операции с запятой (1.превратить ее в точку. 2.сложить числа)
Если решить не получится - просто заменить запятую на точку
После нажатия AC вновь позволить коммы
3. Обнулить инпут после нажатия другой клавиши.

*/
