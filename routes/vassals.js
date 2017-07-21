const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const kingdoms = require("./kingdoms");

router.get("/:vassal", (req, res) => {
	let passArray = req.diveArray;

	passArray.push("vassals");
	passArray.push(req.params.vassal);

	let data = diveJson(passArray);
	console.log(kingdoms);
	res.send(`${data[0]}<br><pre>${data[1]}</pre>`);
});

router.use("/:vassal/kingdoms", (req, res, next) => {
	req.diveArray.push('vassals');
	req.diveArray.push(req.params.vassal);

	next();
});

module.exports = router;