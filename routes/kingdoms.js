const Express = require("express");
const router = Express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");
// const castle = require("./castles.js");

router.get("/:name", (req, res) => {
  let castleName = req.params.name;
  let kingdomName = kingdomParser.getKingdom(name);
  getLieges(castleName, kingdomName);
  let castle_keys = Object.keys(kingdom.castles);
  res.render("kingdom/show", {
    kingdom: kingdom,
    name: name,
    castles: castle_keys
  });
});

module.exports = router;
