const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const { getResources, getKingdoms } = require("./services/kingdom-store");
const bodyParser = require("body-parser");

const port = 3000;
const host = "localhost";

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(`${__dirname}/public`));
app.all("*", bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("kingdoms", { kingdoms: getKingdoms() });
});

app.get("/:kingdom", (req, res) => {
  res.render("kingdom", getResources(req));
});

app.get("/:kingdom/castles", (req, res) => {
  res.render("castles", getResources(req));
});

app.get("/:kingdom/castles/:castle", (req, res) => {
  res.render("castle", getResources(req));
});

app.get("/:kingdom/castles/:castle/lieges", (req, res) => {
  res.render("lieges", getResources(req));
});

app.get("/:kingdom/castles/:castle/lieges/:liege", (req, res) => {
  res.render("liege", getResources(req));
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
