const fs = require('fs');

const filePath = 'kingdoms.json';

const _getData = () => {
  const data = fs.readFileSync(filePath);
  const obj = JSON.parse(data);
  return obj;
};

const _writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const _filterByName = (array, nameArg) => {
  let result = array.filter(obj => {
    return obj.name === nameArg;
  });
  return result[0];
};

module.exports = {
  _getData,
  _filterByName
};
