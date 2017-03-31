const = require('fs');

const getJson = () => {
  const data = fs.readFileSync('kingdoms.json');
  const obj = JSON.parse(data);
  return obj;
};
