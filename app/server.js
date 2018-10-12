var express   = require('express');
var functions = require('./functions.js');
var app = express();


app.get('/add', function(req, res){
  var a = parseInt(req.query.a, 10);
  var b = parseInt(req.query.b, 10);

  var reply = JSON.stringify(functions.add(a, b));
  res.send(reply);
});

app.get('/addString', function(req, res){
  var a = req.query.a;
  var b = req.query.b;
  var reply = JSON.stringify(functions.add(a, b));
  res.send(reply);
});

app.listen(3000);
