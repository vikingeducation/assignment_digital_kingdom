const fs = require('fs');

json = fs.readFileSync('./kingdoms.json');
json = JSON.parse(json);
json = JSON.stringify(json, null, 2);

fs.writeFileSync('./kingdoms.json', json);