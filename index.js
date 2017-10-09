const express = require("express")
const app = express();
const fs = require('fs');
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
const expressHandlebars = require("express-handlebars");

const hbs = expressHandlebars.create({
  defaultLayout: "main"
})

app.engine("handlebards", hbs.engine);
app.set("view engine", "handlebards");

app.get('/animals', (req, res) => {
  res.send('animals')
})

app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
  console.log("localhost:3000")
})
