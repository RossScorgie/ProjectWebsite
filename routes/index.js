//Declaring variables
var express = require('express');
var router = express.Router();
var User = require('../models/user');

//Gets register
router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

//Main functiuon for registering new users
router.post('/', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;

        //Checks if any of the user inputs are already registered
	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
            //Checks to makes sure password is the same as the confirm
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}
                                                
                                                //Uses scheme to create new user
						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});
                                                
                                                //Will print success if new user has been added
						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
                //Error message
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});;

//Gets login
router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});

//Main login function
router.post('/login', function (req, res, next) {
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				req.session.userId = data.unique_id;
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

//Logout function 
router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});

module.exports = router;