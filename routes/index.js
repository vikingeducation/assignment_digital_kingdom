const router = require('express').Router();
const db = require('../util/verbs');
const parentMap = require('../util/io/parent_map');

router.all('/:kingdomId?', (req, res) => {
  parseRouteAction(req, res, 'kingdoms');
});

router.all('/:kingdomId/castles/:castleId', (req, res) => {
  parseRouteAction(req, res, 'castles');
});

router.all('/:kingdomId/castles/:castleId/lieges/:liegeId', (req, res) => {
  parseRouteAction(req, res, 'lieges');
});

router.all(
  '/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId',
  (req, res) => {
    parseRouteAction(req, res, 'vassals');
  }
);

router.use(
  '/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId/kingdoms',
  router
);

function parseRouteAction(req, res, entity) {
  // Interrogate req.method and invoke correspond function
  let middleMan = {
    get: display,
    post: insert,
    delete: remove
  };

  // Only support middle man methods.
  if (!Object.keys(middleMan).includes(req.method.toLowerCase())) {
    return res.status(405).send('Method not supported bruh!');
  }

  // Invoke it.
  middleMan[req.method.toLowerCase()](req, res, entity);
}

function display(req, res, entityType) {
  // Render our page.
  return res.render('index', _extractDisplayData(req, entityType));
}

function _extractDisplayData(req, entityType) {
  let title = entityType[0].toUpperCase() + entityType.slice(1);
  let entities = [];
  let entityId = req.params[entityType.slice(0, -1) + 'Id'];
  let parentId = req.params[parentMap[entityType].slice(0, -1) + 'Id'];
  if (!entityId) {
    // Display all entities.
    entities = db.get(entityType);
  } else {
    // We got oHowever, GET, POST, PUT and DELETE are supported by the implementations of XMLHttpRequest (i.e. AJAX calls) in all the major web browsers (IE, Firefox, Safari, Chrome, Opera).ne, display single entity.
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

function insert(req, res, entityType) {
  // Insert entity into db.
  db.put(entityType, req.body.name);

  // Render our page.
  display(req, res, entityType);
}

function remove(req, res, entityType) {
  // Remove entity from db.
  let parentType = db.del(
    entityType,
    req.params[entityType.slice(0, -1) + 'Id']
  );
  if (parentType === 'vassals') {
    return res.status(302).redirect('/kingdoms');
  }

  return res.redirect(req.originalUrl.replace(/\/?[^/]+\/[^/]+\?.+$/, ''));
}

module.exports = router;
