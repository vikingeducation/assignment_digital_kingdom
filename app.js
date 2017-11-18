// APP
const fs = require("fs");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const _ = require("lodash");
const kingdoms = require("./models/kingdoms.js");
const app = express();
const King = require("./models/kings.js");
const Queen = require("./models/queen.js");

const hbs = expressHandlebars.create({
  defaultLayout: "main"
  // helpers: helpers.registered
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// const kingdomCount = _.range(kingdomNames.length);

app.get("/", (req, res) => {
  let Kingdoms = new kingdoms.Kingdoms();

  // const kingdomsObject = Kingdoms.getKingdomsObject();
  const kingdomNames = Kingdoms.getKingdomNames();
  const kingNames = Kingdoms.getKingNames();
  const queenNames = Kingdoms.getQueenNames();
  const castleNumber = Kingdoms.getCastleNumber();

  const test = [];

  let keys = Object.keys(Kingdoms.returnKingdomObject());
  let num = keys.length;
  let i = 0;

  while (i < num) {
    test.push({
      kingdoms: Kingdoms.getKingdomNames()[i],
      king: Kingdoms.getKingNames()[i],
      queen: Kingdoms.getQueenNames()[i],
      numberOfCastle: Kingdoms.getCastleNumber()[i]
    });
    i++;
  }
  res.render("kingdoms", {
    test: test
  });
});

let updateKing = (name, id) => {
  const data = fs.readFileSync("./data/kings.json");
  const json = JSON.parse(data);
  json[id] = new King(name, parseInt(id));
  fs.writeFileSync("./data/kings.json", JSON.stringify(json, null, 4));
};

let updateQueen = (name, id) => {
  const data = fs.readFileSync("./data/queens.json");
  const json = JSON.parse(data);
  json[id] = new Queen(name, parseInt(id));
  fs.writeFileSync("./data/queens.json", JSON.stringify(json, null, 4));
};

app.post("/kingdoms/new", (req, res) => {
  const data = fs.readFileSync("./data/kingdoms.json");
  const json = JSON.parse(data);
  let newID = `${Object.keys(json).length + 1}`;
  json[newID] = {
    id: parseInt(newID),
    name: req.body.name,
    kingId: parseInt(newID),
    queenId: parseInt(newID),
    castleIds: []
  };
  updateKing("", newID);
  updateQueen("", newID);

  fs.writeFileSync("./data/kingdoms.json", JSON.stringify(json, null, 4));

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server started");
});
