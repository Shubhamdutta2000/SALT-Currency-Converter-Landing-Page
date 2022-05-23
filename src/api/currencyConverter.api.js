import axios from "axios";

const BASE_URL = 'https://api.apilayer.com/fixer';

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @param {String} text 
 * @returns API for currency converter
 */
const currencyConverterApi = async (from, to, amount) => {
    try {
        const config = {
            headers: {
                apikey: process.env.REACT_APP_API_KEY
            }
        }
        let { data } = await axios.get(`${BASE_URL}/convert?to=${to}&from=${from}&amount=${amount}`, config);
        console.log(data.result);
        return data.result;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};

export default currencyConverterApi;