// var isLoggedIn = require('../utils/isauthenticated');
var eventModel = require('../model/event');

module.exports = function(app,passport) {
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

	app.get('/api/logout',isLoggedIn, function(req, res){
		req.logout();
		res.redirect('/');
	})

	app.get('/api/events',isLoggedIn,function(req,res,next) {
            eventModel.find({}, function (err, data) {
                res.json(data);
            });
        });
	app.post('/api/addevent',isLoggedIn, function(req, res, next) {
	    var newevent = new eventModel({
	        name : req.body.eventName,
	        description : req.body.eventDesc,
	        createdBy : req.body.createdBy
	    })
	    newevent.save(function(err, data){
	        if(err){ return next(err) }
	        res.json(201, data)
	    })
	});
	app.get('/api/events/:id',isLoggedIn,function(req,res,next) {
		eventModel.findOne({_id:req.params.id}, function (err, data) {
		    res.json(data);
		});
	});

}

function isLoggedIn(req, res, next) {

	console.log(req.user)
	// if(req.user){
	// 	console.log(req.user)
		return next();
	// }
	// else{
	// 	res.redirect('/login');
	// }
}