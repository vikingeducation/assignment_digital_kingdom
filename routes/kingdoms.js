const express = require("express");
const router = express.Router();
const { kingdomsJson, diveJson } = require("../utils/file_tools");
const castles = require("./castles");

router.get("/", (req, res) => {
	let data = kingdomsJson();
	console.log(typeof data, '????');

	let dataStr = JSON.stringify(data);

	res.render('kingdoms', { data: dataStr });
});

router.get("/:kingdomName", (req, res) => {
	let passArray = [];
	if (req.diveArray) {
		passArray = req.diveArray;
	}

	passArray.push("kingdoms");
	passArray.push(req.params.kingdomName);

	let data = diveJson(passArray);

	let obj = {
		title: data[0],
		data: Object.keys(data[1])
	}

	res.render('kingdom', obj);

	// res.render(data[0] + "<br><pre>" + data[1] + "</pre>");
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