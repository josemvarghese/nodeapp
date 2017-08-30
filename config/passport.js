var LocalStrategy = require('passport-local').Strategy;
var User  = require('../model/user');

var passPortConfig = function  (passport) {

	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});
	passport.use('local-signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'local.username': email}, function(err, user){
				if(err)
					return done(err);
				if(user){
					// 'That email already taken'
					return done(null, false);
				} else {
					var newUser = new User();
					newUser.local.username = email;
					newUser.local.password = password;

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}
			})

		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({ 'local.username': email}, function(err, user){
				if(err)
					return done(err);
				if(!user)
					// 'No User found
					return done(null, false);
				if(user.local.password != password){
					// inavalid password
					return done(null, false);
				}
				return done(null, user);

			});
		});
	}
	));
}

module.exports = passPortConfig;