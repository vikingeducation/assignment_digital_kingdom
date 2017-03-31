const fs = require('fs');
const express = require("express");
const kingdoms = require("./routes/kingdoms_router");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

//app.use('/', kingdoms);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/kingdoms', kingdoms);

const hbs = expressHandlebars.create({
  defaultLayout: "main",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//app.use("/kingdoms", castles);

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Hey.");
});
