const db = require('../util/verbs');
const io = require('../util/io');

const actions = {
  get: function(req, res, entityType) {
    // Render our page.
    let entityId = req.params[entityType];
    let entity = db.get(entityType, entityId);
    if (!entityId || entity === []) _redirect(res);

    return res.render('kingdom', { entity: entity });
  },
  post: function(req, res, entityType) {
    // Insert entity into db.
    let newEntity = db.put(entityType, req.body.name);

    return _redirect(
      res,
      newEntity.parentPath,
      newEntity.path && newEntity.parentPath
    );
  },
  delete: function(req, res, entityType) {
    // Remove entity from db.
    let parentPath = db.get(entityType, req.params[entityType]).parentPath;
    let success = db.del(entityType, req.params[entityType]);

    return _redirect(res, parentPath, sucess);
  }
};

// Redirect to a given path, or the Realm
function _redirect(res, path, pathCondition) {
  res.statusCode = 303;
  if (path && pathCondition) return res.redirect(path);
  return res.redirect('/');
}

module.exports = actions;
