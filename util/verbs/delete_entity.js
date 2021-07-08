const io = require('../io');

// Recursively delete entities
function deleteEntity(realm, type, id) {
  let entity = realm[type][id];
  if (!entity) return false;

  if (entity.children.length) {
    entity.children.forEach(childId => {
      deleteEntity(realm, io.child(type), childId);
    });
  }

  // Remove entity
  realm[type][id] = null;
}

module.exports = (type, id) => {
  // Read Database
  let realm = io.read();

  let entity = realm[type][id];
  // If we don't have an entity, load the kingdoms page
  if (entity === null) return false;
  // Grok the parent
  let parentType = io.parent(type);
  let parentId = entity.parentId;

  // Recursively delete children
  deleteEntity(realm, type, id);

  // Remove entity from parent's child object
  if (!isNaN(+parentId)) {
    let childArray = realm[parentType][parentId].children;
    childArray = childArray.splice(childArray.indexOf(+id), 1);
  }

  io.write(realm);
  return true;
};
