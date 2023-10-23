function add(num1, num2) {
    return num1 + num2;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

let num1 = num2 = 0;
let oper  = 'plus';
const display = document.querySelector('.display');
const input = document.querySelector('.input');

function operate(oper, num1, num2){
    let result = 0;
    switch(oper) {
        case 'plus':
            result = add(num1, num2);
            break;
        case 'minus':
            result = subtract(num1, num2);
            break;
        case 'times':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = 0;
            break;
    }
    return result;
}

function reset() {
    num1 = num2 = 0;
    oper = 'plus';
    displayResult();
}

const btn = document.querySelectorAll('.btn');
const btnDigit = []
const btnOper = []
const btnEqual = document.querySelector('.operate')
const btnClear = document.querySelector('.clear')

btnEqual.addEventListener('click', ()=>{
    num1 = operate(oper, num1, num2);
    num2 = 0;
    oper = 'plus';
    displayResult();
})

btnClear.addEventListener('click', reset)

btn.forEach((item)=>{
    if(item.classList.contains('digit')) {
        btnDigit.push(item)
    }

    if(item.classList.contains('oper')) {
        btnOper.push(item)
    }
})

btnDigit.forEach((digit)=>{
    digit.addEventListener('click', ()=>{
        dataNumb = digit.getAttribute('data-numb');
        dataNumb = Number(dataNumb);
        num2 = num2 * 10 + dataNumb;
        display.textContent = num1.toString();
        input.textContent = num2.toString();
    })
})

btnOper.forEach((operator) => {
    operator.addEventListener('click', ()=>{
        dataOper = operator.getAttribute('data-oper');
        num1 = operate(oper, num1, num2);
        num2 = 0;
        oper = dataOper;
    })
})

function displayResult() {
    let resTxt = (Number.isInteger(num1)) ? num1 : num1.toFixed(2);
    display.textContent = resTxt.toString();
    input.textContent = num2.toString();
}