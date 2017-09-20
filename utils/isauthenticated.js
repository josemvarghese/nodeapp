 module.exports = function (req, res, next) {

	console.log("req.session.id");
	console.log(req.session.id);
	if(req.session.id){
		return next();
	}
	res.redirect('/login');
};
