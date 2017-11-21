var express = require('express');
var router = express.Router();
var Auth = require('./auth.service');

var connection = require('../connection');
var obj = {};

router.post('/', Auth.isUserAuthenticated, function(req, res) {
	//console.log(req.body);
	if(req.body || req.body.length !== 0) {
//console.log("UPDATE `users` SET name = '"+req.body.name+"', gender = '"+req.body.gender+"', country = '"+req.body.country+"', mobile = '"+req.body.mobile+"' WHERE id = "+parseInt(req.body.userid));		
			connection.query("UPDATE `users` SET name = '"+req.body.name+"', gender = '"+req.body.gender+"', country = '"+req.body.country+"', phone = '"+req.body.mobile+"' WHERE id = "+parseInt(req.body.userid), function (err, rows) {
				if(err) throw err;
				req.flash('success_message', 'Edit successfully');
				res.redirect('/');	
			});
	}					
});

router.get('/', Auth.isUserAuthenticated, function(req, res, next) {
	 if(req.query.id)
	 {
		connection.query('SELECT * FROM users where id = '+parseInt(req.query.id), function (err, rows) {
         //  connection.end();
            if(err) {
                console.log(err);
            } else {
				//console.log(rows[0].id);
                obj = JSON.parse(JSON.stringify(rows[0]));
				//obj = {print: rows};
                res.render('edit_customer', {data:obj, title:'Express'});
            }
        });
	 }		
});

module.exports = router;
