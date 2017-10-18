const fs = require('fs');

const _getJson = () => {
  const data = fs.readFileSync('kingdoms.json');
  const json = JSON.parse(data);
  return json;
};

const _saveJson = (json) => {
  fs.writeFileSync('kingdoms.json', JSON.stringify(json, null, 4));
};

const getKingdoms = () => {
  const json = _getJson();
  const kingdomNames = Object.keys(json.kingdoms);
  let kingdoms = [];
  kingdomNames.forEach((kingdom) => {
    kingdoms.push({
      "name": kingdom,
      "king": json.kingdoms[kingdom].king,
      "queen": json.kingdoms[kingdom].queen,
      "castles": Object.keys(json.kingdoms[kingdom].castles).length
    });
  });
  return kingdoms;
};

const getCastles = (kingdom) => {
  const json = _getJson();
  const castleNames = Object.keys(json.kingdoms[kingdom].castles);
  let castles = [];
  castleNames.forEach((castle) => {
    castles.push({
      "name": castle,
      "lieges": Object.keys(json.kingdoms[kingdom].castles[castle]).length
    });
  });
  return castles;
};

const getLieges = (kingdom, castle) => {
  const json = _getJson();
  const liegeNames = Object.keys(json.kingdoms[kingdom].castles[castle]);
  let lieges = [];
  liegeNames.forEach((liege) => {
    lieges.push({
      "name": liege,
      "vassals": (json.kingdoms[kingdom].castles[castle][liege].vassals).length
    });
  });
  return lieges;
};

const getVassals = (kingdom, castle, liege) => {
  const json = _getJson();
  const vassals = json.kingdoms[kingdom].castles[castle][liege].vassals;
  return vassals;
};

const addKingdom = (name, king, queen) => {
  const json = _getJson();
  if (json.kingdoms[name]) return;
  json.kingdoms[name] = {
    "king": king,
    "queen": queen,
    "castles": {}
  };
  _saveJson(json);
};

const addCastle = (kingdom, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[name]) return;
  json.kingdoms[kingdom].castles[name] = {};
  _saveJson(json);
};

const addLiege = (kingdom, castle, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[castle].name) return;
  json.kingdoms[kingdom].castles[castle][name] = {
    "vassals": []
  };
  _saveJson(json);
};

const addVassal = (kingdom, castle, liege, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[castle][liege].name) return;
  json.kingdoms[kingdom].castles[castle][liege].vassals.push(name);
  _saveJson(json);
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
