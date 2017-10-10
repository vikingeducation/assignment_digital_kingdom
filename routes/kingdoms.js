const express = require("express");
const {
  getKingdoms,
  addKingdom,
  removeKingdom
} = require("../services/kingdom-store");

const router = express.Router();

// get kingdoms
router.get("/", (req, res) => {
  const kingdoms = getKingdoms();
  res.render("kingdoms", { kingdoms });
});

// add kingdom
router.post("/", (req, res) => {
  const name = req.body.name;
  const king = req.body.king;
  const queen = req.body.queen;

  addKingdom(name, king, queen);
  res.redirect("back");
});

// remove kingdom 
router.post("/:kingdom/remove", (req, res) => {
  const kingdom = req.params.kingdom;
  removeKingdom(kingdom);

  res.redirect("back"); // not rendering correctly
});

module.exports = router;
