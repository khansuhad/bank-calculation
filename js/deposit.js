document.getElementById('deposit-button').addEventListener('click',function(){
    const deposit = document.getElementById('deposit');
    const balance = document.getElementById('balance');
    const depositValue = Number(document.getElementById('deposit').innerText);
    const balanceValue = Number(document.getElementById('balance').innerText);
    const depositInput = Number(document.getElementById('deposit-input').value);

    
    const depositTofixed = depositValue + depositInput ;
    const balanceTofixed = balanceValue + depositInput ;
     deposit.innerText = depositTofixed.toFixed(2);
     balance.innerText = balanceTofixed.toFixed(2);

    document.getElementById('deposit-input').value = '';

})