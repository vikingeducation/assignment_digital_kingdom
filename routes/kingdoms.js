const express = require('express');
const {
  getKingdom,
  addKingdoms,
  getCastles,
  addKings,
  addQueens,
  addCastles
} = require('../services/kingdoms')
const router = express.Router();

router.get('/', (req, res) => {
  const allKingdoms = getKingdom();
  res.render('kingdoms', {
    allKingdoms: allKingdoms
  });
})

router.post('/', (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;
  addKingdoms(name)
  addKings(king);
  addQueens(queen)
  res.redirect('back')
})

router.get("/:kingdomId", (req, res) => {

  const kingdomId = req.params.kingdomId;
  //  console.log(kingdomId)
  const castles = getCastles(kingdomId);
  const kingdomName = castles[0].kingdomName
  //const kingdomId = castles[0].kingdomId
  res.render("kingdom", { castles, kingdomName, kingdomId });
})


router.post("/:kingdomId", (req, res) => {

  const kingdomId = req.body.kingdomId;
  const castleName = req.body.castleName;
  addCastles(castleName,kingdomId);
  res.redirect("back");
});

module.exports = router
