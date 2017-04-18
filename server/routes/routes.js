var controller = require('../controllers/controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/', controller.login.get);

router.get('/login', controller.login.get);

router.post('/login', controller.login.post);

router.get('/signup', controller.signup.get);

router.post('/signup', controller.signup.post);

module.exports = router;

