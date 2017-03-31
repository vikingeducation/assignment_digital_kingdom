const express = require('express');
const router = express.Router();

router.get('/:kingdomName/:castleName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  let lieges = getLieges(kingdomName, castleName);
  res.render('castles', { kingdomName, castleName, lieges });
});

module.exports = router;
