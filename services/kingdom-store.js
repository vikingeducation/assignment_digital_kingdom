const { 
  _getJSON,
  _saveJSON
} = require('./global-store');

const getKingdoms = () => {
  const json = _getJSON().Kingdoms;
  return json;
};

const getCastles = (kingdom) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"];
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
  addKingdom,
};