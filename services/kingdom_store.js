const fs = require('fs');
const getJson = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/kingdoms.json', 'utf8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  }).then(data => {
    const json = JSON.parse(data);
    return json;
  });
};

const getKingdoms = () => {
  const json = getJson().then(data => Object.keys(data));
  // const kingdoms = Object.keys(json);
  return json;
};

const getKingdomProps = () => {
  const json = getJson();
  // const kingdomProps = json.
};

module.exports = { getKingdoms };
