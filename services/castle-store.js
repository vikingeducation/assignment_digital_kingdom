const fs = require('fs');
const { getKingdomData, saveJson } = require('./kingdom-store');

const formatAsKey = (string) => {
  return string.split(' ').join('-');
};

const findCastleByName = (json, castleName) => {
  const kingdoms = json.kingdoms;

  for (var i = 0; i < Object.keys(kingdoms).length; i++) {
    const kingdom = Object.keys(kingdoms)[i];

    if (kingdoms[kingdom].castles[castleName]) {
      return kingdoms[kingdom].castles[castleName];
    }
  }
};

const findKingdomByCastleName = (castleName) => {
  var json = getKingdomData();
  return findKingdomByJsonAndCastleName(json, castleName);
};

const findKingdomByJsonAndCastleName = (json, castleName) => {
  const kingdoms = json.kingdoms;

  for (var i = 0; i < Object.keys(kingdoms).length; i++) {
    const kingdom = Object.keys(kingdoms)[i];

    if (kingdoms[kingdom].castles[castleName]) {
      return kingdom;
    }
  }
};

const saveCastle = (kingdomName, castleName) => {
  // Halt if there are missing parameters
  if (!kingdomName || !castleName) return;

  const kingdom = formatAsKey(kingdomName);
  const castle = formatAsKey(castleName);

  var json = getKingdomData();

  // Halt if the kingdom does not exist
  if (!json.kingdoms[kingdom]) return;

  // Halt if castle already exists
  if (findCastleByName(json, castle)) return 'Already exists';

  json.kingdoms[kingdom].castles[castle] = { "leiges": {} };

  saveJson(json);
};

const getCastleShowInfo = (castleName) => {
  const json = getKingdomData();

  const castle = findCastleByName(json, castleName);

  if (!castle) {
    return 'Castle not found';
  }

  castle.name = formatAsKey(castleName);
  return castle;
};

module.exports = {
  formatAsKey,
  findKingdomByCastleName,
  findKingdomByJsonAndCastleName,
  findCastleByName,
  saveCastle,
  getCastleShowInfo
};
