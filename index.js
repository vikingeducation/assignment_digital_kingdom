const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");
const displayKingdomsObj = require("./displayKingdoms.js");
const fs = require("fs");

app.set("view engine", "hbs");
//const hbsTemp = require("./clickableTemplate.hbs");
const port = process.env.PORT || "3000";

// app.use((req, res, next) => {
//   let kingdom = req.params['kingdom'];
//   let castle = req.params['castle'];
//   console.log(kingdom);
//   next();
// });

var htmlData = fs.readFileSync("./index.html", "UTF-8");

app.use((req, res, next) => {
  //check kingdom function
  var urlArray = req.url.split("/");
  // console.log(urlArray);
  // console.log("im the first use");
  console.log(urlArray);
  if (urlArray[1] == "kingdom" && urlArray[2] !== undefined) {
    req.requestedkingdom = urlArray[2].toLowerCase();
    next();
  } else {
    // res.end(fs.readFileSync("./index.html", "UTF-8"));
    next();
  }
});

app.get("/", (req, res) => {
  console.log("just a normal get");
  //for each kingdom
  let kingdomsArray = displayKingdomsObj.returnKingdoms();

  res.render("clickableTemplate", { name: kingdomsArray });

  // htmlData = htmlData.replace(
  //   "{{ displayHere }}",
  //   displayKingdomsObj.returnKingdoms().join()
  // );

  //res.end(htmlData);
});

app.get("/kingdom/:kingdom/", (req, res) => {
  res.render("DisplayKingdomTemplate", {
    name: req.requestedkingdom,
    kingName: kingdomObject[req.requestedkingdom]["king"],
    queenName: kingdomObject[req.requestedkingdom]["queen"],
    castles: kingdomObject[req.requestedkingdom]["castles"]
  });

  //res.end(htmlData);
});
app.get("/castle/:castles/", (req, res) => {
  res.render("DisplayCastleTemplate", {
    name: req.requestedkingdom,
    kingName: kingdomObject[req.requestedkingdom]["king"],
    queenName: kingdomObject[req.requestedkingdom]["queen"],
    castles: kingdomObject[req.requestedkingdom]["castles"]
  });

  //res.end(htmlData);
});
app.listen(port);
