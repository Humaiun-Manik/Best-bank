function changeBalance(type) {
    const inputAmount = document.getElementById(`${type}-input`);
    const inputAmountText = inputAmount.value;
    const inputAmountNumber = parseFloat(inputAmountText);

    if (inputAmountNumber > 0) {
        const previousTotal = document.getElementById(`${type}-total`);
        const previousTotalText = previousTotal.innerText;
        const previousTotalNumber = parseFloat(previousTotalText);
        previousTotal.innerText = previousTotalNumber + inputAmountNumber;
        inputAmount.value = '';

        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceNumber = parseFloat(totalBalanceText);
        if (type == 'withdraw') {
            totalBalance.innerText = totalBalanceNumber - inputAmountNumber;
        } else {
            totalBalance.innerText = totalBalanceNumber + inputAmountNumber;
        }
    } else {
        alert('Please enter a number!!');
    }
}
// deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    changeBalance('deposit');
})
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    changeBalance('withdraw');
})