let kingdoms = require('./data/kingdoms.json');
const data = fs.readFileSync('./data/kingdoms.json');
const json = JSON.parse(data);
const kingdom = Object.keys(json);

function getKingdoms(json) {
	console.log(json);
}

getKingdoms(json);
