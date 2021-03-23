//Declaring variables
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creates new schema for collections
userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
//Stores new users in teh user collections
user = mongoose.model('users', userSchema);

module.exports = user;