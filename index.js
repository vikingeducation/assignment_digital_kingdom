const fs = require('fs');
const express = require("express");
//const kingdoms = require("./routes/kingdoms");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const getKingdoms = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  const kingdomsArr = json.kingdoms.map((element) => {
    return element.name;
  });
  console.log(kingdomsArr);
  //return data;
};

app.get('/kingdoms', (req, res) => {
  getKingdoms();
  res.send('Kingdoms!!');

});

app.use(bodyParser.urlencoded({ extended: true }));

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
