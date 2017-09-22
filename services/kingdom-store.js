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

jsonModule.getLeiges = (kingdom, castle) => {
	const json = jsonModule.getCastles(kingdom);
	const leiges = searchArray(json, castle, "leiges");
	return leiges;
};

jsonModule.getVassals = (kingdom, castle, leige) => {
	const json = jsonModule.getLeiges(kingdom, castle);
	const vassals = searchArray(json, leige, "vassals");
	return vassals;
};

function searchArray(json, name, query) {
	var object;

	json.forEach(obj => {
		if (obj.name == name) {
			object = obj[query];
		}
	});
	return object;
}

module.exports = jsonModule;
