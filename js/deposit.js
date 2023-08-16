document.getElementById('deposit-button').addEventListener('click',function(){
    const deposit = document.getElementById('deposit');
    const balance = document.getElementById('balance');
    const depositValue = Number(document.getElementById('deposit').innerText);
    const balanceValue = Number(document.getElementById('balance').innerText);
    const depositInput = Number(document.getElementById('deposit-input').value);

    
    deposit.innerText = depositValue + depositInput ;
    balance.innerText = balanceValue + depositInput ;

    document.getElementById('deposit-input').value = '';

})