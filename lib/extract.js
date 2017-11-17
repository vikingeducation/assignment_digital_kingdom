let castles = require('../data/castles.json');
let kingdoms = require('../data/kingdoms.json');
let kings = require('../data/kings.json');
let lieges = require('../data/lieges.json');
let queens = require('../data/queens.json');
let vassals = require('../data/vassals.json');

let hierarchyObj = {
	castles: castles,
	kingdoms: kingdoms,
	kings: kings,
	lieges:lieges,
	queens: queens,
	vassals: vassals
}

module.exports = hierarchyObj;