const express = require('express')
const router = express.Router()
const exphbs = require("express-handlebars");


const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

router.use(morganToolkit());

router.post("/:resource", (req, res) => {
  let resource = req.params.resource;
  let ownerId = req.body.ownerId;
  let ownerType = req.body.ownerType;
  let name = req.body.name;
  world.addResource(name, resource, ownerId, ownerType);
  console.log("http://localhost:3000" + "/" + ownerType + "/" + ownerId);
  res.redirect('/');
});

router.get("/castles/:id", (req, res) => {
  var castles = world.getCastles(req.params.id);
  var castle = castles[req.params.id];
  let liegeArray = [];
  castle["liegeIds"].forEach(liegeId => {
    liegeArray.push(world.getLiege(liegeId));
  });
  res.render("castle", { castle: castle, lieges: liegeArray });
});


module.exports = router;