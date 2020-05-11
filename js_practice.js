let input = document.querySelector("input");
let calcTopDisplay = document.querySelector(".calculator-display-top");
let calcBottomDisplay = document.querySelector(".calculator-display-bottom");
input.addEventListener('keypress', fillDisplay);


function fillDisplay(){
if(event.keyCode == 13) {
calcBottomDisplay.innerHTML = this.value;
calcTopDisplay.innerHTML = this.value;
}
}


















/*
JS Конспект

if vs else if
else if = в противном случае (Если первое условие не сработало)
Если мы используем несколько if, то все они сработают.
Если мы используем if + else if, то только одно из условий сработает (второе не смотрим)

Тернарный оператор ? (Всмысле тройной, три условия)
*/
