'use strict';

// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path'),
    favicon = require('static-favicon');
// set up our JSON API for later
require('./routes/api')(app);

// set up our socket server
require('./sockets/base')(io);

// start the server
server.listen(3000);


// for dev
app.use(express.static(__dirname +  '/angular-frontend/app/'));

// for production, do 'grunt --force' and then comment the line above
// and uncomment the line below

//app.use(express.static(__dirname +  '/public'));

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



module.exports = app;
