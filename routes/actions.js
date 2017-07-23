const db = require('../util/verbs');
const io = require('../util/io');
const entities = ['kingdom', 'castle', 'liege', 'vassal'];

const actions = {
  get: function(req, res, entityType) {
    // Render our page.
    return res.render('kingdom', _extractDisplayData(req, entityType));
  },
  post: function(req, res, entityType) {
    // Insert entity into db.
    db.put(entityType, req.body.name);

    // Render our page.
    get(req, res, entityType);
  },
  delete: function(req, res, entityType) {
    // Remove entity from db.
    let parentType = db.del(entityType, req.params[entityType]);
    if (parentType === 'vassals') {
      return res.status(302).redirect('/kingdoms');
    }

    return res.redirect(req.originalUrl.replace(/\/?[^/]+\/[^/]+\?.+$/, ''));
  }
};

function _extractDisplayData(req, entityType) {
  let title = entityType[0].toUpperCase() + entityType.slice(1);
  let entities = [];
  let entityId = req.params[entityType];
  let parentId = req.params[io.parent(entityType)];
  if (!entityId) {
    // Display all entities.
    entities = db.get(entityType);
  } else {
    // We got one, display single entity.
    entities = [db.get(entityType, entityId)];
  }

  // Get the current path, dropping trailing slashes
  let path =
    req.originalUrl.slice(-1) === '/'
      ? req.originalUrl.slice(0, -1)
      : req.originalUrl;
  console.log(path.split('/').slice(0, -2));
  console.log(path);
  return {
    title: title,
    entities: entities,
    path: path
  };
}

function _getPaths(req, entityType) {
  parentPath = '/';
  parentType = io.parent(entityType);
  entities.forEach(type => {});
}

module.exports = actions;
