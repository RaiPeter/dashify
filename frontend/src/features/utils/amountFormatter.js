const amountFormatter = (amount) => {
    if (isNaN(amount)) {
        return "Sorry, the amount is not a number";
    }
    return `$ ${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
}

export default amountFormatter
