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
const lieges = require("./routers/lieges");
const kingdoms = require("./routers/kingdoms");
//app.use("/castles", castles);
//app.use("/lieges", lieges);
//app.use("/kingdoms", kingdoms);


const router = require("./router");
app.use("/", router);


//Get methods
app.get("/", (req, res) => {
  res.end("hello world");
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


app.post("/:resource", (req, res) => {
  let resource = req.params.resource;
  let ownerId = req.body.ownerId;
  let ownerType = req.body.ownerType;
  let name = req.body.name;
  world.addResource(name, resource, ownerId, ownerType);
  res.redirect("back");
});

app.listen(3000, "localhost", () => {
  console.log("app is listening");
});
