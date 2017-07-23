const fs = require('fs');

module.exports = {
  write: data =>
    fs.writeFileSync('./data/realm.json', JSON.stringify(data, null, 2)),
  read: () => JSON.parse(fs.readFileSync('./data/realm.json'), 'utf8'),
  reset: () =>
    module.exports.write({
      kingdom: {},
      castle: {},
      liege: {},
      vassal: {}
    }),
  parent: childType => _parent[childType],
  child: parentType => _child[parentType],
  valid: entityType => Object.keys(_parent).includes(entity)
};

const _parent = {
  kingdom: 'vassal',
  castle: 'kingdom',
  liege: 'castle',
  vassal: 'liege'
};
const _child = {
  kingdom: 'castle',
  castle: 'liege',
  liege: 'vassal',
  vassal: 'kingdom'
};
