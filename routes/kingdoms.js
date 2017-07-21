const express = require("express");
const router = express.Router();
const { kingdomsJson, diveJson } = require("../utils/file_tools");
const castles = require("./castles");

router.get("/", (req, res) => {
	let data = kingdomsJson();
	res.send(data);
});

router.get("/:kingdomName", (req, res) => {
	let passArray = [];
	if (req.diveArray) {
		passArray = req.diveArray;
	}

	passArray.push("kingdom");
	passArray.push(req.params.kingdomName);

	let data = diveJson(passArray);
	res.send(data[0] + "<br><pre>" + data[1] + "</pre>");
});

router.use("/:kingdomName/castles", function(req, res, next) {
	if (!req.diveArray) {
		req.diveArray = [];
	}

	req.diveArray.push("kingdoms");
	req.diveArray.push(req.params.kingdomName);

	next();
}, castles);

module.exports = router;