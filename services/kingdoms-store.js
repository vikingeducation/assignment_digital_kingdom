const fs = require('fs');

let getJson = (jsonFile) => {
  let data = fs.readFileSync(`./data/${jsonFile}`)
  let json = JSON.parse(data);
  return json;
}

let saveJson = (json) => {
  fs.writeFileSync(`./data/kingdoms.json`, JSON.stringify(json, null, 2));
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
  console.log('the name added is: ' + name);
  var newIdx = String( Object.keys(json).length + 1 );
  json[newIdx] = {};
  json[newIdx]['id'] = parseInt(newIdx);
  json[newIdx]['name'] = String(name);
  json[newIdx]['kingId'] = 0;
  json[newIdx]['queenId'] = 0;
  json[newIdx]['castleIds'] = [];
  saveJson(json);
}


module.exports = {
  getKingdoms,
  getQueens,
  getKings,
  getCastles,
  getLieges,
  getVassals,
  addKingdoms
};
