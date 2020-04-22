const ConfigStore = require('configstore');
const pkg = require('../../package.json');

class KeyManager {
    constructor(){
        this.conf = new ConfigStore(pkg.name);
    }
}