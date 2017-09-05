
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
	app.post('/api/signup',function(req, res, next) {
	  passport.authenticate('local-signup', function(err, user, info) {
	    if (err) {
	      return next(err); // will generate a 500 error
	    }
	    // Generate a JSON response reflecting signup
	    if (! user) {
	      return res.send({ success : false, message : 'signupfailed' });
	    }
	    return res.send({ success : true, message : 'signup succeeded' });
	  })(req, res, next);
	});
	app.post('/api/signin',function(req, res, next) {
	  passport.authenticate('local-login', function(err, user, info) {
	    if (err) {
	      return next(err); // will generate a 500 error
	    }
	    // Generate a JSON response reflecting signup
	    if (! user) {
	      return res.send({ success : false, message : 'signinfailed' });
	    }
	    return res.send({ success : true, message : 'signin succeeded' });
	  })(req, res, next);
	});
	// 
	app.get('/successsignup', function(req, res) {
 			 res.render('index', { title: 'Express' });
	});
	app.get('/failuresignup', function(req, res) {
  			res.render('index', { title: 'Express' });
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
