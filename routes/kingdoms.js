const express = require("express");
const router = express.Router();

const {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals
} = require("../services/kingdom-store");

router.get("/", (req, res) => {
  console.log(getLieges('awesome kingdom', 'Strong Castle'));
  console.log(getVassals('awesome kingdom', 'Strong Castle', 'Mr. Liege'));
  res.render("kingdoms", {});
});

router.get("/:name", (req, res) => {
  res.render("kingdoms/show", {});
});

module.exports = router;
