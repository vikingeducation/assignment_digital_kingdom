const Express = require("express");
const router = Express.Router();
const kingdomParser = require("../helpers/kingdomParser.js");

router.get("/:name", (req, res) => {
  let name = req.params.name;
  let kingdom = kingdomParser.getKingdom(name);
  res.send(kingdom);
});

module.exports = router;
