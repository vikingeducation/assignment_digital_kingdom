const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");

app.set("view engine", "hbs");

const port = process.env.PORT || "3000";

app.use((req, res, next) => {
  console.log(req.url + " - " + new Date());
  next();
});

app.get("kingdoms/:kingdom/castles/:castle", () => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  console.log(kingdom);
});

app.get("/x/y", (req, res) => {
  // req.params
  res.end("hi");
});

app.listen(port);
