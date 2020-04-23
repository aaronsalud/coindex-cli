const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
    }

    async getPriceData(coins, currency){
        try{
            // Formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency
            });

            const url = `${this.baseUrl}?key=${this.apiKey}&ids=${coins}&convert=${currency}`;
            const res = await axios.get(url);
           
            let output  = '';

            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });
            return output;
        }
        catch(err){
            this.handleAPIError(err);
        }
    }

    handleAPIError(err){
        if(err.response.status === 401){
            throw 'Your API Key is invalid - Go to https://nomics.com'.red;
        }
        else if(err.response.status === 404){
            throw 'Your API is not responding - Go to https://nomics.com'.red;
        }
        else{
            throw 'Something is now working properly'.red;
        }
    }
}

module.exports = CryptoAPI;