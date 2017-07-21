const express = require("express");
const app = express();
var kingdomObject = require("./kingdom.json");
const displayKingdomsObj = require("./displayKingdoms.js");
const fs = require("fs");




app.set("view engine", "hbs");





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
  console.log(urlArray)
  if (urlArray[1] == "kingdom" && urlArray[2] !== undefined) {
    req.requestedkingdom = urlArray[2].toLowerCase();
    next();
  } else {
    // res.end(fs.readFileSync("./index.html", "UTF-8"));
    next();
  }
});

app.get("/", (req, res) => {
  htmlData = htmlData.replace(
    "{{ displayHere }}",
    displayKingdomsObj.returnKingdoms().join());
  res.end(htmlData);
});


app.get("/kingdom/:kingdom/", (req, res) => {
 htmlData = fs.readFileSync("./index.html", "UTF-8");
  htmlData = htmlData.replace(
    "{{ displayHere }}",
    kingdomObject[req.requestedkingdom]["king"]
  );
  // /let kingdom = req.params["kingdom"];
  //  let castle = req.params[castle];
  console.log(displayKingdomsObj[req.requestedkingdom] + "test here");
  res.end(htmlData);
});

app.listen(port);
