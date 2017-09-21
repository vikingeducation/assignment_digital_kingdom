const fs = require("fs");

const jsonModule = {};

jsonModule.readJson = () => {
	const data = fs.readFileSync("kingdom.json");
	const json = JSON.parse(data);
	return json;
};

jsonModule.getKingdoms = () => {
	const json = jsonModule.readJson();
	const kingdoms = Object.keys(json);
	return json;
};

module.exports = jsonModule;
