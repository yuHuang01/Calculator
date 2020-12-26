let topScreen = document.getElementById("topScreen");
let bottomScreen = document.getElementById("bottomScreen");
let allBtns = document.getElementsByClassName("allBtns");
let body = document.getElementById("body");
let themeCounter = 1;

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", (e) => {
        let targetBtn = e.target;
        //If there was no operation before
        if(bottomScreen.childNodes.length === 0){
            //Entered as the first character
            if(topScreen.childNodes.length === 0){
                if(targetBtn.classList.contains("numberBtns")){
                    RemoveWarnMess();
                    AddFirstChar(targetBtn)
                }
                else{
                    WarnMess("You should enter some numbers first!")
                }
            }
            //Not entered as the first character
            else{
                if(targetBtn.classList.contains("numberBtns")){
                    if(topScreen.childNodes[0].textContent.length <= 15){
                        RemoveWarnMess();
                        AddTheOthers(targetBtn);
                    }
                    else{
                        WarnMess("Your operation has reached the limit of the screen!")
                    }
                }
                else{
                    let cInput = topScreen.firstChild.textContent;
                    //check if the user want to input operator after an operator
                    if(topScreen.childNodes[0].textContent.length <= 15){
                        if(cInput[cInput.length -2] !== "+" && cInput[cInput.length -2] !== "-" && cInput[cInput.length -2] !== "*" && cInput[cInput.length -2] !== "/" && cInput[cInput.length -2] !== "=" && cInput[cInput.length -2] !== "%"){
                            RemoveWarnMess();
                            switch(targetBtn.id){
                                case "clear":
                                    ClearAll()
                                    break;
                                case "delete":
                                    deleteLast()
                                    break;
                                case "equal":
                                    finishOp()
                                    break;
                                default:
                                    AddTheOthers(targetBtn);
                                    break;
                            }
                        }
                        else{
                            if(targetBtn.id === "delete" || targetBtn.id === "clear"){
                                switch(targetBtn.id){
                                    case "clear":
                                        ClearAll();
                                        break;
                                    case "delete":
                                        deleteLast()
                                        break;
                                }
                            }
                            else{
                                WarnMess("You can't put an operator after another operator!")
                            }    
                        }
                    }
                    else{
                        if(targetBtn.id === "clear"){
                            ClearAll()
                        }
                        else if(targetBtn.id === "delete"){

                        }
                        else if(targetBtn.id === "equal"){
                            finishOp()
                        }
                        else{WarnMess("Your operation has reached the limit of the screen!")
                        }
                    }
                }
                
            }
        }
        //If there was an operation before
        else{
            if(targetBtn.classList.contains("numberBtns")){
                WarnMess("You should chosse an operation first!")
            }
            else{
                switch(targetBtn.id){
                    case "clear":
                    case "delete":
                        bottomScreen.firstChild.remove();
                        break;
                    default:
                        let lastResult = bottomScreen.firstChild;
                        AddFirstChar(lastResult);
                        AddTheOthers(targetBtn);
                        bottomScreen.firstChild.remove();
                }
            }
        }
        
    });
    
}
function AddFirstChar(a){
    let firstNum = document.createElement("p");
    firstNum.textContent = a.textContent;
    firstNum.style.marginTop = 0;
    firstNum.style.marginBottom = 0;
    firstNum.id = "userInput";
    topScreen.appendChild(firstNum);
}
function AddTheOthers(a){
    let currentNum = topScreen.childNodes[0];
    currentNum.textContent += a.textContent;
};
function ClearAll(){
    if(topScreen.hasChildNodes() && bottomScreen.hasChildNodes()){
        topScreen.firstChild.remove();
        bottomScreen.firstChild.remove();
    }
    else if(topScreen.hasChildNodes() && !bottomScreen.hasChildNodes()){
        topScreen.firstChild.remove();
    }
    else if(!topScreen.hasChildNodes() && bottomScreen.hasChildNodes()){
        bottomScreen.firstChild.remove();
    }

};
function deleteLast(){
    let cInput = topScreen.firstChild.textContent;
    cInput = cInput.substring(0, cInput.length - 1);
    topScreen.firstChild.remove();
    let firstNum = document.createElement("p");
    firstNum.textContent = cInput;
    firstNum.style.marginTop = 0;
    firstNum.style.marginBottom = 0;
    firstNum.id = "userInput";
    topScreen.appendChild(firstNum);
};
function Operate(a, b, c){
    switch(a){
        case "+":
            return b + c;
        case "-":
            return b - c;
        case "*":
            return b * c;
        case "/":
            return b / c;
        case "%":
            return b % c;
    }
};
function finishOp(){
    let myInput = topScreen.firstChild.textContent;
    let eqArray = myInput.split(" ");
    let result = Operate(eqArray[1], parseFloat(eqArray[0]), parseFloat(eqArray[2]));
    if(result.length > 15){
        result = parseFloat(result).toExponential(4);
    }
    topScreen.firstChild.remove();
    let opResult = document.createElement("p");
    opResult.textContent = result;
    opResult.style.marginTop = 0;
    opResult.style.marginBottom = 0;
    opResult.id = "userInput";
    bottomScreen.appendChild(opResult);
}
function WarnMess(a){
    let message = document.createElement("p");
    message.style.marginTop = "15px";
    message.style.marginBottom = 0;
    message.textContent = a;
    message.id = "alertMessage";
    message.style.fontStyle = "italic";
    message.style.color = "white";
    message.style.textAlign = "center";
    let warDiv = document.getElementById("warningMess");
    if(warDiv.hasChildNodes()){
        warDiv.firstChild.remove();
    };
    warDiv.appendChild(message);
}
function RemoveWarnMess(){
    let warDiv = document.getElementById("warningMess");
    if(warDiv.hasChildNodes()){
        warDiv.firstChild.remove();
    };
}
