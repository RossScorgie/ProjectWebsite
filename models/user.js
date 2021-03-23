var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	tea: Number,
        coffee: Number,
        chocolate: Number
}),
user = mongoose.model('abTest', userSchema);

module.exports = user;