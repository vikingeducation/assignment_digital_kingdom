const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const vassals = require("./vassals");

router.get("/:liege", (req, res) => {
	let passArray = req.diveArray;

	passArray.push("lieges");
	passArray.push(req.params.liege);

	let data = diveJson(passArray);

	console.log(data[1], 'what is this')

	let o = data[1];
	let vassal = o.vassals;

	console.log(vassal)

	let obj = {
		title: data[0],
		data: Object.keys(data[1])
	}



	res.render('lieges', obj);

	// res.render(`${data[0]}<br><pre>${data[1]}</pre>`);
});

router.use("/:liege/vassals", (req, res, next) => {
	req.diveArray.push('lieges');
	req.diveArray.push(req.params.liege);

	next();
}, vassals);

module.exports = router;