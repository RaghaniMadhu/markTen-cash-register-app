billAmount = document.querySelector("#bill-amount");
cashGiven = document.querySelector("#cash-given");
checkButton = document.querySelector("#check-button");
errorMessage = document.querySelector("#error-message");


checkButton.addEventListener("click", function(){
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
    console.log(amountToBeReturned);

}

function hideErrorMessage(){
    errorMessage.style.display = 'none'
}

function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}