var express = require('express');
var router = express.Router();

//Get index
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/account', function(req, res) {
    res.render('account');
});

router.get('/abtest', function(req, res) {
    res.render('abTest');
});

router.get('/login', function(req, res) {
    res.render('login');
});

//Exporting
module.exports = router; 