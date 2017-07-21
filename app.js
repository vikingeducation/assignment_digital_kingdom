const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

//app.use();

app.get("/", (req, res) => {
  res.end("hey!");
});

app.listen(port, host, () => {
  console.log(`Listening at ${host}${port}`);
});
