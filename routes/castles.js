const express = require('express');
const router = express.Router();
const { getCastles, addCastle } = require('../services/rf');

router.get('/:kingdomName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  let castles = getCastles(kingdomName);
  res.render('castles', { kingdomName, castles });
});

router.post('/:kingdomName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  addCastle(kingdomName, req.body.castleName);
  const castles = getCastles(kingdomName);
  res.render('castles', { kingdomName, castles });
});

module.exports = router;
