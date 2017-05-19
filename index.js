const express = require("express");
const kingdoms = require("./routes/kingdoms");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
  defaultLayout: "main",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/kingdoms", kingdoms);

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Currently listening on ${ port }`);
});