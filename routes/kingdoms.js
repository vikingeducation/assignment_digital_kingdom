const Express = require("express");
const router = Express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");
const castle = require("./castles.js");

router.use("/:kingdom_name/castle", castle);

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
