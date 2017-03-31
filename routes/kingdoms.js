const express = require("express");
const router = express.Router();

const {getKingdoms} = require('../services/kingdom-services');


router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', {allKingdoms});
});

router.get('/kingdoms/:kingdom', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomInfo = getKingdomInfo(kingdomName);
  res.render('kingdoms', {allKingdoms});
});


module.exports = router;
