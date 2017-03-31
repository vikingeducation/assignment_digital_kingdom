var express = require('express');
var router = express.Router();
var {
  displayBasicInfo,
  addKingdom,
  displayCastles,
  saveJson
} = require('../services/store-kingdoms')


router.get('/', function(req, res, next) {
  const kingdoms = displayBasicInfo()
  res.render('kingdoms', { kingdoms });
});


router.post('/',(req, res) => {
  const json = addKingdom(req.body, "./lib/kingdoms.json")
  saveJson(json, "./lib/kingdoms.json");
  res.redirect('back');
})


router.get('/kingdoms/:kingdomName', function(req, res, next) {
  const kingdomName = (req.params.kingdomName)
  console.log(kingdomName)
  const castles = displayCastles(kingdomName)
  res.render('kingdom', { castles, kingdomName });
});



module.exports = router;
