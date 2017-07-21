const express = require("express");
const router = express.Router();
const { readJson } = require("../utils/file_tools");

router.get("/", (req, res) => {
	let data = JSON.stringify(readJson(), null, 2);
	res.send(data);
});

module.exports = router;