const { 
  _getJSON,
  _saveJSON
} = require('./global-store');

const getLieges = (kingdom, castle) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"][castle];
  return json;
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

module.exports = {
  getLieges,
  addCastle
};