//var data = require('./data');
var fs = require("fs");
var http = require("http");
var express = require("express");
var router = require("./router.js");
const app = express();
const exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/kingdoms", (req, res) => {
  var kingdoms = router.getKingdoms();
  let keys = Object.keys(kingdoms);
  let kingdomArray = [];
  keys.forEach(key => {
    kingdomArray.push(kingdoms[key]);
  });
  res.render("kingdoms", { kingdoms: kingdomArray });
});

app.get("/kingdoms/:id", (req, res) => {
  var kingdom = router.getKingdom(req.params.id);
  var castleIds = kingdom.castleIds;
  var castles = router.getCastles();
  let castleArray = [];
  castleIds.forEach(id => {
    castleArray.push(castles[id]);
  });

  res.render("kingdom", { kingdom: kingdom, castles: castleArray });
});

app.get("/castles/:id", (req, res) => {
  var castles = router.getCastles(req.params.id);
  var castle = castles[req.params.id];
  let liegeArray = [];
  castle["liegeIds"].forEach(liegeId => {
    liegeArray.push(router.getLiege(liegeId));
  });
  res.render("castle", { castle: castle, lieges: liegeArray });
});

app.get("/lieges/:id", (req, res) => {
  var liege = router.getLiege(req.params.id);
  var vassalArray = [];
  liege["vassalIds"].forEach(vassalId => {
    vassalArray.push(router.getVassal(vassalId));
  });
  res.render("liege", { liege: liege, vassals: vassalArray });
});

app.post("/:resource", (req, res)=>{
  let resource = req.params.resource;
  let name = req.body.name;
  router.addResource(name, resource);
});

app.listen(3000, "localhost", () => {
  console.log("app is listening");
});
