const fs = require("fs");

const jsonModule = {};

jsonModule.readJson = () => {
	const data = fs.readFileSync("kingdom.json");
	const json = JSON.parse(data);
	return json;
};

jsonModule.getKingdoms = () => {
	const json = jsonModule.readJson();
	return json;
};

jsonModule.getCastle = kingdom => {
	const json = jsonModule.readJson();
	const castles = json[kingdom]["castles"];
	return castles;
};

jsonModule.getLeiges = castle => {
	const json = jsonModule.readJson();
	const leiges = json[castle]["leiges"];
	console.log(leiges);
};

module.exports = jsonModule;
