const ConfigStore = require('configstore');
const pkg = require('../package.json');
const colors = require('colors');

class KeyManager {
    constructor(){
        this.conf = new ConfigStore(pkg.name);
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw 'No API Key Found - Get a key at https://nomics.com'.red;
        }
        return key
    }

    deleteKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw 'No API Key Found - Get a key at https://nomics.com'.red;
        }

        this.conf.delete('apiKey');
        return;
    }

}

module.exports = KeyManager;