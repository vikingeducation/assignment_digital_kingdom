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
  console.log(req.body)
  const json = addKingdom(req.body.kingdom)

})
module.exports = router;
