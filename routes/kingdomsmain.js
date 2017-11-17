const express = require('express');
const router = express.Router();
const fs = require('fs');

const kingdoms = () => {
	const data = fs.readFileSync('./data/kingdoms.json');
	const json = JSON.parse(data);
	const kingdom = Object.keys(json);
	const names = [];
	/*for (var i = 0; i < kingdom.length; i++) {
 		names.push(json[kingdom[i]]);
 	}*/

	const data1 = fs.readFileSync('./data/kings.json');
	const jsonk = JSON.parse(data1);
	const kings = Object.keys(jsonk);
	let kingnames = [];

	const data2 = fs.readFileSync('./data/queens.json');
	const jsonq = JSON.parse(data);
	const queens = Object.keys(jsonq);
	let queennames = [];

	const data3 = fs.readFileSync('./data/castles.json');
	const jsonc = JSON.parse(data);
	const castles = Object.keys(jsonq);

	for (var k in json) {
		if (json[k].id === jsonk[k].id) {
			json[k].kingname = jsonk[k].name;
		}
	}

	for (var k in json) {
		if (json[k].id === jsonq[k].id) {
			json[k].queenname = jsonq[k].name;
		}
	}

	for (var k in json) {
		for (var i = 0; i < json[k].castleIds.length; i++) {
			if (json[k].castleIds[i] === jsonc[k][i].id) {
				json[k].castlename = jsonc[k].name;
			}
		}
	}

	return json;
};

let Kingdoms = { 1: {}, 2: {} };

router.get('/:kingdom', (req, res) => {
	const kingdom = req.params.kingdom;
	console.log(species);
	const king = getKing(kingdom);
	console.log(animals);
	res.render('/main', { kingdoms, kingdoms });
});

Kingdoms.create = (req, res) => {
	let king_name = req.query.params[0];
};

router.get('/', (req, res) => {
	res.send(kingdoms());
});

module.exports = router;
