const { read, write } = require('../io');
module.exports = data => {
	// type
	// parentType
	// parentId
	// name
	// Read json file.
	let realm = read();

	// Generate new ID.
	const newID = _getNewId(realm, data.parentType);
	console.log(newID);
	// Create empty entity object.
	let newEntity = {
		parentId: data.parentId,
		name: data.name,
		children: {}
	};

	// Insert object into realm, LAB.
	realm[data.type][newID] = newEntity;

	// Write the new realm to the file.
	write(realm);
};

function _getNewId(realm, parentType) {
	let keys = Object.keys(realm[parentType]);
	keys = keys.filter(el => !isNaN(+el)).map(el => +el);
	console.log(keys);
	return Math.max(...keys) + 1;
}
