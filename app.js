// APP
const fs = require("fs");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: "main"
  // helpers: helpers.registered
});

const getKingdomsObject = () => {
  const data = fs.readFileSync("./data/kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const getKingdomNames = kingdomsObject => {
  let names = [];
  for (kingdom in kingdomsObject) {
    names.push(kingdomsObject[kingdom]["name"]);
  }
  return names;
};

const getKingNames = (kingdomsObject) => {
  let kingIds = []
  for (kingdom in kingdomsObject) {
    kingIds.push(kingdomsObject[kingdom]["kingId"]);
  }
  const data = fs.readFileSync("./data/kings.json");
  const json = JSON.parse(data);
  return kingIds.map(id => json[id]["name"] )
}

const getQueenNames = (kingdomsObject) => {
  let queenIds = []
  for (kingdom in kingdomsObject) {
    queenIds.push(kingdomsObject[kingdom]["queenId"]);
  }
  const data = fs.readFileSync("./data/queens.json");
  const json = JSON.parse(data);
  return queenIds.map(id => json[id]["name"] )
}

const getCastleNumber = (kingdomsObject) => {
  let castleNumber = []
  for (kingdom in kingdomsObject) {
    castleNumber.push(kingdomsObject[kingdom]["castleIds"].length);
  }
  return castleNumber
}

const kingdomsObject = getKingdomsObject()
const kingdomNames = getKingdomNames(kingdomsObject);
const kingNames = getKingNames(kingdomsObject)
const queenNames = getQueenNames(kingdomsObject)
const castleNumber = getCastleNumber(kingdomsObject)

console.log(castleNumber);
/*
const getKingName = (kingdomNames, KingdomsObject) => {
  KingdomsObject[KingdomID]
}

const kingName;
*/

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("kingdoms", { kingdomNames: kingdomNames });
});

app.listen(3000, () => {
  console.log("server started");
});
