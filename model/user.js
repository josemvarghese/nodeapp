var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  	local: {
		username: String,
		password: String
	}
});

module.exports = mongoose.model('user',userSchema);