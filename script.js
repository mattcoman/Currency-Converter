document.addEventListener('DOMContentLoaded', () => {
    const converterForm = document.getElementById('converter-form');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const conversionResult = document.getElementById('conversion-result');

    const apiKey = 'your_exchangerate_api_key';

    converterForm.onsubmit = async (e) => {
        e.preventDefault();
        const amount = amountInput.value;
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (amount && from && to) {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
            const data = await response.json();
            const rate = data.conversion_rates[to];
            const convertedAmount = (amount * rate).toFixed(2);

            conversionResult.innerHTML = `
                <div class="result-item"><strong>Amount:</strong> ${amount} ${from}</div>
                <div class="result-item"><strong>Converted:</strong> ${convertedAmount} ${to}</div>
                <div class="result-item"><strong>Exchange Rate:</strong> 1 ${from} = ${rate} ${to}</div>
            `;
        }
    };
});
