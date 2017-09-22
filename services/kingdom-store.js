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
	fs.writeFileSync("kingdom.json", JSON.stringify(json, null, 2));
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

	var newKingdom = {
		name: kingdom,
		king: king,
		queen: queen,
		castles: []
	};

	json.thekingdoms.push(newKingdom);
};

jsonModule.addCastle = (kingdom, castle) => {
	var json = readJson();

	var newCastle = {
		name: castle,
		leiges: []
	};

	json.thekingdoms.forEach(obj => {
		if (obj.name == kingdom) {
			obj.castles.push(newCastle);
		}
	});

	writeJson(json);
};

jsonModule.addLeige = (kingdom, castle, leige) => {
	var json = readJson();

	var newLeige = {
		name: leige,
		vassals: []
	};

	json.thekingdoms.forEach(obj1 => {
		if (obj1.name == kingdom) {
			obj1.castles.forEach(obj2 => {
				if (obj2.name == castle) {
					obj2.leiges.push(newLeige);
				}
			});
		}
	});

	writeJson(json);
};

module.exports = jsonModule;
