const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const {
  getKingdoms,
  getKingdom,
  getCastles
} = require("./services/kingdom-store");
const bodyParser = require("body-parser");

const port = 3000;
const host = "localhost";

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(`${__dirname}/public`));
//app.use();

app.get("/", (req, res) => {
  console.log(getKingdoms());
  res.render("kingdoms", { kingdoms: getKingdoms() });
});

app.get("/:kingdom", (req, res) => {
  res.render("kingdom", { kingdom: getKingdom(req.params.kingdom) });
  console.log(req.params.kingdom);
  console.log(getKingdom(req.params.kingdom));
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
