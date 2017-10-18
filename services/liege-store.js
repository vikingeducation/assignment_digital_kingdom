const {
  _getJson,
  _saveJson
} = require('./file-tools');

const getVassals = (kingdom, castle, liege) => {
  const json = _getJson();
  const vassals = json.kingdoms[kingdom].castles[castle].lieges[liege].vassals;
  return vassals;
};

const addVassal = (kingdom, castle, liege, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[castle].lieges[liege].name) return;
  json.kingdoms[kingdom].castles[castle].lieges[liege].vassals.push(name);
  _saveJson(json);
};

const addLiege = (kingdom, castle, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[castle].lieges[name]) return;
  json.kingdoms[kingdom].castles[castle].lieges[name] = {
    vassals: []
  };
  _saveJson(json);
};

module.exports = {
  getVassals,
  addVassal,
  addLiege
};
