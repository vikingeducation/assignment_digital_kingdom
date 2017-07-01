const express = require('express');
const {
  getKingdoms,
  getRulers,
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
  const allKingdoms = getKingdoms()
  res.render("kingdoms", { allKingdoms });
});

router.get('/:kingdom', (req, res) => {
  const kingdom = req.params.kingdom;
  const allCastles = getCastles(kingdom);
  res.render('kingdoms/showKingdom', { kingdom, allCastles });
});

router.get('/:kingdom/:castle', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const allLieges = getLieges(kingdom, castle);
  res.render('castles/showCastle', { kingdom, castle, allLieges });
});

router.get('/:kingdom/:castle/:liege', (req, res) => {
  const kingdom = req.params.kingdom;
  const castle = req.params.castle;
  const liege = req.params.liege;
  const allVassals = getVassals(kingdom, castle, liege);
  res.render('lieges/showLiege', {kingdom, castle, liege, allVassals });
});

router.post('/', (req, res) => {
  const name = req.body.kingdomName;
  const king = req.body.kingdomKing;
  const queen = req.body.kingdomQueen;

  addKingdom(name, king, queen);

  res.redirect("back");
});

router.post('/:kingdom', (req, res) => {
  const castleName = req.body.castleName;
  const kingdomName = req.params.kingdom;

  addCastle(kingdomName, castleName);

  res.redirect("back");
})

module.exports = router;
