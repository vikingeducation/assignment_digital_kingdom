const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json.Kingdoms;
};

const getKingdoms = () => {
  const json = _getJSON();
  return json;
};

const getCastles = (kingdom) => {
  const json = _getJSON()[kingdom]["Castles"];
  return json;
};

const getLieges = (kingdom, castle) => {
  const json = _getJSON()[kingdom]["Castles"][castle];
  return json;
};

const getVassals = (kingdom, castle, liege) => {
  const json = _getJSON()[kingdom]["Castles"][castle]["Lieges"][liege];
  return json;
};

const addKingdom = (kingdom, king, queen) => {
  const json = _getJSON();
  if (json[kingdom]) return;

  json[kingdom] = {
    "King": king,
    "Queen": queen,
    "CastleCount": 0,
    "Castles": {}
  };
};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom
};