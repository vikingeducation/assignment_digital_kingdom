const express = require('express');
const kingdomRouter = require('./routes/kingdoms');
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
  defaultLayout: "main",
});

app.engine("handlebars" , hbs.engine);
app.set("view engine" , "handlebars")

//main path displaying all kingdoms
app.use('/kingdoms', kingdomRouter);

app.listen(3000, "localhost", () => {
    console.log(`Listening to port 3000`);
})