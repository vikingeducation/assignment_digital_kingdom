const fs = require('fs');

const getKingdomData = () => {
  var json = fs.readFileSync('kingdoms.json', 'utf8');
  return JSON.parse(json);
};

const saveJson = (json) => {
  fs.writeFileSync('kingdoms.json', JSON.stringify(json, null, 2));
};

const getKingdomIndexData = () => {
  var results = {};
  const json = getKingdomData();
  const kingdomNames = Object.keys(json.kingdoms);

  kingdomNames.forEach((name) => {
    // get relevent info
    const king = json.kingdoms[name].king;
    const queen = json.kingdoms[name].queen;
    const castleNumber = Object.keys(json.kingdoms[name].castles).length;

    // push info to results obj
    results[name] = {};
    results[name].king = king;
    results[name].queen = queen;
    results[name].castleNumber = castleNumber;
  });

  return results;
};

const getKingdomShowInfo = (name) => {
  const json = getKingdomData();

  const kingdom = json.kingdoms[name];

  if (!kingdom) {
    return 'Kingdom not found';
  }

  kingdom.name = name.split('-').join(' ');
  return kingdom;
};

const createKingdom = (params) => {
  if ((params.kingdomName && params.kingdomName.trim() == '') ||
    (params.king && params.king.trim() == '') ||
    (params.queen && params.queen.trim() == '')) {
    return 'No empty fields';
  }

  const json = getKingdomData();

  const name = params.kingdomName.split(' ').join('-');
  const king = params.king;
  const queen = params.queen;

  json.kingdoms[name] = {};
  json.kingdoms[name].king = king;
  json.kingdoms[name].queen = queen;
  json.kingdoms[name].castles = {};

  saveJson(json);
};

module.exports = {
  getKingdomData,
  saveJson,
  getKingdomIndexData,
  createKingdom,
  getKingdomShowInfo
};
