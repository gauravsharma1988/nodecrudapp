var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'nodedb'
});

connection.connect(function(err) {
    if (err) { throw err; } else { console.log('connected yeah!');}
});

module.exports = connection;