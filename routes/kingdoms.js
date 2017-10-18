const express = require('express');
const {
  getKingdoms,
  getCastles,
  addKingdom
} = require('../services/kingdom-store');
const castles = require('./castles');

const router = express.Router();

router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', { allKingdoms });
});

router.post('/', (req, res) => {
  const { name, king, queen } = req.body;
  addKingdom(name, king, queen);
  res.redirect('back');
});

router.get('/:kingdom', (req, res) => {
  const kingdom = req.params.kingdom;
  const allCastles = getCastles(kingdom);
  res.render('castles/show', { allCastles, kingdom });
});

router.use('/:kingdom/castles', castles);

module.exports = router;
