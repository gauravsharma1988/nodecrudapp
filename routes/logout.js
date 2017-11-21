var express = require('express');
var router = express.Router();

/* LOGOUT user. */
router.get('/', function(req, res, next) {
 req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
