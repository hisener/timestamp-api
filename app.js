'use strict';

var express = require('express');
var api = require('./api.js');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.render('index',
    { url : 'https://fcc-hisener-1.c9users.io/' }
  );
});

app.get('/:param', function(req, res) {
  res.json( api(req.params.param) );
});

app.listen(app.get('port'), function() {
  console.log('Node.js listening on port %d...', app.get('port'));
});