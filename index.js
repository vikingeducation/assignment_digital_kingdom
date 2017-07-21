const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");
const displayKingdomsObj = require("./displayKingdoms.js");
const fs = require('fs');
app.set("view engine", "hbs");

const port = process.env.PORT || "3000";

// app.use((req, res, next) => {
//   let kingdom = req.params['kingdom'];
//   let castle = req.params['castle'];
//   console.log(kingdom);
//   next();
// });

app.get("/", (req, res) => {
  var htmlData = fs.readFileSync("./index.html", "UTF-8");
  htmlData = htmlData.replace(
  "{{ displayHere }}",
  displayKingdomsObj.returnKingdoms().join());
  res.end(htmlData);
  }
);


app.get("/kingdom/:kingdom/", (req, res) => {
  let kingdom = req.params["kingdom"];
  //  let castle = req.params[castle];
  console.log(kingdom);
  res.end(kingdom);
});

app.listen(port);
