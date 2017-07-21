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
		let castle = params[key]
		console.log(data);
		data = data[params[key]]

		console.log(data, 'this is data');
		// data = data[key];
		// console.log(params[key], 'this is the params')
		// console.log(data, 'this is the data')
		// console.log(key, 'this is the key')
		// console.log(data[key], 'this is the value')

	}
	data = JSON.stringify(data, null, 2);
	return data;
}



module.exports = {
	kingdomsJson,
	kingdomJson,
	castleJson
}