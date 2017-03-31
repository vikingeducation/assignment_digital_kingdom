const express = require("express");
const router = express.Router();

const {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  getKingdom
} = require("../services/kingdom-store");

router.get("/", (req, res) => {
  const kingdoms = getKingdoms();
  res.render("kingdoms", { kingdoms });
});

router.get("/:kingdomName/castles", (req, res) => {
  const kingdoms = getCastles(req.params.kingdomName);
  res.render("/kingdoms/castles", { kingdoms });
});

router.get("/:kingdomName", (req, res) => {
  const kingdom = getKingdom(req.params.kingdomName);
  res.render("kingdoms/show", { kingdom });
});

module.exports = router;

//routes
//kingdoms.js
//      castles.js
//              lieges.js
//                    vassals.js
