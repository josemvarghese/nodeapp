var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var db = require('./config/mongodb');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected
  console.log("we're connected");
});
require('./config/passport')(passport);



var app = express();

var index = require('./routes/index');
var eventInfo = require('./routes/events');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('qcE7Htpwdfg2apdMbJ4'));
app.use(session({  saveUninitialized: true, // saved new sessions
  resave: false, // do not automatically write to the session store
  secret: 'qcE7Htpwdfg2apdMbJ4',
  cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions





// app.use('/', index);
// app.use('/users', users);
require('./routes/users')(app,passport);
// require('./routes/events')(app);
app.use('/api',eventInfo);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/templates/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
