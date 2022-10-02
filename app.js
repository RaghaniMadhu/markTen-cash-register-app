billAmount = document.querySelector("#bill-amount");
cashGiven = document.querySelector("#cash-given");
checkButton = document.querySelector("#check-button");
errorMessage = document.querySelector("#error-message");
noOfNotesTableCells = document.querySelectorAll(".no-of-notes");
nextButton = document.querySelector("#next");
cashGivenLabel = document.querySelector("#cash-given-label");
table = document.querySelector("table");

const notes = [2000, 500, 100, 20, 10, 5, 1];

next.addEventListener("click", function checkInput(){
    if(billAmount.value > 0){
        hideErrorMessage();
        nextButton.style.display = "none";
        cashGivenLabel.style.display = "block";
        cashGiven.style.display = "block";
        checkButton.style.display = "block";
        table.style.display = "block";
    }else{
        showErrorMessage("Bill Amount can't be less than 0.");
    }
} );

checkButton.addEventListener("click", function processing(){
    hideErrorMessage();
    if(billAmount.value > 0){
        if(cashGiven.value < billAmount.value){
            showErrorMessage("Do you want to wash utensils?");
            console.log(cashGiven.value + " " + billAmount.value);
        }else{
            amountToBeReturned = cashGiven.value - billAmount.value;
            calculateNotes(amountToBeReturned);
        }
    }else{
        showErrorMessage("Bill Amount can't be less than 0.");
    }
} );

function calculateNotes(amountToBeReturned){
    if(amountToBeReturned<0){
        showErrorMessage("Do you want to wash utensils?");
        for(var i = 0; i < 7; i++){
            noOfNotesTableCells[i].innerText = "";
        }
        return;
    }
    for(var i = 0; i < 7; i++){
        var noOfNotes = Math.trunc(amountToBeReturned/notes[i]);

        noOfNotesTableCells[i].innerText = noOfNotes;

        amountToBeReturned = amountToBeReturned % notes[i];
    }
}

function hideErrorMessage(){
    errorMessage.style.display = 'none'
}

function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}