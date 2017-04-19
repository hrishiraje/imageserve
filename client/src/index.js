var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app').App;

$.get('localhost:3000', function(err, data) {
  if (err) {
    throw err;
  } else {
    ReactDOM.render(<App images={data}/>, document.getElementById('main'));
  }
});
