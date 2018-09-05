const express = require('express');
const {
  getKingdom,
  addKingdoms,
  getRoyals,
  addRoyals,
  getCastle,
  addCastle,
  getLieges,
  addLiege,
  getVassals,
  addVassals
} = require('../services/kingdoms2')

const router = express.Router();


//main kingdoms page
router.get('/', (req, res) => {
  const allKingdoms = getKingdom();
  var title = "magic fun time"
  res.render('kingdoms', {
     allKingdoms , title
  });
})

router.post('/', (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;
  addKingdoms(name)
  addRoyals(king, kings);
  addRoyals(queen, queens)
  res.redirect('back')
})


//castles page
router.get("/:kingdomId", (req, res) => {
  const kingdomId = req.params.kingdomId;
  //  console.log(kingdomId)
  const castles = getCastle(kingdomId);
  const kingdomName = castles[0].kingdomName
  const kingdomIdKey = castles[0].Id
  console.log(castles)
  res.render("kingdom", { castles, kingdomName, kingdomIdKey, kingdomId });
})


router.post("/:kingdomId", (req, res) => {
  //const kingdomId = req.params.kingdomId;
  //console.log(kingdomId)
  const kingdomId = req.body.kingdomId;
  const castleName = req.body.castleName;
  addCastle(castleName,kingdomId);
  res.redirect("back");
});


//lieges pages
router.get("/:kingdomId/:castleId", (req, res) => {

  const kingdomId = req.params.kingdomId;
  //  console.log(kingdomId)
  const castleId = req.params.castleId;
  //console.log(lieges)
  console.log(kingdomId)
  const allLieges = getLieges(castleId);
  //const kingdomName = castles[0].kingdomName
  //const kingdomId = castles[0].kingdomId
  console.log(allLieges)
  res.render("lieges", { allLieges})//, kingdomName, kingdomId });
})


router.post("/:kingdomId/:castleId", (req, res) => {
  //const kingdomId = req.params.kingdomId;
  //console.log(kingdomId)
  //const kingdomId = req.body.kingdomId;
  const castleId = req.body.castleId;
  const liege = req.body.liege;
  addLiege(castleName, liege);
  res.redirect("back");
});

//views for vassales

router.get("/:kingdomId/:castleId/:liegeId", (req, res) => {

  const kingdomId = req.params.kingdomId;
  //  console.log(kingdomId)
  const castleId = req.params.castleId;
  //console.log(lieges)
  const liegeId = req.params.liegeId;
  console.log(liegeId)
  console.log('im in vassal router')
  const allVassals = getVassals(liegeId);
  //console.log(allVassals)
  //const kingdomName = castles[0].kingdomName
  //const kingdomId = castles[0].kingdomId
  //console.log(allLieges)
  res.render("vassals", { allVassals})//, kingdomName, kingdomId });
})


router.post("/:kingdomId/:castleId/:liegeId", (req, res) => {
  //const kingdomId = req.params.kingdomId;
  //console.log(kingdomId)
  //const kingdomId = req.body.kingdomId;
  const liegeId = req.body.liegeId;
  const vassal = req.body.vassal;
  addLiege(liegeName, vassal);
  res.redirect("back");
});


module.exports = router
