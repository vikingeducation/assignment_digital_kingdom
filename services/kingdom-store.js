const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const _saveJSON = (json) => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

const getKingdoms = () => {
  const json = _getJSON().Kingdoms;
  console.log()
  return json;
};

const getCastles = (kingdom) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"];
  return json;
};

const getLieges = (kingdom, castle) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"][castle];
  return json;
};

const getVassals = (kingdom, castle, liege) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege];
  return json;
};

const addKingdom = (kingdom, king, queen) => {
  const json = _getJSON();
  if (json.Kingdoms[kingdom]) return;

  json.Kingdoms[kingdom] = {
    "King": king,
    "Queen": queen,
    "CastleCount": 0,
    "Castles": {}
  };

  _saveJSON(json);
};

const addCastle = (kingdom, castle) => {
  const json = _getJSON();
  if (json.Kingdoms[kingdom]["Castles"][castle]) return;

  json.Kingdoms[kingdom]["Castles"][castle] = {
    "LiegeCount": 0,
    "Lieges": {}
  };

  json.Kingdoms[kingdom]["CastleCount"] += 1;

  _saveJSON(json);
};

const addLiege = (kingdom, castle, liege) => {
  const json = _getJSON();
  if (json.Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege]) return;

  json.Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege] = {
    "VassalCount": 0,
    "Vassals": []
  };

  json.Kingdoms[kingdom]["Castles"][castle]["LiegeCount"] += 1;
  _saveJSON(json);
};

const addVassal = (kingdom, castle, liege, vassal) => {
  const json = _getJSON();
  json.Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege]["Vassals"].push(vassal);
  json.Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege]["VassalCount"] += 1;
  _saveJSON(json);
};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom,
  addCastle,
  addLiege,
  addVassal
};