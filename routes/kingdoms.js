var express = require('express');
var router = express.Router();
var {
  displayBasicInfo,
  addKingdom,
  saveJson
} = require('../services/store-kingdoms')

/* GET home page. */
router.get('/', function(req, res, next) {
  const kingdoms = displayBasicInfo()
  res.render('kingdoms', { kingdoms });
});


router.post('/',(req, res) => {
  const json = addKingdom(req.body, "./lib/kingdoms.json")
  saveJson(json, "./lib/kingdoms.json");
  res.redirect('back');
})
module.exports = router;
