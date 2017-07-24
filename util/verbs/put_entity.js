const io = require('../io');

// If id is specified, we will overwrite!
module.exports = (type, name, parentId, id) => {
  // Cleanly handle invalid type
  if (!io.valid(type)) return false;
  // Load the database
  let realm = io.read();
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

  newEntity.path = _buildPath(realm, newEntity);

  // If we have a parent, add to parent's child object and set parent path
  if (!isNaN(+parentId)) {
    let parent = realm[io.parent(type)][parentId];
    parent.children.push(newId);
    newEntity.parentPath = _buildPath(realm, parent);
  }

  // Insert object into realm, LAB.
  realm[type][newId] = newEntity;

  // Write the new realm to the file.
  io.write(realm);
  return newEntity;
};

// Return a valid unique id for a given entity type
function _getnewId(realm, type) {
  // Get all entities of that type as an array of Numbers
  let keys = Object.keys(realm[type]).map(el => +el);
  if (!keys.length) return 0;
  return Math.max(...keys) + 1;
}

function _buildPath(realm, entity) {
  let parent = realm[io.parent(entity.type)][entity.parentId];
  let type = entity.type[0].toLowerCase() + entity.type.slice(1);
  let path = `/${type}s/${entity.id}`;
  if (parent) {
    // Get moar ancestors
    path = _buildPath(realm, parent) + path;
  }
  return path;
}
