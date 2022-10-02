billAmount = document.querySelector("#bill-amount");
cashGiven = document.querySelector("#cash-given");
checkButton = document.querySelector("#check-button");
errorMessage = document.querySelector("#error-message");
noOfNotesTableCells = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function processing(){
    hideErrorMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            amountToBeReturned = cashGiven.value - billAmount.value;
            calculateNotes(amountToBeReturned);
        }else{
            showErrorMessage("Do you want to wash utensils?");
        }
    }else{
        showErrorMessage("Bill Amount can't be less than 0.");
    }
} );

function calculateNotes(amountToBeReturned){
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