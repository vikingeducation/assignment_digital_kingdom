//var data = require('./data');
var fs = require("fs");
var http = require("http");
var express = require("express");
var world = require("./world.js");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

//Castle router
const castles = require("./routers/castles");
app.use("/castles", castles);

//Get methods
app.get("/", (req, res) => {
  res.end("hello world");
});

app.get("/kingdoms", (req, res) => {
  var kingdoms = world.getKingdoms();
  let keys = Object.keys(kingdoms);
  let kingdomArray = [];
  keys.forEach(key => {
    kingdomArray.push(kingdoms[key]);
  });
  res.render("kingdoms", { kingdoms: kingdomArray });
});

app.get("/kingdoms/:id", (req, res) => {
  var kingdom = world.getKingdom(req.params.id);
  var castleIds = kingdom.castleIds;
  var castles = world.getCastles();
  let castleArray = [];
  castleIds.forEach(id => {
    castleArray.push(castles[id]);
  });

  res.render("kingdom", { kingdom: kingdom, castles: castleArray });
});

/*
app.get("/castles/:id", (req, res) => {
  var castles = world.getCastles(req.params.id);
  var castle = castles[req.params.id];
  let liegeArray = [];
  castle["liegeIds"].forEach(liegeId => {
    liegeArray.push(world.getLiege(liegeId));
  });
  res.render("castle", { castle: castle, lieges: liegeArray });
});

*/
app.get("/lieges/:id", (req, res) => {
  var liege = world.getLiege(req.params.id);
  var vassalArray = [];
  liege["vassalIds"].forEach(vassalId => {
    vassalArray.push(world.getVassal(vassalId));
  });
  res.render("liege", { liege: liege, vassals: vassalArray });
});

app.post("/:resource", (req, res) => {
  let resource = req.params.resource;
  let ownerId = req.body.ownerId;
  let ownerType = req.body.ownerType;
  let name = req.body.name;
  world.addResource(name, resource, ownerId, ownerType);
  console.log("http://localhost:3000" + "/" + ownerType + "/" + ownerId);
  res.redirect("/" + ownerType + "/" + ownerId);
});

app.listen(3000, "localhost", () => {
  console.log("app is listening");
});
