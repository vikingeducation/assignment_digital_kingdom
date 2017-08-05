const fs = require('fs');

const getKingdoms = () => {
  let kingdoms = _parseAndRead();
  return kingdoms.kingdoms
};

const createKingdom = name => {
  let kingdoms = _parseAndRead();
  kingdoms.kingdoms.push({kingdomName: name});
  _saveFile(kingdoms);
};

const _parseAndRead = () => {
  let kingdomsString = fs.readFileSync('./data.json');
  return JSON.parse(kingdomsString);
};

const _saveFile = json => {
  fs.writeFileSync('./data.json', JSON.stringify(json, null, 4));
}

module.exports = {
  getKingdoms,
  createKingdom
}