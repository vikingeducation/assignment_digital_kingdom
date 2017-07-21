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

const diveJson = (params) => {
	let data = _readJson();

	params.forEach((param) => {
		data = data[param];
	});

	data = JSON.stringify(data, null, 2);
	return [params[params.length - 1], data];
}



module.exports = {
	kingdomsJson,
	diveJson
}