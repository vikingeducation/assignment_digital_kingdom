const express = require("express");
const router = express.Router();

const {
  getKingdoms,
  getKingdomInfo,
  getKingdomCastles,
  getCastleInfo,
  getLiegeInfo
} = require('../services/getter_services');

const {
  deleteKingdom,
  addKingdom
} = require('../services/setter_services');

router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', {allKingdoms});
});

router.post('/:kingdom/delete', (req, res) => {
  const kingdomName = req.params.kingdom;
  deleteKingdom(kingdomName);
  res.redirect("back");
});

router.post('/', (req, res) => {
  const king = req.body.king;
  const queen = req.body.queen;
  const name = req.body.name;
  addKingdom(name, king, queen);
  res.redirect("back");
})

router.get('/:kingdom', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomInfo = getKingdomInfo(kingdomName);
  res.render('kingdom/show', {kingdomInfo});
});

router.get('/:kingdom/castles', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomCastles = getKingdomCastles(kingdomName);
  res.render('kingdom/show_castles', {kingdomName, kingdomCastles});
});

router.get('/:kingdom/castles/:castle', (req, res) => {
  var kingdomName = req.params.kingdom;
  var castleName = req.params.castle;
  const castleInfo = getCastleInfo(kingdomName, castleName);
  res.render('castle/show', {kingdomName, castleInfo});
});

router.get('/:kingdom/castles/:castle/:liege', (req, res) => {
  var kingdomName = req.params.kingdom;
  var castleName = req.params.castle;
  var liegeName = req.params.liege;
  const liegeInfo = getLiegeInfo(kingdomName, castleName, liegeName);
  res.render('liege/show', {liegeInfo});
});



module.exports = router;
