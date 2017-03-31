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
  let path = "/kingdoms";
  res.render("kingdoms", { objects, path, keys });
});

router.get("/:kingdomName", (req, res) => {
  const object = getKingdom(req.params.kingdomName);
  const childObjects = getCastles(req.params.kingdomName);
  let displayArray = [object.king, object.queen];
  let path = `/kingdom/${req.params.kingdomName}`;
  let keys = getKeys("castles");
  res.render("kingdoms/show", { object, childObjects, displayArray, path, keys });
});

router.get("/:kingdomName/castles", (req, res) => {
  const objects = getCastles(req.params.kingdomName);
  const keys = getKeys("castles");
  const path = `/kingdoms/${req.params.kingdomName}/castles`;
  res.render("kingdoms/castles/", { objects, path, keys });
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

router.post("/:kingdomName/castles", (req, res) => {
  const name = req.body.name;
  if (makeCastle(name)) {
    res.redirect(`/kingdoms/${req.params.kingdomName}/castles/${name}`);
  } else {
    res.redirect('/kingdoms/${req.params.kingdomName}/castles');
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
