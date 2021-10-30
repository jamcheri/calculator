//math functions
function add(numOne, numTwo, nextOperatorDisplay) {
    console.log("add");
    let added = parseFloat(numTwo) + parseFloat(numOne);
    added = Math.round((added + Number.EPSILON) * 100) / 100;   // round to two decimals

    if (nextOperatorDisplay === "=") {
        storedValueTwo = "=";
        storedValueOne = added;
        thisOperator = "add";   // here is what I changed from "" to add
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
        //nextOperatorDisplay = "+";
        console.log("bird");
        operatedCycle = false;
        lastOperatorDisplay = "=";
    } 
    else {
        storedValueTwo = added + " " + nextOperatorDisplay;
        storedValueOne = "0";
        console.log("here");
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
    }    
};

function subtract(numOne, numTwo, nextOperatorDisplay) {
    console.log("subtract");
    let subtracted = parseFloat(numTwo) - parseFloat(numOne);
    subtracted = Math.round((subtracted + Number.EPSILON) * 100) / 100;   // round to two decimals

    if (nextOperatorDisplay === "=") {
        storedValueTwo = "=";
        storedValueOne = subtracted;
        thisOperator = "subtract";   // here is what I changed from "" to add
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
        console.log("sparrow");
        operatedCycle = false;
        lastOperatorDisplay = "=";
    } 
    else {
        storedValueTwo = subtracted + " " + nextOperatorDisplay;
        storedValueOne = "0"
        console.log("heresubtract");
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;   
    }
};

function multiply(numOne, numTwo, nextOperatorDisplay) {
    console.log("multiply");
    let multiplied = parseFloat(numTwo) * parseFloat(numOne);
    multiplied = Math.round((multiplied + Number.EPSILON) * 100) / 100;   // round to two decimals

    if (nextOperatorDisplay === "=") {
        storedValueTwo = "=";
        storedValueOne = multiplied;
        thisOperator = "multiply";   // here is what I changed from "" to add
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
        console.log("parrot");
        operatedCycle = false;
        lastOperatorDisplay = "=";
    } 
    else {
        storedValueTwo = multiplied + " " + nextOperatorDisplay;
        storedValueOne = "0";
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
    }
};

function divide(numOne, numTwo, nextOperatorDisplay) {
    console.log("divide");
    let divided = parseFloat(numTwo) / parseFloat(numOne);
    divided = Math.round((divided + Number.EPSILON) * 100) / 100;   // round to two decimals
    
    if (nextOperatorDisplay === "=") {
        storedValueTwo = "=";
        storedValueOne = divided;
        thisOperator = "divide";   // here is what I changed from "" to add
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
        console.log("jackal");
        operatedCycle = false;
        lastOperatorDisplay = "=";
    } 
    else {
        storedValueTwo = divided + " " + nextOperatorDisplay;
        storedValueOne = "0";
        document.getElementById("displayOne").innerHTML = storedValueOne;
        document.getElementById("displayTwo").innerHTML = storedValueTwo;
    }
};




//stages that need to be available
let operatedCycle = false;  // keeps track of if we're in the middle of a operation
let storedValueOne = "0";
let storedValueTwo = "";
let operator = "";   // keeps track of what the currently used operator is
let thisOperator = "";
let nextOperator = "";
let nextOperatorDisplay = "";
let lastOperatorDisplay = "";


// just a failsafe for when they delete the original stored zero or subsequent numbers
if (storedValueOne === "") {
    storedValueOne = "0"
    document.getElementById("displayOne").innerHTML = storedValueOne;
}


//functions that explain all the different actions
function digit(id) {
    console.log(id);
    console.log(storedValueOne);

    //storedValueOne !== "0" && 
    if (nextOperatorDisplay === "=") {
        clear();
        storedValueOne = id;
    }
    else if (storedValueOne === "0") {
        storedValueOne = id;
    }
    else {
        storedValueOne += id;
    }

    document.getElementById("displayOne").innerHTML = storedValueOne; // make display show result
    document.getElementById("displayTwo").innerHTML = storedValueTwo;
};

function zero() {
    // if value is currently blank continue displaying zero
    if (storedValueOne === "0") {
        console.log(storedValueOne);
        storedValueOne = "0";
        document.getElementById("displayOne").innerHTML = storedValueOne;
    }
    //if there is no period and the first value is still zero
    //else if (storedValueOne.includes(".") && storedValueOne.charAt(0) === "0") {   
      //console.log(storedValueOne);
        //document.getElementById("display").innerHTML = storedValueOne;
    //} 
    else {
        storedValueOne += "0";
        document.getElementById("displayOne").innerHTML = storedValueOne;
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
    document.getElementById("displayOne").innerHTML = storedValueOne;
};

function clear() {
    console.log("clear");
    storedValueOne = "0";
    storedValueTwo = "";
    operator = "";
    thisOperator = "";
    nextOperator = "";
    lastOperatorDisplay = "";
    nextOperatorDisplay = "";
    operatedCycle = false;
    document.getElementById("displayOne").innerHTML = storedValueOne;
    document.getElementById("displayTwo").innerHTML = "";

};

function backspace () {
    console.log("backspace");
    console.log("SV1 is " + storedValueOne);
    if (storedValueOne === "0") {
        console.log(storedValueOne);
    }
    else if (storedValueOne.length === 1) {
        storedValueOne = "0";
    }
    else {
        storedValueOne = storedValueOne.substring(0, storedValueOne.length - 1);
    }    
    
    document.getElementById("displayOne").innerHTML = storedValueOne   
}

function operateDisplay (operatorDisplay, operator) {  
    if (operatedCycle === false) {
        storedValueTwo = storedValueOne + " " + operatorDisplay;
        storedValueOne = "0";  
        console.log(storedValueOne);
        console.log(storedValueTwo);
        console.log("croc");
        operatedCycle = true;
        thisOperator = operator;
    } 
    else if (storedValueOne !== "0" && lastOperatorDisplay === "=") {
        console.log("cat");
        storedValueTwo = storedValueOne + " " + operatorDisplay;
        storedValueOne = "0";
        nextOperatorDisplay = operatorDisplay;
        lastOperatorDisplay = operatorDisplay;
        //this is a test
        thisOperator = operator;
        //window[thisOperator](storedValueOne, storedValueTwo, nextOperatorDisplay);
    }
    else if (storedValueOne !== "0") {
        console.log("dog");
        nextOperator = operator;
        nextOperatorDisplay = operatorDisplay;
        console.log(storedValueOne);
        console.log(storedValueTwo);
        console.log(thisOperator);
        console.log(nextOperator);
        window[thisOperator](storedValueOne, storedValueTwo, nextOperatorDisplay);
        nextOperator = "";
        thisOperator = operator;
    }
    else {
        console.log("ferret");
        console.log(storedValueOne);
        console.log(storedValueTwo);
        thisOperator = operator;
        storedValueTwo =  storedValueTwo.substring(0, storedValueTwo.length - 1) + " " + operatorDisplay;
        console.log(operator)
    }
    document.getElementById("displayOne").innerHTML = storedValueOne;
    document.getElementById("displayTwo").innerHTML = storedValueTwo; 
}

function equalsDisplay () {
    if (operatedCycle === false) {
        console.log("equalsButton");
        ;
    }
    else if (thisOperator === "divide" && storedValueOne === "0") {
        alert("error, dividing by zero");
    }
    else if (lastOperatorDisplay === "=") {
        console.log("equalsButton2");
        ;
    }
    else {
        console.log("hello", storedValueOne, storedValueTwo, nextOperatorDisplay);
        nextOperatorDisplay = "=";
        window[thisOperator](storedValueOne, storedValueTwo, nextOperatorDisplay);
        operatedCycle = true;
    }
    console.log(storedValueOne);
    console.log(storedValueTwo);
    console.log(thisOperator);
    console.log(nextOperatorDisplay);
}

//set up buttons
{
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

const operateButton = document.querySelectorAll(".operators");
operateButton.forEach(button => button.addEventListener("click", 
    function() {
    operateDisplay(button.textContent, button.id);
    //operateMath(button.id);
    }
));

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", 
    function() {
    equalsDisplay();
    }
);
}
