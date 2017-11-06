const {
  _getJson,
  _saveJson
} = require('./file-tools');

const getLieges = (kingdom, castle, pathStub) => {
  const json = _getJson();
  const liegeNames = Object.keys(json.kingdoms[kingdom].castles[castle].lieges);
  const lieges = [];
  liegeNames.forEach((liege) => {
    lieges.push({
      name: liege,
      vassals: (json.kingdoms[kingdom].castles[castle].lieges[liege].vassals).length,
      path: `${pathStub}/lieges/${liege}`
    });
  });
  return lieges;
};

const addCastle = (kingdom, name) => {
  const json = _getJson();
  if (json.kingdoms[kingdom].castles[name]) return;
  json.kingdoms[kingdom].castles[name] = {
    lieges: {}
  };
  _saveJson(json);
};

module.exports = {
  getLieges,
  addCastle
};
