const Express = require("express");
const router = Express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");

router.get("/:name", (req, res) => {
  let kingdomName = req.params.name;
  let kingdom = kingdomParser.getKingdom(kingdomName);
  let castle_keys = Object.keys(kingdom.castles);

  res.render("kingdom/show", {
    kingdom: kingdom,
    name: kingdomName,
    castles: castle_keys
  });
});

module.exports = router;
