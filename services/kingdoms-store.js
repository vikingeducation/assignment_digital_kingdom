const fs = require('fs');


function readJSON(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        throw err;
      }

      data = data.toString();
      data = JSON.parse(data);

      resolve(data);
    });
  });
}


function writeJSON(path, data) {
  fs.writeFileSync(path, data);
  console.log('Successfully wrote to JSON file');
}





module.exports = {
  readJSON,
  writeJSON,
}
