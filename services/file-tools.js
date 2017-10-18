const fs = require('fs');

const _getJson = () => {
  const data = fs.readFileSync('kingdoms.json');
  const json = JSON.parse(data);
  return json;
};

const _saveJson = (json) => {
  fs.writeFileSync('kingdoms.json', JSON.stringify(json, null, 4));
};

module.exports = {
  _getJson,
  _saveJson
};
