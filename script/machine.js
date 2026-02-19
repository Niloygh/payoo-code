// console.log('machine add ')

// machine  id --> input value
function getValueFromInput(id){
    console.log(id)
    const input = document.getElementById(id)
    const inputValue = input.value;
    console.log(id, inputValue);
    return inputValue;
}


// machine -> balance 
function getBalance(){
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    console.log('current Balance :', Number(balance))
    return Number(balance);
}

// machine value -> set Balance
function setBalance(value){
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id){
    const addMoney = document.getElementById('send-money')
    const cashout = document.getElementById('cashout')
    const history = document.getElementById('history')

    // console.log(`add Money- ${addMoney} , Cashout - ${cashout}`)
    // sobai ke hide  kore dew
    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    history.classList.add('hidden')

    // id wala element ta ke tumi show koro
    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}