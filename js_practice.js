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
    buttons[i].addEventListener('click', clearOneInputElem);
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
    case "&#247;":
    buttons[i].addEventListener('click', calculateNum);
    break;
    case "*":
    buttons[i].addEventListener('click', calculateNum);
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
function clearOneInputElem() {

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

//Completely clearing input
function clearInput() {
calcDisplayTop.innerHTML = '';
calcDisplayBottom.innerHTML = 0;
}

//Activating function
addOnclickEvent(buttons);



















/*
JS Конспект

if vs else if
else if = в противном случае (Если первое условие не сработало)
Если мы используем несколько if, то все они сработают.
Если мы используем if + else if, то только одно из условий сработает (второе не смотрим)

Тернарный оператор ? (Всмысле тройной, три условия)
*/
