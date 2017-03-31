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
  makeKingdom,
  deleteKingdom
} = require("../services/kingdomSetters");

const { getKeys } = require("../services/kingdomStruct");

router.get("/", (req, res) => {
  const objects = getKingdoms();
  const keys = getKeys("kingdoms");
  console.log(keys);
  let path = "/kingdoms";
  res.render("kingdoms", { objects, path, keys });
});

router.get("/:kingdomName", (req, res) => {
  const kingdom = getKingdom(req.params.kingdomName);
  const castles = getCastles(req.params.kingdomName);
  let path = `/kingdom/${req.params.kingdomName}`;
  res.render("kingdoms/show", { kingdom, castles, path });
});

router.get("/:kingdomName/castles", (req, res) => {
  const castles = getCastles(req.params.kingdomName);
  res.render("kingdoms/castles/", { castles });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;
  if (makeKingdom(name, king, queen)) {
    res.redirect(`/kingdoms/${name}`);
  } else {
    res.redirect(`/kingdoms`);
  }
});

router.post("/:kingdomName", (req, res) => {
  deleteKingdom(req.params.kingdomName);
  res.redirect("/kingdoms");
});

module.exports = router;

//routes
//kingdoms.js
//      castles.js
//              lieges.js
//                    vassals.js
