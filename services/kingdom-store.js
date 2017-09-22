const fs = require("fs");

//FILE METHODS

function readJson() {
	const data = fs.readFileSync("kingdom.json");
	const json = JSON.parse(data);
	return json;
}

function searchArray(json, name, query) {
	var object;

	json.forEach(obj => {
		if (obj.name == name) {
			object = obj[query];
		}
	});

	return object;
}

const writeJson = json => {
	fs.writeFileSync("kingdom.json", JSON.stringify(json, null, 4));
};

const jsonModule = {};

//GET METHODS

jsonModule.getKingdoms = () => {
	const json = readJson();
	return json.thekingdoms;
};

jsonModule.getCastles = kingdom => {
	var json = readJson();
	var json = json.thekingdoms;
	var castles = searchArray(json, kingdom, "castles");
	//const castles = json.thekingdoms[kingdom]["castles"];
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

//POST METHODS

jsonModule.addKingdom = (kingdom, king, queen) => {
	var json = readJson();

	//writeJson(json)
};

module.exports = jsonModule;
