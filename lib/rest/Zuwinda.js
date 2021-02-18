function Zuwinda(token) {
    this._sms = undefined;
    this._whatsapp = undefined;
    this.token = token;
    if (!this.token) {
        throw new Error('Token is required');
    }
}

Zuwinda.prototype.constructor = Zuwinda;

Object.defineProperty(Zuwinda.prototype,
    'sms', {
    get: function () {
        if (!this._sms) {
            var Sms = require('./Sms');  /* jshint ignore:line */
            this._sms = new Sms(this);
        }
        return this._sms;
    }
});

Object.defineProperty(Zuwinda.prototype,
    'whatsapp', {
    get: function () {
        if (!this._whatsapp) {
            var WA = require('./Whatsapp');  /* jshint ignore:line */
            this._whatsapp = new WA(this);
        }
        return this._whatsapp;
    }
});

module.exports = Zuwinda;
