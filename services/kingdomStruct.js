const {
  _getData,
  _filterByName
} = require("./kingdomHelpers");

const filePath = "structure.json";

const getInputKeys = obj => {
  const allKeys = Object.keys(obj);
  return allKeys.filter(key => {
    return typeof obj[key] === "string";
  });
};

const getKingdomKeys = kingdomName => {
  const obj = _getData(filePath);
  obj.keys
};
