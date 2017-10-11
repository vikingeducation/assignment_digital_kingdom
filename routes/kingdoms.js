const express = require("express");

const router = express.Router();

const {
  getKingdoms,
  addKingdom,
  getCastles,
  addCastle,
  getLieges,
  addLiege,
  getVassals,
  addVassal
} = require("../services/kingdoms")

router.get("/", (req, res) => {
  const kingdoms = getKingdoms()
  res.render("kingdoms", { kingdoms })
})

router.post("/", (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;
  addKingdom(name, king, queen);
  res.redirect("back");
});

router.get("/:kingdom", (req, res) => {
  const kingdom = req.params.kingdom
  const castles = getCastles(req.params.kingdom)
  console.log("kingdom", kingdom)
  res.render('castle', {kingdom, castles})

})

router.post("/:kingdom", (req, res) => {
  const name = req.body.name
  const kingdom = req.params.kingdom
  addCastle(name, kingdom)
  res.redirect("back")

})

router.get("/:kingdom/:castle", (req, res) =>{
  const kingdomname = req.params.kingdom
  const castlename = req.params.castle
  const castleInfo = getLieges(kingdomname, castlename)
  console.log("castleInfo", castleInfo)
  res.render('lieges', {kingdomname, castlename, castleInfo})
})

// adding Liege
router.post("/:kingdom/:castle", (req, res) =>{
  const kingdomname = req.params.kingdom
  const castlename = req.params.castle
  const liegename = req.body.name
  addLiege(kingdomname, castlename, liegename)
  res.redirect("back")
})
//getting vassals
router.get("/:kingdom/:castles/:lieges", (req, res) => {
  const kingdomname = req.params.kingdom
  const castlename = req.params.castles
  const liegename = req.params.lieges
  const liegeInfo = getVassals(kingdomname,castlename,liegename)
  console.log("liegeinfo", liegeInfo)
  res.render("vassals", {liegeInfo, kingdomname, castlename, liegename})
})
//adding vassal
router.post("/:kingdom/:castles/:lieges/", (req, res) => {
  const kingdomname = req.params.kingdom
  const castlename = req.params.castles
  const liegename = req.params.lieges
  const vassalname = req.body.name
  addVassal(kingdomname, castlename, liegename, vassalname)
  res.redirect("back")
})
module.exports = router
