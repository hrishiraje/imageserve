// Require all dependencies
var express = require('express');
var db = require('./db');
var cors = require('cors');
var parser = require('body-parser');
var router = require('./routes');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Create the express app
var app = express();
app.set('port', 3000);

// Parse the body and allow for query strings
app.use(parser.json());
app.use(cors());

// Server static files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
