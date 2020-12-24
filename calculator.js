//screen
let screen = document.getElementById("screen");

let result = document.getElementById("result")
result.style.backgroundColor = "red"

let currentInput = document.getElementById("userInput");
currentInput.style.backgroundColor = "blue"



//operation buttons
let opBtns = document.getElementsByClassName("operationBtns")
for(let i = 0; i < opBtns.length; i++){
    opBtns[i].addEventListener("mouseenter", opHoverOn);
    opBtns[i].addEventListener("mouseleave", opHoverOff);
    opBtns[i].addEventListener("click", enterOp)
};
function opHoverOn(e){
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = "rgb(96, 96, 99)"
};
function opHoverOff(e){
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = " rgb(30, 30, 34)";
};
function enterOp(e){
    console.log(e.target.textContent)
}
//Operations
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

//number buttons
let numBtns = document.getElementsByClassName("numberBtns")
for(let i = 0; i < numBtns.length; i++){
    numBtns[i].addEventListener("mouseenter", numHoverOn);
    numBtns[i].addEventListener("mouseleave", numHoverOff);
    numBtns[i].addEventListener("click", enterNum)
};
function numHoverOn(e){
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = "rgb(96, 96, 99)"
};
function numHoverOff(e){
    let targetDiv = e.target;
    targetDiv.style.backgroundColor = "rgb(41, 41, 46)";
};
function enterNum(e){
    let enter = e.target.textContent;
};

//clear button
let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("mouseenter",cOn);
clearBtn.addEventListener("mouseleave", cOff);

function cOn(e){
    e.target.style.backgroundColor = "rgb(233, 144, 42)"
};
function cOff(e){
    e.target.style.backgroundColor = " rgb(204, 115, 13)"
};
