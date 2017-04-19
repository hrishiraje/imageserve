var models = require('../models/models');

module.exports = {
  home: {
    get: function(req, res) {
      models.home.get(function(err, data) {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .send(data);
        }
      });
    }
  }
};