let firstNumber;
let secondNumber;

do {
    firstNumber = parseFloat(prompt('add first number'));
} while (!firstNumber || isNaN(firstNumber))

do {
    secondNumber = parseFloat(prompt('add second number'));
} while (!secondNumber || isNaN(secondNumber))

const plusSum = firstNumber + secondNumber;
const minusSum = firstNumber - secondNumber;
const multiplicationSum = firstNumber * secondNumber;
const divisionSum = firstNumber / secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${plusSum}
${firstNumber} - ${secondNumber} = ${minusSum}
${firstNumber} * ${secondNumber} = ${multiplicationSum}
${firstNumber} / ${secondNumber} = ${divisionSum}`)