const fs = require("fs");

// read data
const _readJson = () => {
	let json = fs.readFileSync("./data/kingdoms.json");
	json = JSON.parse(json);
	return json;
}

const kingdomsJson = () => {
	let data = _readJson();
	let kingdoms = Object.keys(data.kingdoms);

	return kingdoms;
}

const kingdomJson = (kingdom) => {
	let data = _readJson();
	for (k in data.kingdoms) {
		console.log(k)
	}
}



module.exports = {
	kingdomsJson
}