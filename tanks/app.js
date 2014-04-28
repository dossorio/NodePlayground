/**
 * Created by dossorio on 28/04/2014.
 */
var express = require('express'),
    app = express(),
    swig = require('swig');

function home(req, res) {
    res.render('index');
}

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('view cache', false);

swig.setDefaults({cache: false});

app.use(express.static(__dirname + "/public"));

app.get('/', home);

app.listen(8888);