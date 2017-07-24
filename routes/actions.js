const db = require('../util/verbs');
const io = require('../util/io');

const actions = {
  get: function(req, res, entityType) {
    // Render our page.
    let entityId = req.params[entityType];
    let entity = db.get(entityType, entityId);
    if (isNaN(+entityId) || !entity) return _redirect(res);
    let childType = io.child(entityType);
    let gcType = io.child(childType);

    return res.render('kingdom', {
      entity: entity,
      title: `${entity.type} ${entity.name}`,
      childType: childType,
      gcType: gcType
    });
  },
  post: function(req, res, entityType) {
    if (req.params.royal) {
      // Adding a royal
      let entityId = req.params[entityType];
      let entity = db.get(entityType, entityId, true);
      entity.royals[req.params.royal] = req.body.name;
      db.put(entity);
      return _redirect(res, entity.path, true);
    } else {
      // Inserting a new entity into db.
      let newEntity = db.post(
        io.child(entityType),
        req.body.name,
        req.params[entityType]
      );
      return _redirect(
        res,
        newEntity.parentPath,
        newEntity.path && newEntity.parentPath
      );
    }
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
  if (path && pathCondition) return res.redirect(path);
  return res.redirect(303, '/');
}

module.exports = actions;
