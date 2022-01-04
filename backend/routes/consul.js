var express = require('express');
var router = express.Router();

var consul = new Consul({
  host: '10.0.0.150', // required
  token: '31889845-62b9-f6e1-e21b-284181c2fba2', // optional
/*   tlsCert: '<your-cert>', // optional
  tlsKey: '<your-cert-key>', // optional
  ca: '<your-ca-cert>', // optional */
  port: '8500', // optional; defaults to '8500'
  protocol: 'https', // optional; defaults to 'https'
  strictSSL: false, // optional; defaults to true
});
consul.get('fastapi')
  .then(result => {
    console.log(result.value); // the key's value; undefined if it doesn't exist
    console.log(result.responseStatus); // the HTTP status code of the Consul response
    console.log(result.responseBody); // the HTTP body of the Consul response
  }, rejectedErr => {
    console.log(rejectedErr);
  });

/* GET users listing. */
router.get('/consul_kv', function(req, res, next) {
  res.send(result);
});

module.exports = router;
