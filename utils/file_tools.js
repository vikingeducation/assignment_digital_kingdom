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

const diveJson = (params) => {
	let data = _readJson();
	data = data.kingdoms;

	for (key in params) {
		// console.log(key, 'key')
		// console.log(params, 'params')
		data = data[params[key]];

		// console.log(data);
	}

	let names = Object.keys(params)
	let name = names[names.length - 1];

	// data = data[params["kingdom"]].castles

	// data = data[params["castle"]];
	// console.log(data);

	data = JSON.stringify(data, null, 2);
	return [params[name], data];
}



module.exports = {
	kingdomsJson,
	kingdomJson,
	diveJson
}