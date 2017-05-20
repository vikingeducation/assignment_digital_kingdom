const express = require('express');
const { 
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom
} = require('../services/kingdom-store');

const router = express.Router();

router.get('/', (req, res) => {
  let allKingdoms = getKingdoms();
  res.render("kingdoms", { allKingdoms });
});

router.post('/', (req, res) => {
  let kingdom = req.body.kingdom;
  addKingdom(kingdom);
  res.redirect("back");
});

router.get('/:kingdom', (req, res) => {
  let kingdom = req.params.kingdom;
  let allCastles = getCastles(kingdom);
  res.render("kingdoms/show", { kingdom, allCastles });
});

router.get('/:kingdom/remove', (req, res) => {
  // TO DO
});

router.get('/:kingdom/castles/:castle', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let allLieges = getLieges(kingdom, castle);
  res.render("castles/show", { kingdom, castle, allLieges });
});

router.get('/:kingdom/castles/:castle/lieges/:liege', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.params.liege;
  let allVassals = getVassals(kingdom, castle, liege);
  res.render("lieges/show", { kingdom, castle, liege, allVassals });
});

module.exports = router;