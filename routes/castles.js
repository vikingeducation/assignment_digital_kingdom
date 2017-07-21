const express = require("express");
const router = express.Router();
const { castleJson } = require("../utils/file_tools");

router.get("/:castle", (req, res) => {
	let castleName = req.params.castle;
	let kingdomName = req.kingdomName;
	
	let obj = {
		kingdom: kingdomName,
		castle: castleName
	}

	let data = castleJson(obj);
	// res.send("<pre>" + data + "</pre>")
	res.send("reached here")
});

module.exports = router;