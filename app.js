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
  /*
  {
    kingdoms: "Viking",
    king: "Arthurs"
  },
  {
    kingdoms: "Digital",
    king: "Elon"
  }
  */
];

let keys = Object.keys(Kingdoms.returnKingdomObject())
let num = keys.length
let i = 0

while (i < num){
  test.push(
    {
      kingdoms: Kingdoms.getKingdomNames()[i],
      king: Kingdoms.getKingNames()[i],
      queen: Kingdoms.getQueenNames()[i],
      numberOfCastle: Kingdoms.getCastleNumber()[i]
    }
  )
  i++
}

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// const kingdomCount = _.range(kingdomNames.length);

app.get("/", (req, res) => {
  res.render("kingdoms", {
    test: test
  });
});

app.post("/kingdoms/new", (req, res) => {
  const data = fs.readFileSync("./data/kingdoms.json");
  const json = JSON.parse(data);
  json["3"] = {
    "id": 3,
    "name": "Viking",
    "kingId": 2,
    "queenId": 2,
    "castleIds": [
      3,
      4
    ]
  }
  fs.writeFileSync("./data/kingdoms.json", JSON.stringify(json, null, 4))
})

app.listen(3000, () => {
  console.log("server started");
});
