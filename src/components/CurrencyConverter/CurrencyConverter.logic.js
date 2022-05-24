import React, { useEffect } from 'react'
import currencyConverterApi from '../../api/currencyConverter.api';

/**
 * 
 * @returns Currency converter component Logic
 */
export const CurrencyConverterLogic = () => {
    const [fromCurrency, setFromCurrency] = React.useState("USD");
    const [toCurrency, setToCurrency] = React.useState("USD");
    const [amount, setAmount] = React.useState("0.00000");
    const [resAmount, setResAmount] = React.useState("0.00000");


    useEffect(() => {
        const convertCurrencyHandler = async () => {
            const data = await currencyConverterApi(fromCurrency, toCurrency, amount);
            setResAmount(data);
        }
        if (amount !== "0.00000" && amount !== "" && amount !== "0") {
            convertCurrencyHandler();
        }
    }, [fromCurrency, toCurrency, amount]);

    return {
        fromCurrency,
        toCurrency,
        amount,
        resAmount,
        setFromCurrency,
        setToCurrency,
        setAmount,
    }
}
