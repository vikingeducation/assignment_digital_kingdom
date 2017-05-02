var express = require('express');
var router = express.Router();
const feudal = require('../bin/feudal');
const debug = require('debug')('feudal');

/* GET home page. */
router.get('/', function(req, res, next) {
  const kingdoms = feudal.getKingdoms();
  res.render('index', { title: 'Digital Kingdoms of the World', kingdoms: kingdoms });
});

router.post('/', function(req, res, next) {
  feudal.addKingdom(req.body.name, req.body.king, req.body.queen);
  res.redirect("back");
});

module.exports = router;
