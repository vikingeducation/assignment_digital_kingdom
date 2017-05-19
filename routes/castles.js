const express = require('express');
const { 
  getKingdoms,
  getCastles 
} = require('../services/kingdom-store');

const router = express.Router();

router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render("kingdoms", { allKingdoms });
});

router.get('/:kingdom', (req, res) => {
  const kingdom = req.params.kingdom;
  const allCastles = getCastles(kingdom);
  res.render("kingdoms/show", {kingdom, allCastles});
});

module.exports = router;