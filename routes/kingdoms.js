const express = require('express');
const { 
  getKingdoms,
  getCastles,
  addKingdom
} = require('../services/kingdom-store');
const castles = require('./castles');
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

router.use('/:kingdom/castles', castles);


module.exports = router;