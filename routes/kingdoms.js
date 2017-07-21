const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Yay this works!");
});

module.exports = router;