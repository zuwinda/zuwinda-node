const { default: axios } = require('axios');
const { BASE_URL, VERSION } = require('../../config/base');

class V1 {
    constructor(zuwinda) {
        this.headers = zuwinda.headers;
    }

    get(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}/${VERSION}/message/sms`, { params, headers: this.headers }).then((res) => {
                const data = res.data;
                if (data.success) {
                    return resolve(data);
                }
                return reject(data);
            }).catch((error) => {
                if (error.response) {
                    reject(error.response.data);
                } else if (error.request) {
                    reject(error.request);
                } else {
                    reject(error.message);
                }
            });
        });
    }

    send(options) {
        options = options || {}
        if (!options.to) {
            throw new Error('To is required');
        }
        if (!options.content) {
            throw new Error('Content is required');
        }
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}/${VERSION}/message/send-sms`, {
                ...options
            }, { headers: this.headers }).then((res) => {
                const data = res.data;
                if (data.success) {
                    return resolve(data);
                }
                return reject(data);
            }).catch((error) => {
                if (error.response) {
                    reject(error.response.data);
                } else if (error.request) {
                    reject(error.request);
                } else {
                    reject(error.message);
                }
            });
        });
    }
}

module.exports = V1;