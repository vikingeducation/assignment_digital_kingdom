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

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom
};