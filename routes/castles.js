const express = require("express");
const router = express.Router();
const { castleJson } = require("../utils/file_tools");

router.get("/:castle", (req, res) => {
	console.log(req.params);
	let data = castleJson(req.params);
	res.send("<pre>" + data + "</pre>")
});

module.exports = router;