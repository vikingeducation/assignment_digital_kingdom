const express = require('express');
const router = express.Router();
const { getLieges } = require('../services/rf');

router.get('/:kingdomName/:castleName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  let lieges = getLieges(kingdomName, castleName);
  res.render('lieges', { kingdomName, castleName, lieges });
});

module.exports = router;
