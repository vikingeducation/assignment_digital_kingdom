const read = require('../io').read;
const entMap = require('../io/entity_map');

module.exports = (type, id) => {
  // Return an empty list if given an invalid entity type
  if (!Object.keys(entMap.parent).includes(type)) return [];

  let realm = read();
  let parsedEntities = [];

  // Return all of an entity if we don't have a particular id
  if (id === undefined) {
    return Object.values(realm[type]);
  }

  let currentEntity = realm[type][id];
  // Failsafe in case we don't have an entity
  if (currentEntity === null || currentEntity === undefined) return [];

  // Recursively Populate Child Objects
  _populateChildren(realm, currentEntity);
  return currentEntity;
};

function _populateChildren(realm, currentEntity) {
  let newChildren = [];
  let childType = entMap.child[currentEntity.type];
  // Grab all of the real children from their ids
  currentEntity.children.forEach(childId => {
    newChildren.push(realm[childType][childId]);
  });
  currentEntity.children = newChildren;
  currentEntity.children.forEach(child => {
    _populateChildren(realm, child);
  });
}
