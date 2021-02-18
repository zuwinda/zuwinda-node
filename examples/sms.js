'use strict';

var Zuwinda = require('../lib');

var zuwinda_token = 'Your token';

var zuwinda = new Zuwinda(zuwinda_token);


/**
 * send sms
 * to (required)
 * content (required)
 * date (optional)
 * time (optional)
 */
(async () => {
    try {
        let response = await zuwinda.sms.send({
            to: '08151xxxxx',
            content: 'Welcome to Zuwinda'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();

/**
 * get messages
 * params:
 *  page: 1
 *  perPage: 10
 */

(async () => {
    try {
        let response = await zuwinda.sms.get({ page: 1, perPage: 10 });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();