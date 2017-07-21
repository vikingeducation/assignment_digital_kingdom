const express = require("express");
const router = express.Router();
const { kingdomsJson, diveJson } = require("../utils/file_tools");
const castles = require("./castles");

router.get("/", (req, res) => {
	let data = kingdomsJson();
	res.send(data);
});

router.get("/:kingdomName", (req, res) => {
	let data = diveJson({kingdom: req.params.kingdomName});
	res.send(data[0] + "<br><pre>" + data[1] + "</pre>");
});

router.use("/:kingdomName/castles", function(req, res, next) {
	req.diveObj = {
		kingdom: req.params.kingdomName
	}
	next();
}, castles);





module.exports = router;