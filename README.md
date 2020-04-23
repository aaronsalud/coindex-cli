# Coindex-cli

This is a command line interface that can be used to check for cryptocurrency prices. 
The prices are based with the Nomics API

## Setup Instuctions
- Visit https://nomics.com to acquire an API Key
- Install dependecies using `npm install` command
- Add symbolic link using `sudo npm link` command to be able to use `coindex` command in the cli
- Use `coindex key set API_KEY` to set API key

## Usage
- Use `coindex check price` to check cryptocurrency prices. BTC, BSV, and LTC are the default coins. Default fiat currency is set to CAD 
- Use `coindex check price --coin=COIN,COIN,COIN` to define coins to be displayed
- Use `coindex check price --curr=CUR` to define fiat currency to be converted to
- Use `coindex check price --coin=COIN,COIN,COIN --curr=CUR` to override all the defaults
