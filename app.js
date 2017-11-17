// APP
const fs = require("fs");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const _ = require("lodash");
const kingdoms = require("./models/kingdoms.js");
const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: "main"
  // helpers: helpers.registered
});

let Kingdoms = new kingdoms.Kingdoms();

// const kingdomsObject = Kingdoms.getKingdomsObject();
const kingdomNames = Kingdoms.getKingdomNames();
const kingNames = Kingdoms.getKingNames();
const queenNames = Kingdoms.getQueenNames();
const castleNumber = Kingdoms.getCastleNumber();

/*
const getKingName = (kingdomNames, KingdomsObject) => {
  KingdomsObject[KingdomID]
}

const kingName;
*/

const test = [
  {
    kingdoms: "Viking",
    king: "Arthurs"
  },
  {
    kingdoms: "Digital",
    king: "Elon"
  }
];

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const kingdomCount = _.range(kingdomNames.length);

app.get("/", (req, res) => {
  res.render("kingdoms", {
    kingdomCount: kingdomCount,
    kingdomNames: kingdomNames,
    kingNames: kingNames,
    queenNames: queenNames,
    castleNumber: castleNumber,
    test: test
  });
});

app.listen(3000, () => {
  console.log("server started");
});
