const { read, write } = require('../io');
const parentMap = require('../io/parent_map');

// If id is specified, we will overwrite!
module.exports = (data, id) => {
  // type
  // parentId
  // name

  // Load the database
  let realm = read();

  // Ensure that our entity name is plural
  if (data.type.slice(-1) !== 's') data.type += 's';
  // Get our parentType
  const parentType = parentMap[data.type];
  // Generate new ID if we don't have one
  const newId = !isNaN(+id) ? id : _getnewId(realm, data.type);
  // Create empty entity object.
  let newEntity = {
    parentId: data.parentId,
    name: data.name,
    children: {},
    id: newId
  };

  // Add to parent's child object if we have a parent
  if (!isNaN(+data.parentId)) {
    // Get the parent's children object
    let parentChildren = realm[parentType][data.parentId].children;
    // Make sure that it contains an array for entities of our type
    if (!parentChildren[data.type]) {
      parentChildren[data.type] = [];
    }
    // Add our id
    parentChildren[data.type].push(newId);
  }

  // Insert object into realm, LAB.
  realm[data.type][newId] = newEntity;

  // Write the new realm to the file.
  write(realm);
  return newId;
};

// Return a valid unique ide for a given entity type
function _getnewId(realm, type) {
  // Get all entities of that type as an array of Numbers
  let keys = Object.keys(realm[type]).map(el => +el);
  if (!keys.length) return 0;
  return Math.max(...keys) + 1;
}
