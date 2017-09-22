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

jsonModule.getCastles = kingdom => {
	const json = jsonModule.readJson();
	const castles = json[kingdom]["castles"];
	return castles;
};

jsonModule.getCastle = (kingdom, castle) => {
	//array search
};

jsonModule.getLeiges = castle => {
	const json = jsonModule.readJson();
	const leiges = json[castle]["leiges"];
	console.log(leiges);
};

jsonModule.getLiege = (kingdom, leige) => {
	//array search
};

//getvassel

module.exports = jsonModule;
