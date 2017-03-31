const express = require("express");
const router = express.Router();

const {
      getKingdoms,
      getKingdomInfo
      } = require('../services/kingdom-services');


router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', {allKingdoms});
});

router.get('/:kingdom', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomInfo = getKingdomInfo(kingdomName);

  res.render('kingdom/show', {kingdomInfo});
});


module.exports = router;
