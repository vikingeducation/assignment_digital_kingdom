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

const kingdomNames = getKingdomNames(getKingdomsObject());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("kingdoms", { kingdomNames: kingdomNames });
});

app.listen(3000, () => {
  console.log("server started");
});
