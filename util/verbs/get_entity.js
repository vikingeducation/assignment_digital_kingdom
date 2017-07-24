const io = require('../io');

module.exports = (type, id) => {
  // Return an empty list if given an invalid entity type
  if (!io.valid(type)) return [];

  let realm = io.read();
  let parsedEntities = [];

  // Return all of an entity if we don't have a particular id
  if (id === undefined) {
    console.log(type);
    return Object.values(realm[type]);
  }

  let currentEntity = realm[type][id];
  // Failsafe in case we don't have an entity
  if (currentEntity === null || currentEntity === undefined) return [];

  // Recursively Populate Child Objects
  _populateChildren(realm, currentEntity);
  return currentEntity;
};

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
