
module.exports = function(app,passport) {
	// console.log(app);
	// console.log(passport);
	app.post('/api/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));
	// app.get('/two', isLoggedIn, function(req, res){
	// 	// res.render('profile.ejs', { user: req.user });
	// });
	app.post('/api/signup', passport.authenticate('local-signup', {
		successRedirect: '/successsignup',
		failureRedirect: '/failuresignup',
		failureFlash: true
	}));
	app.get('/successsignup', function(req, res) {
	    res.json({ result: 1 });
	});
	app.get('/failuresignup', function(req, res) {
	    res.json({ result: 0,message:"account already exist" });
	});
	app.get('/api/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})

}

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/index');
}


// module.exports = userRoutes;
