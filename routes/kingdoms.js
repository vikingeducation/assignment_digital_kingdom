const express = require("express");
const router = express.Router();
const { kingdomsJson, kingdomJson } = require("../utils/file_tools");
const castles = require("./castles");

router.get("/", (req, res) => {
	let data = kingdomsJson();
	res.send(data);
});

router.get("/:kingdomName", (req, res) => {
	let data = kingdomJson(req.params.kingdomName);
	res.send("<pre>" + data + "</pre>");
});

router.use("/:kingdomName/castles", function(req, res) {
	console.log(req.params);
	castles;
});

module.exports = router;