const fs = require('fs');

module.exports = {
	write: data =>
		fs.writeFileSync('./data/realm.json', JSON.stringify(data, null, 2)),
	read: () => JSON.parse(fs.readFileSync('./data/realm.json'), 'utf8')
};
