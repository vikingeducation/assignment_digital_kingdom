const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const hbs = expressHandlebars.create({
  defaultLayout: "main"
});

app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
