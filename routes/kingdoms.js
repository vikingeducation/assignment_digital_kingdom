const Express = require("express");
const router = Express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");

router.get("/:name", (req, res) => {
  let name = req.params.name;
  let kingdom = kingdomParser.getKingdom(name);
  //res.send(kingdom);
  let castle_keys = Object.keys(kingdom.castles);
  res.render("kingdom/show", {
    kingdom: kingdom,
    name: name,
    castles: castle_keys
  });
});

module.exports = router;
