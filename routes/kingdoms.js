const express = require("express");
const {
  getKingdoms,
  addKingdom
} = require("../services/kingdom-store");

const router = express.Router();

router.get("/", (req, res) => {
  const kingdoms = getKingdoms();
  res.render("kingdoms", { kingdoms });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;

  addKingdom(name, king, queen);
  res.redirect("back");
});

module.exports = router;
