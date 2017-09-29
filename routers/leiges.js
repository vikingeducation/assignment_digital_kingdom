const express = require('express');
const router = express.Router();
const { getLeigeShowInfo, saveLeige } = require('../services/leige-store');

router.get('/:castleName/:name', (req, res) => {
  const castleName = req.params.castleName;
  const leigeName = req.params.name;

  const leige = getLeigeShowInfo(castleName, leigeName);

  res.render('leiges/show', { leige, castleName });
});

router.post('/new', (req, res) => {
  const castleName = req.body.castle;
  const leigeName = req.body.name;

  saveLeige(castleName, leigeName);

  res.redirect('back');
});

module.exports = router;
