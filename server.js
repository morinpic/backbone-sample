var application_root = __dirname;
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express.static(path.join(application_root, 'assets')));

  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

var port = 4711;
app.listen(port, function() {
  console.log('Expressサーバがポート %d で起動しました。モード: %s', port, app.settings.env);
});