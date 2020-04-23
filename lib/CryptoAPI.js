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
            console.error(err);
        }
    }
}

module.exports = CryptoAPI;