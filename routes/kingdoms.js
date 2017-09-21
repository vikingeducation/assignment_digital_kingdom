const express = require("express");
const jsonModule = require("../services/kingdom-store");

const router = express.Router();

router.get("/", (req, res) => {
	var obj = jsonModule.getKingdoms();
	res.render("kingdoms", { obj });
});

router.get("/kingdoms/:kingdom", (req, res) => {
	var kingdom = req.params.kingdom;
	console.log("kingdom", kingdom);
	var obj = jsonModule.getCastle(kingdom);
	res.render("kingdoms/showkingdom", { kingdom, obj });
});

module.exports = router;
