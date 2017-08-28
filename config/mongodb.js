// mongodb://<dbuser>:<dbpassword>@ds159953.mlab.com:59953/nodeapp


	var mongoose = require('mongoose');
	mongoose.connect('mongodb://jose:jose@ds159953.mlab.com:59953/nodeapp');
	var db = mongoose.connection;
	module.exports = db;