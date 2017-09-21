const express = require("express");
const jsonModule = require("../services/kingdom-store");

const router = express.Router();

router.get("/", (req, res) => {
	var obj = jsonModule.getKingdoms();
	res.render("kingdoms", { obj });
});

router.get("/:kingdom", (req, res) => {
	var kingdom = req.params.kingdom;
	console.log(kingdom);
	res.end(kingdom);
});

module.exports = router;
