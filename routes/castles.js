const express = require("express");
const router = express.Router();
const { diveJson } = require("../utils/file_tools");

router.get("/:castle", (req, res) => {
	let castleName = req.params.castle;
	let kingdomName = req.kingdomName;
	
	let obj = {
		kingdom: kingdomName,
		castles: "castles",
		castle: castleName
	}

	let data = diveJson(obj);
	res.send(`${data[0]}<br><pre>${data[1]}</pre>`)
});

module.exports = router;