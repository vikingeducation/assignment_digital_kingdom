const read = require('../io').read;

const parentMap = {
	kingdoms: 'vassals',
	castles: 'kingdoms',
	kings: 'kingdoms',
	queens: 'kingdoms',
	lieges: 'castles',
	vassals: 'lieges'
};

module.exports = (type, id, parentId) => {
	let realm = read();
	let parsedEntities = [];
	if (id === undefined) {
		for (let key in realm[type]) {
			if (
				(!isNaN(+parentId) && realm[type][key].parentId === +parentId) ||
				parentId === undefined
			) {
				parsedEntities.push(realm[type][key]);
			}
		}
		return parsedEntities;
	}

	let entity = realm[type][id];

	for (let key in entity.children) {
		entity.children[key].id = key;
		entity.children[key] = entity.children[key].map(el => realm[key][el]);
	}

	return entity;
};
