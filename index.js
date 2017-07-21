const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");
const DisplayKingdoms = require("./displayKingdoms.js")
app.set("view engine", "hbs");

const port = process.env.PORT || "3000";

// app.use((req, res, next) => {
//   let kingdom = req.params['kingdom'];
//   let castle = req.params['castle'];
//   console.log(kingdom);
//   next();
// });

app.get("/", (req, res) => {
  console.log(displayKingdoms.returnKingdoms);
  res.end(displayKingdoms.returnKingdoms);
});


app.get("/kingdom/:kingdom/", (req, res) => {
  let kingdom = req.params["kingdom"];
//  let castle = req.params[castle];
  console.log(kingdom);
  res.end(kingdom);
});


app.listen(port);
