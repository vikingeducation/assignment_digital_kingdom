const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const lieges = require("./lieges");

router.get("/:castle", (req, res) => {
	let passArray = req.diveArray;

	passArray.push("castles");
	passArray.push(req.params.castle);

	let data = diveJson(passArray);

	let obj = {
		title: data[0],
		data: Object.keys(data[1]["lieges"])
	}

	res.render('castles', obj);

	// res.render(`${data[0]}<br><pre>${data[1]}</pre>`);
});

router.use("/:castle/lieges", (req, res, next) => {
	req.diveArray.push('castles');
	req.diveArray.push(req.params.castle);

	next();

}, lieges);

module.exports = router;