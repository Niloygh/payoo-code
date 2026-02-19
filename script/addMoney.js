document.getElementById('add-money-btn').addEventListener('click', function(){
    // 1- bank account set
    const bankAccount = getValueFromInput('add-money-bank')
    // console.log(bankAccount)
    if(bankAccount == 'Select a bank'){
        alert('Please select a bank');
        return;
    }

    // 2- get bank account number
    const accno = getValueFromInput('add-money-number')
    if(accno.length != 11){
        alert('Invalid account number');
        return;
    }

    // 3- get amount
    const amount = getValueFromInput('add-money-amount')
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount)
    console.log(newBalance);

    
    const pin = getValueFromInput('add-money-pin')
    if(pin == '1234'){
        alert(`Add Money Success from
             ${bankAccount} 
             at ${ new Date()}`)
        setBalance(newBalance)

        // 1- history-container ke dore niye asbo
        const history = document.getElementById('history-container')

        // 2- new div create korbo
        const newHIstory = document.createElement('div')
         
        // 3- new div innerHTML add korbo
        newHIstory.innerHTML= `
        <div class="Transaction-card p-5 bg-base-100">
            Add Money Success from ${bankAccount} , acc-no ${accno} at ${ new Date()}
        </div>
        `
        
        // 4- history container e newDiv append korbo
        history.append(newHIstory)
    }
    else{
        alert('Invalid Pin')
        return;
    }
    
    
    
})