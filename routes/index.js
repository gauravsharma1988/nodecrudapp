var express = require('express');
var router = express.Router();
var Auth = require('./auth.service');

//var connection = require('../connection');

var obj = {};
router.get('/', Auth.isUserAuthenticated, function(req, res, next) {
	return res.send('hello');
    //connection.acquire(function (err, con) {
		//console.log(err);
        connection.query('SELECT * FROM users', function (err, rows) {
         //  connection.end();
            if(err) {
                console.log(err);
            } else {
				//console.log(rows[0].id);
                obj = JSON.parse(JSON.stringify(rows));
				//obj = {print: rows};
                res.render('index', {data:obj, title:'Express'});
            }
        });
    // });
	
});

module.exports = router;
