const express = require('express');
const router = express.Router();
const { getKingdomIndexData, createKingdom, getKingdomShowInfo } = require('../services/kingdom-store');

router.get('/', (req, res) => {
  const kingdomData = getKingdomIndexData();
  res.render('kingdoms/index', { kingdoms: kingdomData, home: true });
});

router.post('/new', (req, res) => {
  createKingdom(req.body);
  res.redirect('/kingdoms/index');
});

router.get('/:name', (req, res) => {
  const kingdom = getKingdomShowInfo(req.params.name);
  if (kingdom == 'Kingdom not found') {
    res.redirect('/kingdoms');
  } else {
    res.render('kingdoms/show', { kingdom });
  }
});

module.exports = router;
