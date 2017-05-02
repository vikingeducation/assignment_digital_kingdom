const debug = require('debug')('feudal');
const fs = require('fs');
const path = require('path');
const datafile = path.join(__dirname, '../data/kingdoms.json');

function getJson() {
  const data = fs.readFileSync(datafile);
  const json = JSON.parse(data);
  return json;
}

function saveJson(json) {
  fs.writeFileSync(datafile, JSON.stringify(json, null, 4));
}

function createKingdom(name, king, queen) {
  debug(`creating Kingdom ${name} with ${king} and ${queen}`);
  return {name: name, king: king, queen: queen, castles: []};
}

function addKingdom(name, king, queen) {
  debug(`adding Kingdom ${name} with ${king} and ${queen}`);
  const json = getJson();
  if (json[name]) return;
  json.kingdoms[name] = createKingdom(name, king, queen);
  saveJson(json);
}

function createMinion(name, type) {
  debug(`creating Minion ${name} of type ${type}`);
  return {name: name, type: type, child: []};
}

function getKingdoms() {
  const json = getJson();
  let kingdoms = {};
  for (kingdom in json.kingdoms) {
    count = json.kingdoms[kingdom].castles === undefined ? 0 : json.kingdoms[kingdom].castles.length;
    kingdoms[kingdom] = {name: json.kingdoms[kingdom].name, king: json.kingdoms[kingdom].king, queen: json.kingdoms[kingdom].queen, castles: count};
  };
  debug(`getting Kingdoms ${kingdoms}`);
  return kingdoms;
}

module.exports = {
  getKingdoms,
  addKingdom
};
