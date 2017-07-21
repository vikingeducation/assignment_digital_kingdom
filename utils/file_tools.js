const fs = require("fs");

// read data
const readJson = () => {
	let json = fs.readFileSync("./data/kingdoms.json");
	json = JSON.parse(json);

	return json;
}

module.exports = {
	readJson
}