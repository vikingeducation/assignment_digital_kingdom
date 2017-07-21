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
	kingdom = data.kingdoms[kingdom];

	kingdom = JSON.stringify(kingdom, null, 2)

	return kingdom;
}

const castleJson = (params) => {
	let data = _readJson();
	data = data.kingdoms;

	for (key in params) {
		data = data[key];
	}
	data = JSON.stringify(data, null, 2);
	return data;
}



module.exports = {
	kingdomsJson,
	kingdomJson,
	castleJson
}