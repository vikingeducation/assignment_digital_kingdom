const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const kingdomParser = require("./helpers/kingdomParser.js");

const expressHandlebars = require("express-handlebars");

//routers
const kingdoms = require("./routes/kingdoms.js");
const castle = require("./routes/castles.js");

let host = "0.0.0.0";

//View Engine Code
const hbs = expressHandlebars.create({
  defaultLayout: "main"
  //helpers: helpers.registered
});
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/kingdoms/:id/castle", castle);
app.use("/kingdoms", kingdoms);

//Routing Code
app.get("/", function(req, res) {
  let kingdoms = kingdomParser.getKingdoms();
  //render
  res.render("kingdoms/show", { kingdoms });
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  let name = req.body.name;
  // function to add to the json
  kingdomParser.getKingdomInput(name);
  res.redirect("back");
});

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
