var connection = require('../db/connect').connection;

module.exports = {
  home: {
    get: function(cb) {
      connection.query('SELECT title from images', function(error, result, field) {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      });
    }
  }
  
};