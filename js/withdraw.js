document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdraw = document.getElementById('withdraw');
    const balance = document.getElementById('balance');
    const withdrawValue = Number(document.getElementById('withdraw').innerText);
    const balanceValue = Number(document.getElementById('balance').innerText);
    const withdrawInput = Number(document.getElementById('withdraw-input').value);

    
    
    if(withdrawInput > balanceValue){
        alert("insufficient Amount ,you can't withdraw.");
        document.getElementById('withdraw-input').value = '';
        return ;
    }
    withdraw.innerText = withdrawValue + withdrawInput ;
    balance.innerText = balanceValue - withdrawInput ;
    document.getElementById('withdraw-input').value = '';

    

})