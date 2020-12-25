let userInput = document.getElementById("userInput");
let resultDisp = document.getElementById("resultDisp");
let allBtns = document.getElementsByClassName("allBtns");
let body = document.getElementById("body");
let firstInput;
let secondInput;

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", (e) => {
        let targetBtn = e.target;
        //First character entered
        if(userInput.childNodes.length === 0){
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
                console.log(targetBtn)
                console.log("equal ok")
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
                let alreadyInput = document.getElementById("numberInput")
                let storedNum = document.createElement("p")
                storedNum.textContent = userInput.childNodes[0].textContent;
                firstInput = storedNum.textContent;
                storedNum.id = "storedNum";
                storedNum.style.marginTop = 0;
                storedNum.style.marginBottom = 0;
                resultDisp.appendChild(storedNum);
                userInput.removeChild(alreadyInput)
            }
        }
    });
    
}
function AddFirstChar(a){
    let defaultNum = document.createElement("p");
    defaultNum.textContent = a.textContent;
    defaultNum.style.marginTop = 0;
    defaultNum.style.marginBottom = 0;
    defaultNum.id = "numberInput";
    userInput.appendChild(defaultNum);
}
function AddTheOthers(a){
    let currentNum = userInput.childNodes[0];
    currentNum.textContent += a.textContent;
};
function ClearAll(){
    if(userInput.hasChildNodes() && resultDisp.hasChildNodes()){
        userInput.firstChild.remove();
        resultDisp.firstChild.remove();
    }
    else if(userInput.hasChildNodes() && !resultDisp.hasChildNodes()){
        userInput.firstChild.remove();
    }
    else if(!userInput.hasChildNodes() && resultDisp.hasChildNodes()){
        resultDisp.firstChild.remove();
    }
};
function Operate(a, b, c){
    switch(a){
        case "add":
            return b + c;
        case "minus":
            return b - c;
        case "multiply":
            return b * c;
        case "division":
            return b / c;
    }
};
