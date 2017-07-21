const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");
const lieges = require("./lieges");

router.get("/:castle", (req, res) => {
	let obj = req.diveObj;

	obj.castles = "castles";
	obj.castle = req.params.castle;

	let data = diveJson(obj);
	res.send(`${data[0]}<br><pre>${data[1]}</pre>`);
});

router.use("/:castle/lieges", (req, res, next) => {
	req.diveObj.castles = 'castles';
	req.diveObj.castle = req.params.castle;

	next();

}, lieges);

module.exports = router;