const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.env.PORT || 3000;

const getUrl = function (url) {
    var parts = url.split('/');
    var host = parts[1];
    var path = parts.slice(2).join('/');
    return 'https://' + host + '/' + path;
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.post('/*', function (req, res) {
    request.post(getUrl(req.url)).form(req.body).pipe(res);
});

app.get('/*', function (req, res) {
    request.get(getUrl(req.url)).pipe(res);
});

app.listen(port);
console.log('Octave proxy running at http://localhost:' + port);
