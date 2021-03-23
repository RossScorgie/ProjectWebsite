//Declaring variables
var express = require('express');
var router = express.Router();

//Get index
router.get('/', function(req, res) {
    res.render('index');
});

//Get register
router.get('/register', function(req, res) {
    res.render('register');
});

//Get dashboard
router.get('/abtest', function(req, res) {
    res.render('abTest');
});

//Get login
router.get('/login', function(req, res) {
    res.render('login');
});

//Exporting
module.exports = router; 