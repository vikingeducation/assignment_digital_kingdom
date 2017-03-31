const express = require('express');
const router = express.Router();
const { getVassals, addVassal } = require('../services/rf');

router.get('/:kingdomName/:castleName/:liegeName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  const liegeName = req.params.liegeName;
  let vassals = getVassals(kingdomName, castleName, liegeName);

  res.render('vassals', { kingdomName, castleName, liegeName, vassals });
});

router.post('/:kingdomName/:castleName/:liegeName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  const liegeName = req.params.liegeName;
  addVassal(req.params.kingdomName, req.params.castleName, req.params.liegeName, req.body.vassalName);
  const vassals = getVassals(req.params.kingdomName, req.params.castleName, req.params.liegeName);
  res.render('vassals', { kingdomName, castleName, liegeName, vassals });
});

module.exports = router;