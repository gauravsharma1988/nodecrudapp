var express = require('express');
var router = express.Router();

var connection = require('../connection');
var obj = {};

router.post('/', function(req, res) {
	if(req.session.login_user)
	{
	  return res.redirect('/'); 
	}
	//console.log("SELECT id FROM `login` WHERE username = '"+req.body.username+" and password = '"+req.body.password+"'");
	
	if(req.body || req.body.length !== 0) {	
			connection.query("SELECT id FROM `login` WHERE username = '"+req.body.username+"' and password = '"+req.body.password+"'", function (err, rows) {
				if(err) throw err;
				if(rows.length){
					req.session.login_user = req.body.username;
					res.redirect('/');
				} else {
					req.flash('error_message', 'Invalid credentials');
					res.redirect('/login');
				}
				
			});
	}					
});

router.get('/', function(req, res, next) {
 //console.log(req.body);
	if(req.session.login_user)
	{
	  return res.redirect('/'); 
	}
	res.render('login');     
});

module.exports = router;
