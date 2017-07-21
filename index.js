const Express = require("express");
const app = Express();
const getKingdoms = require("./helpers/getKingdoms.js");

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
  let kingdoms = getKingdoms();
  //render
  res.render("kingdoms/show", { kingdoms });
});

app.use("/kingdoms");

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
