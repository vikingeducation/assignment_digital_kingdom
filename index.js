const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const app = express();

app.get('/', (req, res) => {
  res.send("Kingdoms");
})

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
