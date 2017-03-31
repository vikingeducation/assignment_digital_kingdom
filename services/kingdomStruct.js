const {
  _getData,
  _filterByName
} = require("./kingdomHelpers");

const filePath = "structure.json";

const getKeys = key => {
  const obj = _getData(filePath);
  return obj[key];
};

module.exports = { getKeys };
