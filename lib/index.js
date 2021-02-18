'use strict';

var Zuwinda = require('./rest/Zuwinda');

var initializer = function (token) {
    return new Zuwinda(token);
};

initializer.Zuwinda = Zuwinda;

module.exports = initializer;
