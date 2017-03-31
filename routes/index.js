var express = require('express');
var router = express.Router();
var lands = require('../lib/kingdoms.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var kingdoms = {};
  lands.kingdoms.forEach((kingdom) => {
    kingdoms[kingdom.name] = {
      name: kingdom.name,
      king: kingdom.king,
      queen: kingdom.queen,
      castleCount: kingdom.castles.length,
    }
  })
  res.render('kingdoms', { kingdoms });
});

module.exports = router;


// list each kingdom with:
// king name
// queen name
// castle count

// king name, queen name, castle count

//