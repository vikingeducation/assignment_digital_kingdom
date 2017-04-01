const { getKingdoms, getKingdom } = require("./kingdomGetters");

const {
  _getData,
  _writeData,
  _filterByName
} = require("./kingdomHelpers");

const filePath = "kingdoms.json";

const makeKingdom = (name, king, queen) => {
  if (getKingdom(name)) return false;

  const obj = _getData(filePath);
  const kingdom = {
    name: name,
    king: king,
    queen: queen,
    castles: []
  };

  obj.kingdoms.push(kingdom);
  _writeData(filePath, obj);
  return true;
};

const deleteKingdom = kingdomName => {
  if (!getKingdom(kingdomName)) return;

  const obj = _getData();
  for (let i = 0; i < obj.kingdoms.length; i++) {
    if (obj.kingdoms[i].name === kingdomName) {
      obj.kingdoms.splice(i, 1);
      break;
    }
  }
  _writeData(obj);
};

module.exports = {
  makeKingdom,
  deleteKingdom
};
