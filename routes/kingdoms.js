const express = require("express");

const router = express.Router();

const {
  getKingdoms,
} = require("../services/kingdoms")

router.get("/", (req, res) => {
  const kingdoms = getKingdoms()
  res.render("kingdoms", { kingdoms })
})

router.get("/:kingdom", (req, res) => {
})

router.get("/:kingdom/:castles", (req, res) =>{
})

router.get("/:kingdom/:castles/:lieges", (req, res) => {
})

router.get("/:kingdom/:castles/:lieges/:vassals", (req, res) => {
})
module.exports = router
