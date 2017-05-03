var express = require('express');
var router = express.Router();
const feudal = require('../bin/feudal');
const debug = require('debug')('feudal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/kingdoms');
});



module.exports = router;
