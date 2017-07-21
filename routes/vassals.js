const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const vassals = require("./vassals");

router.get("/:vassal", (req, res) => {
	let obj = req.diveObj;

	obj.vassals = "vassals";
	obj.vassal = req.params.vassal;

	let data = diveJson(obj);
	res.send(`${data[0]}<br><pre>${data[1]}</pre>`);
});

module.exports = router;