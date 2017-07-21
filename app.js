const express = require("express");
const app = express();
const { getKingdoms } = require("./services/kingdom-store");

const port = 3000;
const host = "localhost";

//app.use();
// app.use(("/", (req, res, next) => {
//   getKingdoms();
// })

app.get("/", (req, res) => {
  console.log(getKingdoms());
  // console.log(getKingdoms())
  // console.log(getKingdoms);
  res.end("fjfj");
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
