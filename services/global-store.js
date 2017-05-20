const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const _saveJSON = (json) => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

module.exports = {
  _getJSON,
  _saveJSON
};