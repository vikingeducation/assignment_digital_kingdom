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
  let kingdomArray=[];
  keys.forEach(key =>{
    kingdomArray.push(kingdoms[key]);
  })
  res.render("kingdoms", {kingdoms:kingdomArray});
});

app.get("/kingdom/:id", (req, res) => {
  var kingdom = router.getKingdom(req.params.id);
  var castleIds = kingdom.castleIds;
  var castles = router.getCastles();
  let castleArray = [];
  castleIds.forEach(id =>{
    castleArray.push(castles[id]);
  });

  res.render("kingdom", {kingdom:kingdom, castles:castleArray});
});

app.listen(3000, "localhost", () => {
  console.log("app is listening");
});
