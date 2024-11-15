let balance = 50000;
let isPinEntered = false;
const correctPin = "1234";

function updateDisplay(message) {
    document.getElementById("display").innerText = message;
}

function goToAuthentication() {
    window.location.href = "authentication.html";
}
function goToIndex() {
    window.location.href = "index.html";
}
function goToWithdraw() {
    window.location.href = "withdraw.html"
}

function enterPin() {
    const input = document.getElementById("inputField").value;
    if (input === correctPin) {
        isPinEntered = true;
        updateDisplay("PIN accepted. Choose a transaction.");
        window.location.href = "transactions.html";
    } else {
        updateDisplay("Invalid PIN. Please try again.");
    }
    document.getElementById("inputField").value = "";
}

function checkBalance() {
    if (isPinEntered) {
        updateDisplay("Your balance is: Rs. " + balance);
    } else {
        updateDisplay("Please enter PIN first.");
    }
}

function deposit() {
    if (isPinEntered) {
        const amount = parseFloat(document.getElementById("inputField").value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateDisplay("Deposited Rs. " + amount + ". New balance is Rs. " + balance);
        } else {
            updateDisplay("Invalid amount. Please enter a valid number.");
        }
    } else {
        updateDisplay("Please enter PIN first.");
    }
    document.getElementById("inputField").value = "";
}

function withdraw(amount) {
    showConfirmation(amount);
}
function customWithdraw() {
    const amount = parseFloat(document.getElementById("inputAmount").value);
    if (!isNaN(amount) && amount > 0) {
        showConfirmation(amount);
    } else {
        displayOverlayMessage("Please enter a valid amount.", "red");
    }
    document.getElementById("inputAmount").value = "";
}

function showConfirmation(amount) {
    if (amount > balance) {
        displayOverlayMessage("Insufficient funds.", "red");
    } else {
        document.getElementById("withdrawalAmount").innerText = amount;
        document.getElementById("confirmationOverlay").style.display = "flex";
        document.getElementById("confirmationMessage").innerText = ""; 
    }
}

function confirmTransaction() {
    const amount = parseFloat(document.getElementById("withdrawalAmount").innerText);
    if (balance >= amount){
        balance -= amount;
    displayOverlayMessage(`Transaction successful! New balance is Rs. ${balance}.`, "green");
    setTimeout(() => {
        document.getElementById("confirmationOverlay").style.display = "none";
    }, 2000);
    } else{
        displayOverlayMessage("Insufficient funds.","red");
    }
    
}

function cancelTransaction() {
    document.getElementById("confirmationOverlay").style.display = "none";
    displayOverlayMessage("Transaction cancelled.", "black");
}

function displayOverlayMessage(message, color) {
    const confirmationMessageElement = document.getElementById("confirmationMessage");
    confirmationMessageElement.innerText = message;
    confirmationMessageElement.style.color = color;
}
function withdraw(amount) {
    showConfirmation(amount);
}

function customWithdraw() {
    const amount = parseFloat(document.getElementById("inputAmount").value);
    if (!isNaN(amount) && amount > 0) {
        showConfirmation(amount);
    } else {
        displayOverlayMessage("Please enter a valid amount.", "red");
    }
    document.getElementById("inputAmount").value = "";
}

function showConfirmation(amount) {
    if (amount > balance) {
        displayOverlayMessage("Insufficient funds.", "red");
    } else {
        document.getElementById("withdrawalAmount").innerText = amount;
        document.getElementById("confirmationOverlay").style.display = "flex";
        document.getElementById("confirmationMessage").innerText = "";
    }
}


function displayOverlayMessage(message, color) {
    const confirmationMessageElement = document.getElementById("confirmationMessage");
    confirmationMessageElement.innerText = message;
    confirmationMessageElement.style.color = color;
}

function exit() {
    window.location.href = "exit.html";
}

