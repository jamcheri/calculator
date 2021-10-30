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




//stages that need to be available
let operatedCycle = false;  // keeps track of if we're in the middle of a operation
let storedValueOne = "0";
let storedValueTwo = "0";
let currentOperator = "";   // keeps track of what the currently used operator is


if (storedValueOne === "") {
    storedValueOne = "0"
    document.getElementById("display").innerHTML = storedValueOne;
}


//functions that explain all the different actions
function digit(id) {
    console.log(id);
    console.log(storedValueOne);

    if (storedValueOne === "0") {
        storedValueOne = id;
    }
    else {
        storedValueOne += id;
    }

    document.getElementById("display").innerHTML = storedValueOne; // make display show result
};

function zero() {
    // if value is currently blank continue displaying zero
    if (storedValueOne === "0") {
        console.log(storedValueOne);
        storedValueOne = "0";
        document.getElementById("display").innerHTML = storedValueOne;
    }
    //if there is no period and the first value is still zero
    //else if (storedValueOne.includes(".") && storedValueOne.charAt(0) === "0") {   
      //console.log(storedValueOne);
        //document.getElementById("display").innerHTML = storedValueOne;
    //} 
    else {
        storedValueOne += "0";
        document.getElementById("display").innerHTML = storedValueOne;
    };
};

function period() {
    // check if they're trying to enter a period and the storedValueOne already includes a period 
    if (storedValueOne.includes(".")) {   
        console.log(storedValueOne);
    }
    else if (storedValueOne === "") {
        storedValueOne = "0."
    }
    else {
        storedValueOne += ".";
    }
    document.getElementById("display").innerHTML = storedValueOne;
};

function clear() {
    console.log("clear");
    storedValueOne = "0";
    document.getElementById("display").innerHTML = storedValueOne;
};

function backspace () {
    console.log("backspace");
    if (storedValueOne === "0") {
        console.log(storedValueOne);
    }
    else if (storedValueOne.length === 1) {
        storedValueOne = "0";
    }
    else {
        storedValueOne = storedValueOne.substring(0, storedValueOne.length - 1);
    }    
    
    document.getElementById("display").innerHTML = storedValueOne   
}

function operate() {
    console.log("operate");
}

function equals() {
    console.log("equals");
};


//set up buttons
const digitButton = document.querySelectorAll(".digits");
digitButton.forEach(button => button.addEventListener("click", 
    function() {
    digit(button.textContent);
    }
));

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", zero);

const periodButton = document.querySelector("#period");
periodButton.addEventListener("click", period);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", backspace);

const operateButton = document.querySelector(".operators");
operateButton.addEventListener("click", operate);

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", equals);














/*



//operate function that takes in the userInput and performs the calculation
function operate(operator, numOne, numTwo) {
    //let operator = userInput;
    let operateResult = 0;

    if (operator === "add") {
        operateResult = add(numOne, numTwo);
    } else if (operator === "subtract") {
        operateResult = subtract(numOne, numTwo);
    } else if (operator === "multiply") {
        operateResult = multiply(numOne, numTwo);
    } else if (operator === "divide") {
        operateResult = divide(numOne, numTwo);
    }
    document.getElementById("display").innerHTML=operateResult; //send code to display
    console.log("operateResult is " + operateResult);
    console.log("operatorClicked is " + operatorClicked);

    operatedCycle = true;
    numOne = operateResult;
    numTwo = "";
    value = "";
    return operateResult;
};

//setup each digit button

let value = "";
let operatorClicked = false;




const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operatorClicked === false && operatedCycle === false) {
            if (value.includes(".") && button.id === "period") {
                console.log(value);
            } else if (button.id === "zero" && value.charAt(0) === "0" && !value.includes(".")) {
                console.log(value);
            } else if (button.classList.contains("digits")) {
                value = value.toString();
                value += button.textContent;
                console.log(value);
            } else if (button.classList.contains("operators") && value === "") {
                console.log(value);
            } else if (value != "" && value != "." && button.id === "equals") {
                console.log(value);
                
    
            } else if (button.classList.contains("operators")) {
                operatorClicked = true;
                console.log(operatorClicked);
                operator = button.id;
                console.log(operator);
                numOne = parseFloat(value);
                console.log("numOne is " + numOne);
                value = "";
                return;
            } else {
                return;
            }
        }
        
        
        
        else if (operatedCycle === false) {
            if (value.includes(".") && button.id === "period") {
                console.log(value);
            } else if (button.id === "zero" && value.charAt(0) === "0" && !value.includes(".")) {
                console.log(value);
            } else if (button.classList.contains("digits")) {
                value = value.toString();
                value += button.textContent;
                console.log(value);
            } else if (button.classList.contains("operators") && value === "") {
                console.log(value);
            } else if (value != "" && value != "." && button.id === "equals") {
                console.log(value);
                numTwo = parseFloat(value);
                console.log("numOne is " + numOne);
                console.log("numTwo is " + numTwo);
                console.log("operator is " + operator);
                return operate(operator, numOne, numTwo);
            } else if (button.classList.contains("operators")) {
                operatorClicked = true;
                console.log(operatorClicked);
                operator = button.id;
                console.log(operator);
                numTwo = parseFloat(value);
                console.log(numOne);
                value = "";
                return;
            } else {
                return;
            }
        } 
        
        else { //this is 
            console.log("value is " + value);
            console.log("numOne is " + numOne);
            console.log("numTwo is " + numTwo);
            
            if (value.includes(".") && button.id === "period") {
                console.log(value);
            } else if (button.id === "zero" && value.charAt(0) === "0" && !value.includes(".")) {
                console.log(value);
            } else if (button.classList.contains("digits")) {
                value = value.toString();
                value += button.textContent;
                console.log(value);
            } else if (button.classList.contains("operators") && value === "") {
                console.log(value);
            } else if (value != "" && value != "." && button.id === "equals") {
                console.log(value);
                numTwo = parseFloat(value); 
            } else if (button.classList.contains("operators")) {
                operatorClicked = true;
                console.log(operatorClicked);
                operator = button.id;
                console.log(operator);
                numTwo = parseFloat(value);
                console.log(numOne);
                value = "";
                return;
            }
        };
    
     
    });


});






//const digitButton = document.querySelectorAll(".digits");




//each time digit is pressed, add to a string



/*
const button = document.querySelector("#button");       //button to reset 
button.addEventListener('click', () => {
    userInput = prompt("What dimensions should the new grid be? X number by X number:");

    while (userInput > 100) {                           //don't let grid get larger than 100x100
        userInput = prompt("Grid dimension cannot be larger than 100, please enter a lower dimension:")
    }

    makeGrid(userInput);
});*/




















function power(num, toPower) {
    let powered = num ** toPower;
    return powered;
}

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
