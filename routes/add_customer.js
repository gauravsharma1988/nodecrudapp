var express = require('express');
var router = express.Router();
var Auth = require('./auth.service');
var connection = require('../connection');
var obj = {};

router.post('/', Auth.isUserAuthenticated, function(req, res) {
	//console.log(req.body);
	if(req.body || req.body.length !== 0) {	
			connection.query("INSERT INTO `users` VALUES('','"+req.body.name+"','"+req.body.gender+"','"+req.body.country+"','"+req.body.mobile+"')", function (err, rows) {
				if(err) throw err;
				req.flash('success_message', 'Added successfully');
				res.redirect('/');	
			});
	}					
});

router.get('/', Auth.isUserAuthenticated, function(req, res, next) {
	res.render('add_customer');     
});

module.exports = router;
