const express = require("express");
const router = express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");

router.get("/:castle_name", (req, res) => {
  let kingdom = kingdomParser.getKingdom(req.originalUrl.split("/")[2]);
  let castle_name = req.params.castle_name;
  let lieges = Object.keys(kingdom.castles[castle_name]);

  res.send(`${lieges}`);
});

module.exports = router;
