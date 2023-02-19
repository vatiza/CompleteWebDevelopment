
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    console.log(newDepositAmount);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    // get blance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount; 
    setTextElementValueById('balance-total', newBalanceTotal);
})