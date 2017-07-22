const parentMap = require('../io/parent_map');
const { read, write } = require('../io');

function deleteEntity(realm, type, id) {
  let entity = realm[type][id];
  if (!entity) return parentMap[type];

  if (Object.keys(entity.children).length) {
    for (let childType in entity.children) {
      for (let childId of entity.children[childType]) {
        deleteEntity(realm, childType, childId);
      }
    }
  }

  // Remove entity
  realm[type][id] = null;

  return realm;
}

module.exports = (type, id) => {
  // Read Database
  let realm = read();

  let entity = realm[type][id];
  // If we don't have an entity, load the kingdoms page
  if (entity === null) return 'vassals';
  // Grok the parent
  let parentType = parentMap[type];
  let parentId = entity.parentId;

  // Recursively delete children
  deleteEntity(realm, type, id);

  // Remove entity from parent's child object
  if (!isNaN(+parentId)) {
    let childArray = realm[parentType][parentId].children[type];
    childArray = childArray.splice(childArray.indexOf(+id), 1);
  }

  write(realm);
  return parentType;
};
