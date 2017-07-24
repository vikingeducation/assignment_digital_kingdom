const io = require('../io');

module.exports = (type, id) => {
  // Return an empty list if given an invalid entity type
  if (!io.valid(type)) return [];

  let realm = io.read();

  // Return all of an entity if we don't have a particular id
  if (id === undefined) {
    let entities = Object.values(realm[type]);
    entities.forEach(entity => {
      _populateChildren(realm, entity);
    });
    return entities;
  }

  let currentEntity = realm[type][id];
  // Failsafe in case we don't have an entity
  if (currentEntity === null || currentEntity === undefined) return null;

  _populateChildren(realm, currentEntity);

  return currentEntity;
};

// Recursively Populate Child Objects
function _populateChildren(realm, currentEntity, depth) {
  if (depth === undefined) depth = 2;
  if (!depth) return;
  let newChildren = [];
  let childType = io.child(currentEntity.type);
  // Grab all of the real children from their ids
  currentEntity.children.forEach(childId => {
    newChildren.push(realm[childType][childId]);
  });
  currentEntity.children = newChildren;
  currentEntity.children.forEach(child => {
    _populateChildren(realm, child, depth - 1);
  });
}
