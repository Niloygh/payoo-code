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