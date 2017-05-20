const { 
  _getJSON,
  _saveJSON
} = require('./global-store');

const getVassals = (kingdom, castle, liege) => {
  const json = _getJSON().Kingdoms[kingdom]["Castles"][castle]["Lieges"][liege];
  return json;
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
  getVassals,
  addLiege,
  addVassal
};