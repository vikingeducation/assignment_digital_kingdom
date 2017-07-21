const read = require('../io').read;
module.exports = (type, id) => {
	let realm = read();
	let entity = realm[type][id];

	for (let key in entity.children) {
		entity.children[key] = entity.children[key].map(el => realm[key][el]);
	}
	return entity;
};
