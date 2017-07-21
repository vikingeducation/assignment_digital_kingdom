const express = require("express");
const app = express();
const { getKingdoms, getCastles } = require("./services/kingdom-store");

const port = 3000;
const host = "localhost";

//app.use();

app.get("/", (req, res) => {
  res.end();
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
