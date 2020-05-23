//Getting Elements
let calcDisplayTop = document.querySelector('.calculator-display-top');
let calcDisplayBottom = document.querySelector('.calculator-display-bottom');
let buttons = document.querySelectorAll('.pt-4');


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
    case ".":
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
//allowSecondClick();
checkIfZero();
forbidSecondComma();
calcDisplayBottom.innerHTML += this.innerHTML;
}


//After clicking "="
function getResults() {
  let symbol = calcDisplayTop.innerHTML.match(/[\+\-\*\÷]/g); //Get symbol
  let testTop = calcDisplayTop.innerHTML.match(/\d+\.\d+/g);
  let testBottom = calcDisplayBottom.innerHTML.match(/\d+\.\d+/g);
  //ifContains();
  checkSign(symbol); //Function that checks symbol
}

//If inputs contain '.'
function ifContains() {
//let topDot = /\./.test(calcDisplayTop.innerHTML);
//let bottomDot = /\./.test(calcDisplayBottom.innerHTML);
let testTop = calcDisplayTop.innerHTML.match(/\d+\.\d+/g);
let testBottom = calcDisplayBottom.innerHTML.match(/\d+\.\d+/g);
//let uniteArr = parseInt(testTop.concat(testBottom));
if(testTop.length != 0 && testBottom.length != 0) {
console.log(testTop);
console.log(testBottom);
}else{
return;
}
}


//Get Array Sum
function getArrSum(arr) {
let sum = 0;
for(let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum;
}

//Depending on the symbol commit an operation
function checkSign(symbol) {
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
let test = /\./.test(calcDisplayBottom.innerHTML);
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

//Allow Second Click
function allowSecondClick() {
let allow = true;
if(allow) {
calcDisplayBottom.innerHTML = 0;
allow = false;
}
}

//Activating function
addOnclickEvent(buttons);


/*
decimal number (2,5)
Пофиксить :
1. Операции с запятой (1.превратить ее в точку. 2.сложить числа)
Если решить не получится - просто заменить запятую на точку
2. Обнулить инпут после нажатия другой клавиши.
3. Запретить растягивание элемента.
4. Добавить функции типа процентов и т.п.
*/
