const express = require("express");
const jsonModule = require("../services/kingdom-store");

const router = express.Router();

router.get("/", (req, res) => {
	var allKingdoms = jsonModule.getKingdoms();
	res.render("kingdoms", { allKingdoms });
});

module.exports = router;
