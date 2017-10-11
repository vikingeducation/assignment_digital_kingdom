const express = require("express");

const router = express.Router();

const {
  getKingdoms,
  addKingdom,
  getCastles,
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
  const kingdom = getCastles(req.params.kingdom)
  console.log("kingdom", kingdom)
  res.render('kingdom', kingdom)

})

router.get("/:kingdom/:castles", (req, res) =>{
})

router.get("/:kingdom/:castles/:lieges", (req, res) => {
})

router.get("/:kingdom/:castles/:lieges/:vassals", (req, res) => {
})
module.exports = router
