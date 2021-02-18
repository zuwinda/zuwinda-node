# zuwinda-node

## Documentation

The documentation for the Zuwinda API can be found [here][apidocs].


## Sample Usage

Check out these [code examples][codeexamples] in JavaScript to get up and running quickly.


```javascript
const Zuwinda = require('zuwinda');
const client = new Zuwinda('Your token');
```

## Example


```javascript
const Zuwinda = require('zuwinda');
const client = new Zuwinda('Your token');

(async() => {
 try {
       let response = await zuwinda.sms.send({
           to: '08151xxxxx',
           content: 'Hello world!!'
       });
       console.log(response);
    } catch (error) {
       console.log(error);
    }
});
```


[apidocs]: https://docs.zuwinda.com
[codeexamples]: https://github.com/zuwinda/zuwinda-node/examples