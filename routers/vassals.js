const express = require('express');
const router = express.Router();
const { saveVassal, executeVassal } = require('../services/vassal-store');

router.post('/new', (req, res) => {
  const castleName = req.body.castle;
  const leigeName = req.body.leige;
  const vassalName = req.body.name;

  saveVassal(castleName, leigeName, vassalName);

  res.redirect('back');
});

router.delete('/:castleName/:leigeName/:name', (req, res) => {
  const castleName = req.params.castleName;
  const leigeName = req.params.leigeName;
  const vassalName = req.params.name;

  executeVassal(castleName, leigeName, vassalName);

  res.redirect('back');
});

module.exports = router;
