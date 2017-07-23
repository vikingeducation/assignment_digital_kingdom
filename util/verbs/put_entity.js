const { read, write } = require('../io');
const entMap = require('../io/entity_map');

// If id is specified, we will overwrite!
module.exports = (type, name, parentId, id) => {
  // Load the database
  let realm = read();
  // Generate new ID if we don't have one
  const newId = !isNaN(+id) ? id : _getnewId(realm, type);
  // Create empty entity object.
  let newEntity = {
    parentId: parentId,
    name: name,
    children: [],
    type: type,
    id: newId
  };

  // Add to parent's child object if we have a parent
  if (!isNaN(+parentId)) {
    realm[entMap.parent[type]][parentId].children.push(newId);
  }

  // Insert object into realm, LAB.
  realm[type][newId] = newEntity;

  // Write the new realm to the file.
  write(realm);
  return newId;
};

// Return a valid unique id for a given entity type
function _getnewId(realm, type) {
  // Get all entities of that type as an array of Numbers
  let keys = Object.keys(realm[type]).map(el => +el);
  if (!keys.length) return 0;
  return Math.max(...keys) + 1;
}
