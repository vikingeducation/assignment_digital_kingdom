const read = require('../io').read;
module.exports = (type, id) => {
	let realm = read();
	if (id === undefined) return realm[type];
	let entity = realm[type][id];

	for (let key in entity.children) {
		entity.children[key] = entity.children[key].map(el => realm[key][el]);
	}
	return entity;
};
