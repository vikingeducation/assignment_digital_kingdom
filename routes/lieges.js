const express = require('express');
const router = express.Router();
const { getLieges, addLiege } = require('../services/rf');

router.get('/:kingdomName/:castleName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  let lieges = getLieges(kingdomName, castleName);
  res.render('lieges', { kingdomName, castleName, lieges });
});

router.post('/:kingdomName/:castleName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  addLiege(req.params.kingdomName, req.params.castleName, req.body.liegeName);
  const lieges = getLieges(req.params.kingdomName, req.params.castleName);
  res.render('lieges', { kingdomName, castleName, lieges });
});

module.exports = router;
