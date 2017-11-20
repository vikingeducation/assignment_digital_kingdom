const express = require("express");
const router = express.Router();
const world = require("../world");

router.get("/", (req, res) => {
  var kingdoms = world.getKingdoms();
  let keys = Object.keys(kingdoms);
  let kingdomArray = [];
  keys.forEach(key => {
    kingdomArray.push(kingdoms[key]);
  });
  res.render("kingdoms", { kingdoms: kingdomArray });
});

router.get("/:id", (req, res) => {
  var kingdom = world.getKingdom(req.params.id);
  var castleIds = kingdom.castleIds;
  var castles = world.getCastles();
  let castleArray = [];
  castleIds.forEach(id => {
    castleArray.push(castles[id]);
  });

  res.render("kingdom", { kingdom: kingdom, castles: castleArray });
});

module.exports= router;