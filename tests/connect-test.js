/**
 * Created by dossorio on 27/04/2014.
 */

function logger(req, res, next) {
    console.log('Request received for: ' + req.url);
    next();
}

function hello(req, res, next) {
    debugger;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello my friend \n");
}

var connect = require('connect');
var app = connect();

app
    .use(logger)
    .use(hello)
    .listen(8888);