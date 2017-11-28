const express = require('express');
const router = express.Router();
const getKingdoms = require('../services/kingdoms-services')[0];

router.get('/kingdoms', (req, res) => {
  const kingdoms = getKingdoms();
  // const kingdomsIdxes = Object.keys(kingdoms);
  res.send(getKingdoms());
})

module.exports = router;
