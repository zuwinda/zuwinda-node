function Sms(zuwinda) {
    this.token = zuwinda.token;
    this._campaigns = undefined;
    this._send = undefined;
    this._get = undefined;
    this.headers = {
        'Content-type': 'application/json',
        'x-access-key': zuwinda.token
    }
}

Sms.prototype.constructor = Sms;

Object.defineProperty(Sms.prototype,
    'send', {
    get: function () {
        let SMS = require('./sms/v1');
        this._send = new SMS(this).send;
        return this._send;
    }
});

Object.defineProperty(Sms.prototype,
    'get', {
    get: function () {
        let SMS = require('./sms/v1');
        this._get = new SMS(this).get;
        return this._get;
    }
});

module.exports = Sms;