const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const vassals = require("./vassals");

router.get("/:liege", (req, res) => {
	let obj = req.diveObj;

	obj.lieges = "lieges";
	obj.liege = req.params.liege;

	let data = diveJson(obj);
	res.send(`${data[0]}<br><pre>${data[1]}</pre>`);
});

router.use("/:liege/vassals", (req, res, next) => {
	req.diveObj.lieges = 'lieges';
	req.diveObj.liege = req.params.liege;

	next();
}, vassals);

module.exports = router;