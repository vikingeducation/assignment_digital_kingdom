const fs = require('fs');
const { getKingdomData, saveJson } = require('./kingdom-store');
const { findKingdomByCastleName, formatAsKey } = require('./castle-store');

const saveVassal = (castleName, leigeName, vassalName) => {
  const kingdomName = findKingdomByCastleName(castleName);
  vassalName = formatAsKey(vassalName);

  var json = getKingdomData();

  json.kingdoms[kingdomName].castles[castleName].leiges[leigeName].vassals.push(vassalName);
  saveJson(json);
};

const executeVassal = (castleName, leigeName, vassalName) => {
  const kingdomName = findKingdomByCastleName(castleName);
  var json = getKingdomData();

  const vassalIndex = json.kingdoms[kingdomName].castles[castleName].leiges[leigeName].vassals.indexOf(vassalName);

  json.kingdoms[kingdomName].castles[castleName].leiges[leigeName].vassals.splice(vassalIndex, 1);

  saveJson(json);
};

module.exports = {
  saveVassal,
  executeVassal
};
