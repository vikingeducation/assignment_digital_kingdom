const fs = require('fs');
const { getKingdomData, saveJson } = require('./kingdom-store');
const { findKingdomByJsonAndCastleName, findCastleByName, formatAsKey } = require('./castle-store');

const findLeigeByKingdomCastleAndName = (json, kingdomName, castleName, leigeName) => {
  return json.kingdoms[kingdomName].castles[castleName].leiges[leigeName];
};

const getLeigeShowInfo = (castleName, leigeName) => {
  const json = getKingdomData();
  const kingdomName = findKingdomByJsonAndCastleName(json, castleName);
  const leige = findLeigeByKingdomCastleAndName(json, kingdomName, castleName, leigeName);

  if (!leige) {
    return 'Castle not found';
  }

  leige.name = formatAsKey(leigeName);
  return leige;
};

const saveLeige = (castleName, leigeName) => {
  var json = getKingdomData();
  const kingdom = findKingdomByJsonAndCastleName(json, castleName);
  const castle = formatAsKey(castleName);
  const leige = formatAsKey(leigeName);

  json.kingdoms[kingdom].castles[castle].leiges[leige] = { vassals: [] };

  saveJson(json);
};

module.exports = {
  getLeigeShowInfo,
  saveLeige
};
