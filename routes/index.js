var express = require('express');
var router = express.Router();
var kingdoms = require('../lib/kingdoms.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kingdoms', { kingdoms });
});

module.exports = router;
