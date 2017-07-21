const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const { getKingdoms, getCastles } = require("./services/kingdom-store");

const port = 3000;
const host = "localhost";


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(`${__dirname}/public`));
//app.use();

app.get("/", (req, res) => {
  console.log(getKingdoms())
  res.render("kingdoms", { kingdoms: getKingdoms()} );
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
