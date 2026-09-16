let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let outputField = document.querySelector('#result');

function add() {
    let addition1 =Number(input1.value);
    let addition2 = Number(input2.value);
    let result = addition1 + addition2;
    outputField.value = result;
}

function subtract() {
    let subtraction1 = Number(input1.value);
    let subtraction2 = Number(input2.value);
    let result = subtraction1 - subtraction2;
    outputField.value = result;
}

function multiply() {
    let multiplication1 = Number(input1.value);
    let multiplication2 = Number(input2.value);
    let result = multiplication1 * multiplication2;
    outputField.value = result;
}   

function divide() {
    let division1 = Number(input1.value);
    let division2 = Number(input2.value);
    let result = division1 / division2;
    outputField.value = result;
}

addButton.onclick = function() {
    add();
};

subtractButton.onclick = function() {
    subtract();
};

multiplyButton.onclick = function() {
    multiply();
};

divideButton.onclick = function() {
    divide();
};