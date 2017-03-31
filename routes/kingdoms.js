const express = require('express');
const router = express.Router();
const { getKingdoms, addKingdom } = require('../services/rf');

router.get('/', (req, res) => {
  const kingdoms = getKingdoms();
  res.render('kingdoms', { kingdoms });
});

router.post('/', (req, res) => {
  addKingdom(req.body.kingdomName, req.body.kingName, req.body.queenName);
  const kingdoms = getKingdoms();
  res.render('kingdoms', { kingdoms });
});

module.exports = router;
