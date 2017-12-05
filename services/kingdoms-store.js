const fs = require('fs');

let getJson = (jsonFile) => {
  let data = fs.readFileSync(`./data/${jsonFile}`)
  let json = JSON.parse(data);
  return json;
}

let saveJson = (json, fileName) => {
  fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify(json, null, 2));
}

const getKingdoms = () => {
  return getJson('kingdoms.json');
}

const getQueens = () => {
  return getJson('queens.json');
}

const getKings= () => {
  return getJson('kings.json');
}

const getCastles= () => {
  return getJson('castles.json');
}

const getLieges = () => {
  return getJson('lieges.json');
}

const getVassals= () => {
  return getJson('vassals.json');
}

const addKingdoms = (name) => {
  var json = getJson('kingdoms.json');
  const keys = Object.keys(json);
  keys.forEach( (el) => {
    if (json[el][name]) return;
  })
  var newIdx = String( Object.keys(json).length + 1 );
  json[newIdx] = {};
  json[newIdx]['id'] = parseInt(newIdx);
  json[newIdx]['name'] = String(name);
  json[newIdx]['kingId'] = 0;
  json[newIdx]['queenId'] = 0;
  json[newIdx]['castleIds'] = [];
  saveJson(json);
}

const addCastles = (name, kingdomId) => {
  var json = getJson('castles.json');
  const keys = Object.keys(json);
  keys.forEach( (el) => {
    if (json[el][name]) return;
  })
  var newIdx = String( Object.keys(json).length + 1 );
  json[newIdx] = {};
  json[newIdx]['id'] = parseInt(newIdx);
  json[newIdx]['name'] = String(name);
  json[newIdx]['liegeIds'] = [];
  saveJson(json, 'castles');
  var jsonKingdoms = getJson('kingdoms.json');
  jsonKingdoms[kingdomId]['castleIds'].push( parseInt(newIdx) );
  saveJson(jsonKingdoms, 'kingdoms');
}

const addLieges = (name, castleId) => {
  var json = getJson('lieges.json');
  const keys = Object.keys(json);
  keys.forEach( (el) => {
    if (json[el][name]) return;
  })
  var newIdx = String( Object.keys(json).length + 1 );
  json[newIdx] = {};
  json[newIdx]['id'] = parseInt(newIdx);
  json[newIdx]['name'] = String(name);
  json[newIdx]['vassalIds'] = [];
  saveJson(json, 'lieges');
  var jsonCastles = getJson('castles.json');
  jsonCastles[castleId]['liegeIds'].push( parseInt(newIdx) );
  saveJson(jsonCastles, 'castles');
}


module.exports = {
  getKingdoms,
  getQueens,
  getKings,
  getCastles,
  getLieges,
  getVassals,
  addKingdoms,
  addCastles,
  addLieges
};
