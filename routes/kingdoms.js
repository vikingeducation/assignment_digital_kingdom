const express = require("express");
const router = express.Router();

const {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  getKingdom
} = require("../services/kingdomGetters");

const {
  
} = require("../services/kingdomSetters");

router.get("/", (req, res) => {
  const kingdoms = getKingdoms();
  res.render("kingdoms", { kingdoms });
});

router.get("/:kingdomName", (req, res) => {
  const kingdom = getKingdom(req.params.kingdomName);
  res.render("kingdoms/show", { kingdom });
});

router.get("/:kingdomName/castles", (req, res) => {
  const kingdoms = getCastles(req.params.kingdomName);
  res.render("/kingdoms/castles", { kingdoms });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;
  console.log(name);
  console.log(king);
  console.log(queen);
  res.redirect("/");
});

module.exports = router;

//routes
//kingdoms.js
//      castles.js
//              lieges.js
//                    vassals.js
