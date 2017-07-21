const express = require("express");
const router = express.Router();

router.get("/:castle_name", (req, res) => {
  console.log(`${castle_name}`);
  res.send(`${castle_name}`);
});

module.exports = router;
