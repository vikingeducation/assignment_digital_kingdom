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

function getProperty( propertyName, object ) {
  var parts = propertyName.split( "." ),
    length = parts.length,
    i,
    property = object || this;
  for ( i = 0; i < length; i++ ) {
      property = property[parts[i]];
  }
  return property;
}

function createKingdom(name, king, queen) {
  debug(`creating new Kingdom ${name} with ${king} and ${queen}`);
  return {name: name, king: king, queen: queen, child: {}};
}

function addKingdom(name, king, queen) {
  debug(`adding Kingdom ${name} with ${king} and ${queen}`);
  const json = getJson();
  if (json[name]) return;
  json.kingdoms[name] = createKingdom(name, king, queen);
  saveJson(json);
}

function getKingdoms() {
  const json = getJson();
  let kingdoms = {};
  for (kingdom in json.kingdoms) {
    debug(`getting Kingdoms working on ${kingdom}`);
    count = Object.keys(json.kingdoms[kingdom].child) === undefined ? 0 : Object.keys(json.kingdoms[kingdom].child).length;
    kingdoms[kingdom] = {name: json.kingdoms[kingdom].name, king: json.kingdoms[kingdom].king, queen: json.kingdoms[kingdom].queen, castles: count};
  };
  debug(`got Kingdoms ${Object.keys(kingdoms)}`);
  return kingdoms;
}

function createMinion(name, type) {
  debug(`creating new Minion ${name} of type ${type}`);
  return {name: name, type: type, child: {}};
}

function addMinion(master, name, type) {
  debug(`adding Minion ${name} of type ${type} for master ${master}`);
  const json = getJson();
  let parent = getProperty(master, json);
  parent.child[name] = (createMinion(name, type));
  saveJson(json);
}

function getMinions(master) {
  debug(`retrieving minions of ${master}`);
  const json = getJson();
  let parent = getProperty(master, json);
  let children = {};
  for (child in parent.child) {
    debug(`getting Children working on ${child}`);
    count = Object.keys(parent.child[child].child) === undefined ? null : Object.keys(parent.child[child].child).length;
    children[child] = {name: parent.child[child].name, count: count};
  };
  return children;
}



module.exports = {
  getKingdoms,
  addKingdom,
  getMinions,
  addMinion
};
