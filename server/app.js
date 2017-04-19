// Require all dependencies
var express = require('express');
var cors = require('cors');
var parser = require('body-parser');
var router = require('./routes/routes');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var partials = require('express-partials');
var path = require('path');


// Create the express app
var app = express();
app.set('port', 3000);

// Set express to use the modules we have included
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(partials());
// app.use(session({
//   secret: 'keyboard cat',
//   cookie: { maxAge: 60000 }
// }));

app.use(express.static(path.join(__dirname, '../public')));

// Set up routing
app.use('/', router);

// Server static files
// console.log(path.join(__dirname, '../public/index.html'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;