const express = require('express');
const kingdomRouter = require('./routes/kingdoms');
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
  defaultLayout: "main",
  helpers: {
    ObjCount: function (obj) {
      if (typeof Object.keys(obj) === "undefined")
        return 0;
      else
        return Object.keys(obj).length
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")


//main path displaying all kingdoms
app.use('/kingdoms', kingdomRouter);
app.use(express.static(__dirname + "/public"));


app.listen(3000, "localhost", () => {
  console.log(`Listening to port 3000`);
})