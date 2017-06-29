const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const kingdoms = require('./routes/kingdoms.js');

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: "main"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");''
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/kingdoms', kingdoms);

app.use(express.static(__dirname + "/public"));

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
