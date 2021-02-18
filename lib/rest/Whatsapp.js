function Whatsapp(zuwinda) {
    this.token = zuwinda.token;
    this._campaigns = undefined;
    this._send = undefined;
    this._get = undefined;
    this.headers = {
        'Content-type': 'application/json',
        'x-access-key': zuwinda.token
    }
}

Whatsapp.prototype.constructor = Whatsapp;

Object.defineProperty(Whatsapp.prototype,
    'text', {
    get: function () {
        let WA = require('./whatsapp/v1');
        this._send = new WA(this).text;
        return this._send;
    }
});

Object.defineProperty(Whatsapp.prototype,
    'get', {
    get: function () {
        let WA = require('./whatsapp/v1');
        this._get = new WA(this).get;
        return this._get;
    }
});

module.exports = Whatsapp;