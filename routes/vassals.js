const express = require('express');
const router = express.Router();
const { getVassals } = require('../services/rf');

router.get('/:kingdomName/:castleName/:liegeName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  const liegeName = req.params.liegeName;
  let vassals = getVassals(kingdomName, castleName, liegeName);

  res.render('vassals', { kingdomName, castleName, liegeName, vassals });
});

module.exports = router;