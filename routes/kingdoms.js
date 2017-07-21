const express = require("express");
const router = express.Router();
const { kingdomsJson } = require("../utils/file_tools");

router.get("/", (req, res) => {
	let data = kingdomsJson();
	res.send(data);
});

router.get("/:kingdomName", (req, res) => {
	res.send(`it's working ${req.params.kingdomName}`);
});

module.exports = router;