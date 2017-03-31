const express = require('express');
const router = express.Router();
const { getCastles } = require('../services/rf');

router.get('/:kingdomName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  let castles = getCastles(kingdomName);
  res.render('castles', { kingdomName, castles });
});

module.exports = router;
