var express = require('express');
var router = express.Router();
var Auth = require('./auth.service');

var connection = require('../connection');
var obj = {};

router.get('/', Auth.isUserAuthenticated, function(req, res, next) {
	//console.log(req.body);
	if(req.query.id) {	
			connection.query("DELETE FROM `users` WHERE id = "+parseInt(req.query.id), function (err, rows) {
				if(err) throw err;
				req.flash('success_message', 'Deleted successfully');
				res.redirect('/');	
			});
	}					
});

module.exports = router;
