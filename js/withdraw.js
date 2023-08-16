document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdraw = document.getElementById('withdraw');
    const balance = document.getElementById('balance');
    const withdrawValue = Number(document.getElementById('withdraw').innerText);
    const balanceValue = Number(document.getElementById('balance').innerText);
    const withdrawInput = Number(document.getElementById('withdraw-input').value);

    
    withdraw.innerText = withdrawValue + withdrawInput ;
    balance.innerText = balanceValue - withdrawInput ;

    document.getElementById('withdraw-input').value = '';

})