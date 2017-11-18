const express = require("express");
const router = express.Router();
const world = require("../world");

router.get("/:id", (req, res) => {
  var castles = world.getCastles(req.params.id);
  var castle = castles[req.params.id];
  let liegeArray = [];
  castle["liegeIds"].forEach(liegeId => {
    liegeArray.push(world.getLiege(liegeId));
  });
  res.render("castle", { castle: castle, lieges: liegeArray });
});

module.exports = router;
