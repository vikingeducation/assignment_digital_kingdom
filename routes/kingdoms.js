const express = require('express');
const {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom,
  addCastle,
  addLiege,
  addVassal
} = require('../services/kingdom-store');

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
  const castles = getCastles(kingdom);
  res.render('castles/show', { castles, kingdom });
});

router.post('/:kingdom', (req, res) => {
  const kingdom = req.params.kingdom;
  const name = req.body.name;
  addCastle(kingdom, name);
  res.redirect('back');
});

router.get('/:kingdom/:castle', (req, res) => {
  const { kingdom, castle } = req.params;
  const lieges = getLieges(kingdom, castle);
  res.render('lieges/show', { lieges, castle, kingdom });
});

router.post('/:kingdom/:castle', (req, res) => {
  const { kingdom, castle } = req.params;
  const name = req.body.name;
  addLiege(kingdom, castle, name);
  res.redirect('back');
});

router.get('/:kingdom/:castle/:liege', (req, res) => {
  const { kingdom, castle, liege } = req.params;
  const vassals = getVassals(kingdom, castle, liege);
  res.render('vassals/show', { vassals, castle, liege, kingdom });
});

router.post('/:kingdom/:castle/:liege', (req, res) => {
  const { kingdom, castle, liege } = req.params;
  const name = req.body.name;
  addVassal(kingdom, castle, liege, name);
  res.redirect('back');
});

module.exports = router;
