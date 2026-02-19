document.getElementById('cashout-btn').addEventListener('click', function() {
    // 1- get the agent number & validate
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber)
    if(cashoutNumber.length !==11){
        alert('Invalid Agent Number')
        return;
    }

    // 2- get the amount , validate , convert to number

    const cashoutAmountInput = document.getElementById('cashout-amount')
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount)

    // 3- get the Current Balance , validate , convert to number

    const BalanceElement = document.getElementById('balance')
    const balance = BalanceElement.innerText;
    console.log(balance)

    // 4- Calculate new Balance

    const newBalance = Number(balance) - Number(cashoutAmount)

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }


    // 5- get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin')
    const pin = cashoutPinInput.value;

    if(pin === '1234'){
        // 5-1 true --> show an alert > set Balance
        alert('cashout successful');
    console.log('new Balance', newBalance)
            BalanceElement.innerText = newBalance;
    }
    else{
        // 5-1 true --> show error alert > return
        alert('Invalid Pin Please try ageing')
        return;

    }   
})

// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const cashoutNumberInput = document.getElementById('cashout-number')
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber)
//     if (cashoutNumber.length !== 11) {
//         alert('Invalid Agent Number')
//         return;
//     }

//     const cashoutAmountInput = document.getElementById('cashout-amount')
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     const BalanceElement = document.getElementById('balance')
//     const balance = BalanceElement.innerText;

//     const newBalance = Number(balance) - Number(cashoutAmount)

//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }

//     const cashoutPinInput = document.getElementById('cashout-pin')
//     const pin = cashoutPinInput.value;

//     if (pin === '1234') {
//         alert('cashout successful')
//         console.log('New Balance', newBalance)
//         BalanceElement.innerText = newBalance;
//     }
//     else{
//         alert ('Invalid Pin Please try ageing');
//         return;
//     }

// })