const {
  _getJson,
  _saveJson
} = require('./file-tools');

const getKingdoms = () => {
  const json = _getJson();
  const kingdomNames = Object.keys(json.kingdoms);
  const kingdoms = [];
  kingdomNames.forEach((kingdom) => {
    kingdoms.push({
      name: kingdom,
      king: json.kingdoms[kingdom].king,
      queen: json.kingdoms[kingdom].queen,
      castles: Object.keys(json.kingdoms[kingdom].castles).length
    });
  });
  return kingdoms;
};

const getCastles = (kingdom, pathStub) => {
  const json = _getJson();
  const castleNames = Object.keys(json.kingdoms[kingdom].castles);
  const castles = [];
  castleNames.forEach((castle) => {
    castles.push({
      name: castle,
      lieges: Object.keys(json.kingdoms[kingdom].castles[castle].lieges).length,
      path: `${pathStub}/castles/${castle}`
    });
  });
  return castles;
};

const addKingdom = (name, king, queen) => {
  const json = _getJson();
  if (json.kingdoms[name]) return;
  json.kingdoms[name] = {
    king,
    queen,
    castles: {}
  };
  _saveJson(json);
};

module.exports = {
  getKingdoms,
  getCastles,
  addKingdom
};
