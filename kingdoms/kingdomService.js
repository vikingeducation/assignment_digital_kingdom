const fs = require('fs');

const getKingdoms = () => {
  let kingdoms = _parseAndRead();
  return kingdoms.kingdoms
};

const getKingdom = name => {
  let kingdoms = _parseAndRead();
  return _findKingdom(kingdoms, name).kingdom
};

const createKingdom = name => {
  let kingdoms = _parseAndRead();
  kingdoms.kingdoms.push({kingdomName: name});
  _saveFile(kingdoms);
};

const createCastle = (kingdomName, castleName) => {
  let kingdoms = _parseAndRead();
  let { kingdom, kingdomIndex } = _findKingdom(kingdoms, kingdomName);
  kingdom.castles = kingdom.castles || [];
  kingdom.castles.push({ castleName: castleName });

  kingdoms.kingdoms[kingdomIndex] = kingdom;
  _saveFile(kingdoms)
};

const getCastle = (kingdomName, castleName) => {
  let kingdoms = _parseAndRead();
  let kingdom = _findKingdom(kingdoms, kingdomName).kingdom;
  return _findCastle(kingdom, castleName).castle
};

const _parseAndRead = () => {
  let kingdomsString = fs.readFileSync('./data.json');
  return JSON.parse(kingdomsString);
};

const _saveFile = json => {
  fs.writeFileSync('./data.json', JSON.stringify(json, null, 4));
};

const _findKingdom = (kingdoms, name) => {
  let kingdom = kingdoms.kingdoms.filter(kingdom => { 
    return kingdom.kingdomName === name
  })[0];

  let index = kingdoms.kingdoms.indexOf(kingdom);
  return { index, kingdom };
};

const _findCastle = (kingdom, name) => {
  let castle = kingdom.castles.filter(castle => {
    return castle.castleName === name
  })[0];

  let index = kingdom.castles.indexOf(castle);
  return { index, castle };
};

module.exports = {
  getKingdoms,
  createKingdom,
  getKingdom,
  createCastle,
  getCastle
}