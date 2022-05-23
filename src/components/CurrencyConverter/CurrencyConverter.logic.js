import React from 'react'
import currencyConverterApi from '../../api/currencyConverter.api';

export const CurrencyConverterLogic = () => {

    const [fromCurrency, setFromCurrency] = React.useState("USD");
    const [toCurrency, setToCurrency] = React.useState("USD");
    const [amount, setAmount] = React.useState(0);
    const [resAmount, setResAmount] = React.useState("0");

    const convertCurrencyHandler = async () => {
        console.log(fromCurrency, toCurrency, amount);
        const data = await currencyConverterApi(fromCurrency, toCurrency, amount);
        setResAmount(data);
    }

    return {
        fromCurrency,
        toCurrency,
        amount,
        resAmount,
        setFromCurrency,
        setToCurrency,
        setAmount,
        convertCurrencyHandler
    }
}
