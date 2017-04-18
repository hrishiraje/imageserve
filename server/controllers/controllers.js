var models = require('../models/models');

module.exports = {
  login: {
    get: function(req, res) {
      res
        .status(200)
        .render('login');
    },
    post: function(req, res) {
      
    }
  },
  signup: {
    get: function(req, res) {
      res
        .status(200)
        .render('signup');
    },
    post: function(req, res) {

    }
  }
};