const express = require("express");

const router = express.Router();

const {
  getKingdoms,
  addKingdom,
  getCastles,
  addCastle,
  getLieges,
  getVassals
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

router.get("/:kingdom/:castles/:lieges", (req, res) => {
})

router.get("/:kingdom/:castles/:lieges/:vassals", (req, res) => {
})
module.exports = router
