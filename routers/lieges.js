const express = require("express");
const router = express.Router();
const world = require("../world");

router.get("/:id", (req, res) => {
  var liege = world.getLiege(req.params.id);
  var vassalArray = [];
  liege["vassalIds"].forEach(vassalId => {
    vassalArray.push(world.getVassal(vassalId));
  });
  res.render("liege", { liege: liege, vassals: vassalArray });
});

module.exports = router;