//var data = require('./data');
var fs = require("fs");
var http = require("http");
var express = require("express");
var router = require("./router.js");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/kingdoms", (req, res) => {
  var kingdoms = router.getKingdoms();
  let kingdoms = {
    keys: Object.keys(kingdoms),
    kingdoms: kingdoms
  };
  console.log(localObj.kingdoms);
  res.render("kingdoms", localObj);
});

app.listen(3000, "localhost", () => {
  console.log("app is listening");
});
