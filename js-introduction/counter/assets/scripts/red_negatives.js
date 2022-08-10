var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var cN_style = document.getElementById('currentNumber');

function increment() {
    if (currentNumber > -2) {
        cN_style.style.color = "black";
    }
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber < 1) {
        cN_style.style.color = "red";
    }
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}