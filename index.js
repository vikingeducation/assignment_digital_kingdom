const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");
const displayKingdomsObj = require("./displayKingdoms.js");
const fs = require("fs");

app.set("view engine", "hbs");
const port = process.env.PORT || "3000";

var urlArray = [];

var htmlData = fs.readFileSync("./index.html", "UTF-8");

app.use((req, res, next) => {
  //check kingdom function

  urlArray = req.url.split("/");
  console.log(urlArray + "url array");
  if (urlArray[1] === "kingdom" && urlArray[2] !== undefined) {
    req.requestedkingdom = urlArray[2].toLowerCase();
  }
  next();
});

app.use((req, res, next) => {
  // now check castle
  console.log(urlArray + "url array");
  if (urlArray[3] == "castle" && urlArray[4] !== undefined) {
    req.requestedCastle = urlArray[4].toLowerCase();
  }
  next();
});

app.get("/", (req, res) => {
  console.log("just a normal get");

  //for each kingdom
  let kingdomsArray = displayKingdomsObj.returnKingdoms();

  res.render("clickableTemplate", { name: kingdomsArray });
});

app.get("/kingdom/:kingdom/", (req, res) => {
  console.log(req.url);

  res.render("DisplayKingdomTemplate", {
    kingdomName: req.params.kingdom.toLowerCase(),
    kingName: kingdomObject[req.requestedkingdom]["king"],
    queenName: kingdomObject[req.requestedkingdom]["queen"],
    castles: kingdomObject[req.requestedkingdom]["castles"]
  });
});
app.get("/kingdom/:kingdom/castle/:castles/", (req, res) => {
  console.log(JSON.stringify(req.params, null, 2));
  console.log(req.requestedkingdom + "req king");
  res.render("DisplayCastleTemplate", {
    name: req.params.kingdom
    //liegeName: kingdomObject[req.requestedCastle]["liege"]
  });
});
app.listen(port);
