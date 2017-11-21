var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');


var index = require('./routes/index');
var users = require('./routes/users');
var add_customer = require('./routes/add_customer');
var delete_customer = require('./routes/delete_customer');
var edit_customer = require('./routes/edit_customer');
var login = require('./routes/login');
var logout = require('./routes/logout');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//                 INITIALIZE MODULES -------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: false,
  resave: true,
  rolling: true,
  cookie: {
	 expires: 20 * 1000
  }
}))

app.use(flash());


// ------------------------------- Routes ----------------
app.use(function(req, res, next){
	res.locals.flash_message = req.flash();
	 res.locals.login_user = req.session.login_user;
    next();
});

app.use('/', index);
app.use('/login', login);
app.use('/users', users);
app.use('/add_customer', add_customer);
app.use('/delete_customer', delete_customer);
app.use('/edit_customer', edit_customer);
app.use('/logout', logout);


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
