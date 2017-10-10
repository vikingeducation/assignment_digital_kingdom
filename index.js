const express = require("express")
const app = express();
const fs = require('fs');
const kingdoms = require("./routes/kingdoms");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
const expressHandlebars = require("express-handlebars");

const hbs = expressHandlebars.create({
  defaultLayout: "main"
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use('/kingdoms', kingdoms);

app.get('/', (req, res) => {
  res.redirect("/kingdoms");
})

app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
  console.log("localhost:3000")
})
