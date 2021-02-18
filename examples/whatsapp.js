'use strict';

var Zuwinda = require('../lib');

var zuwinda_token = 'Your Token';
var instances_id = 'Your instances ID';

var zuwinda = new Zuwinda(zuwinda_token);

// whatsapp text
(async () => {
    try {
        let response = await zuwinda.whatsapp.text({
            instances_id,
            to: '08151xxxxx',
            content: 'halo',
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();