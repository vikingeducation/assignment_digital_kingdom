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
  let allKingdoms = getKingdoms();
  res.render("kingdoms", { allKingdoms });
});

router.post('/', (req, res) => {
  let kingdom = req.body.kingdom;
  let king = req.body.king;
  let queen = req.body.queen;
  addKingdom(kingdom, king, queen);
  res.redirect("back");
});

router.get('/:kingdom', (req, res) => {
  let kingdom = req.params.kingdom;
  let allCastles = getCastles(kingdom);
  res.render("kingdoms/show", { kingdom, allCastles });
});

router.get('/:kingdom/castles/:castle', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let allLieges = getLieges(kingdom, castle);
  res.render("castles/show", { kingdom, castle, allLieges });
});

router.post('/:kingdom/castles/', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.body.castle;
  addCastle(kingdom, castle);
  res.redirect("back");
});

router.get('/:kingdom/castles/:castle/lieges/:liege', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.params.liege;
  let allVassals = getVassals(kingdom, castle, liege);
  res.render("lieges/show", { kingdom, castle, liege, allVassals });
});

router.post('/:kingdom/castles/:castle/lieges', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.body.liege;
  addLiege(kingdom, castle, liege);
  res.redirect("back");
});

router.post('/:kingdom/castles/:castle/lieges/:liege/vassals', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.params.liege;
  let vassal = req.body.vassal;
  addVassal(kingdom, castle, liege, vassal);
  res.redirect("back");
});

module.exports = router;