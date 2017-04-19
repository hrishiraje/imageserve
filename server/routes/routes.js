var controller = require('../controllers/controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/', controller.home.get);


module.exports = router;

