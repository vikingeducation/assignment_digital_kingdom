const read = require('../io').read;
const parentMap = require('../io/parent_map');

module.exports = (type, id) => {
  // Return an empty list if given an invalid entity type
  if (!Object.keys(parentMap).includes(type)) return [];

  let realm = read();
  let parsedEntities = [];

  // Return all of an entity if we don't have a particular id
  if (id === undefined) {
    return Object.values(realm[type]);
  }

  let currentEntity = realm[type][id];
  // Failsafe in case we don't have an entity
  if (currentEntity === undefined) return [];
  let newChildren = [];
  // Grab all of the real children from their ids
  for (let childType in currentEntity.children) {
    currentEntity.children[childType].forEach(childId => {
      realm[childType][childId].type = childType;
      newChildren.push(realm[childType][childId]);
    });
  }
  currentEntity.children = newChildren;

  return [currentEntity];
};
