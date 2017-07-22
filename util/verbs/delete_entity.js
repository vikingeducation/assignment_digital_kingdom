const parentMap = require('../io/parent_map');
const { read, write } = require('../io');
module.exports = (type, id) => {
	let realm = read();
	let entity = realm[type][id];
	if (!entity) return parentMap[type];

	// Grok the parent
	let parentType = parentMap[type];
	let parentId = entity.parentId;

	// Remove entity from parent's child object
	if (!isNaN(+parentId)) {
		childArray = realm[parentType][parentId].children[type];
		childArray = childArray.splice(childArray.indexOf(id), 1);
	}

	// Remove entity
	realm[type][id] = null;

	write(realm);
	return parentType;
};
