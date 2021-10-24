//math functions
function add(numOne, numTwo) {
    let added = numOne + numTwo;
    return added;
};

function subtract(numOne, numTwo) {
    let subtracted = numOne - numTwo;
    return subtracted;
};

function multiply(numOne, numTwo) {
    let multiplied = numOne * numTwo;
    return multiplied;
};

function divide(numOne, numTwo) {
    let divided = numOne / numTwo;
    return divided;
};


//operate function that takes in the userInput and performs the calculation
function operate(operator, numOne, numTwo) {
    let operator = userInput;
    let operateResult = 0;

    if (operator = "add") {
        operateResult = add(numOne, numTwo);
    } else if (operator = "subtract") {
        operateResult = subtract(numOne, numTwo);
    } else if (operator = "multiply") {
        operateResult = multiply(numOne, numTwo);
    } else if (operator = "divide") {
        operateResult = divide(numOne, numTwo);
    }

    return operateResult;
}






















const power = function(num, toPower) {
    let powered = num ** toPower;
    return powered;
};

const factorial = function(num) {
    var result = num;
    if (num === 0 || num === 1) 
        return 1; 
    while (num > 1) { 
        num--;
        result *= num;
    }
    return result;
};











/*
function multiply(arrayToMultiply) {
    let multiplied = 1;
    let i = 0;

    while (i<arrayToMultiply.length) {
        multiplied = multiplied * arrayToMultiply[i];
        i++;
    }
    return multiplied;
};

function divide(arrayToDivide) {
    let divided = 1;
    let i = 0;

    while (i<arrayToDivide.length) {
        divided = divided * arrayToDivide[i];
        i++;
    }
    return divided;
};*/

/*
const sum = function(arrayToSum) {
    let summed = 0;
    let i = 0;

    while (i<arrayToSum.length) {
        summed += arrayToSum[i];
        i++;
    }
    return summed;
};*/
