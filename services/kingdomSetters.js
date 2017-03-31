const { getKingdoms, getKingdom } = require('./kingdomGetters');

const {
  _getData,
  _writeData,
  _filterByName
} = require('./kingdomHelpers');

const makeKingdom = (name, king, queen) => {
  if (getKingdom(name)) return;
  
  const kingdoms = getKingdoms();
  const kingdom = {
    name: name,
    king: king,
    queen: queen
  };
  kingdoms.push(kingdom);
  _writeData(kingdoms);
};

module.exports = {

};
