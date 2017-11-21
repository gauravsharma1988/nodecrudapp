var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'b7fcfb86e09db3',
    password : '40178e62',
    database : 'heroku_4e17982d1e5ba6a'
});

connection.connect(function(err) {
    if (err) { throw err; } else { console.log('connected yeah!');}
});

module.exports = connection;