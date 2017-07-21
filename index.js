const Express = require("express");
const app = Express();
const kingdomParser = require("./helpers/kingdomParser.js");

const expressHandlebars = require("express-handlebars");

//routers
const kingdoms = require("./routes/kingdoms.js");

let host = "0.0.0.0";

//View Engine Code
const hbs = expressHandlebars.create({
  defaultLayout: "main"
  //helpers: helpers.registered
});
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

//Routing Code
app.get("/", function(req, res) {
  let kingdoms = kingdomParser.getKingdoms();
  //render
  res.render("kingdoms/show", { kingdoms });
});

app.use("/kingdoms", kingdoms);

app.listen(3000, host, function() {
  console.log("Example app listening on port 3000!");
});

/*
url thoughts
/kingdom
/kingdom/kings
/kingdom/castles
/kingdom/castles/lieges
/kingdom/queens

*/
