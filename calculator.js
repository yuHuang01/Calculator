let topScreen = document.getElementById("topScreen");
let bottomScreen = document.getElementById("bottomScreen");
let allBtns = document.getElementsByClassName("allBtns");
let body = document.getElementById("body");
let firstInput;
let opToBeDone;
let secondInput;

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", (e) => {
        let targetBtn = e.target;
        //First character entered
        if(topScreen.childNodes.length === 0){
            if(targetBtn.id === "equal"){
                alert("The equation should be entered first!")
            }
            else if(targetBtn.id === "clear"){
                ClearAll();
            }
            else if(targetBtn.classList.contains("operationBtns")){
                switch(targetBtn.id){
                    case "minus":
                        AddFirstChar(targetBtn);
                        break;
                    default:
                        alert("Operation can't be done now!")
                }
            }
            else if(targetBtn.classList.contains("numberBtns")){
           AddFirstChar(targetBtn)
            }
        }


        //Not the first character entered
        else{
            if(targetBtn.id === "clear"){
                ClearAll()
            }
            else if(targetBtn.id === "equal"){
                if(document.getElementById("numberInput").textContent != "-"){
                secondInput = document.getElementById("numberInput").textContent;
                let result = Operate(opToBeDone, parseFloat(firstInput), parseFloat(secondInput));
                bottomScreen.removeChild(bottomScreen.childNodes[0]);
                topScreen.removeChild(topScreen.childNodes[0]);
                let resultToStore = document.createElement("p");
                resultToStore.style.marginTop = 0;
                resultToStore.style.marginBottom = 0;
                resultToStore.textContent = result;
                bottomScreen.appendChild(resultToStore);
                }
                else{
                    alert("You need to enter a number first!")
                }
            }
            else if(targetBtn.classList.contains("numberBtns")){
                let alreadyInput = document.getElementById("numberInput")
                if(alreadyInput.textContent.length <= 15){
                    AddTheOthers(targetBtn);
                }
                else{
                    let warDiv = document.getElementById("warningMess");
                    if(!warDiv.hasChildNodes()){
                        let alertMessage = document.createElement("p");
                        alertMessage.textContent = "Your number has reached the limit of the screen!"
                        alertMessage.id = "alertMessage";
                        alertMessage.style.fontStyle = "italic";
                        alertMessage.style.color = "white";
                        alertMessage.style.textAlign = "center";
                        warDiv.appendChild(alertMessage);
                        }
                }
            }
            else{
                opToBeDone = e.target.id;
                //Store the number and push it to the bottom screen
                let alreadyInput = document.getElementById("numberInput")
                let storedNum = document.createElement("p")
                storedNum.textContent = topScreen.childNodes[0].textContent;
                firstInput = storedNum.textContent;
                storedNum.id = "storedNum";
                storedNum.style.marginTop = 0;
                storedNum.style.marginBottom = 0;
                bottomScreen.appendChild(storedNum);
                topScreen.removeChild(alreadyInput)
            }
        }
    });
    
}
function AddFirstChar(a){
    let firstNum = document.createElement("p");
    firstNum.textContent = a.textContent;
    firstNum.style.marginTop = 0;
    firstNum.style.marginBottom = 0;
    firstNum.id = "numberInput";
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
function Operate(a, b, c){
    switch(a){
        case "add":
            return b + c;
        case "minus":
            return b - c;
        case "multi":
            return b * c;
        case "division":
            return b / c;
    }
};
