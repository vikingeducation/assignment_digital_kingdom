const express = require("express");
const router = express.Router();
const { getKingdoms } = require("../services/kingdom-store");

router.get("/", (req, res) => {
  console.log(getKingdoms());
  res.render("kingdoms", {});
});

router.get("/:name", (req, res) => {
  res.render("kingdoms/show", {});
});

module.exports = router;
