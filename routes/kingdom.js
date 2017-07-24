const router = require('express').Router();
const actions = require('./actions');

router.all('/:Kingdom/:royal?', (req, res) => {
  parseRouteAction(req, res, 'Kingdom');
});

router.all('/:Kingdom/castles/:Castle', (req, res) => {
  parseRouteAction(req, res, 'Castle');
});

router.all('/:Kingdom/castles/:Castle/lieges/:Liege', (req, res) => {
  parseRouteAction(req, res, 'Liege');
});

router.all(
  '/:Kingdom/castles/:Castle/lieges/:Liege/vassals/:Vassal',
  (req, res) => {
    parseRouteAction(req, res, 'Vassal');
  }
);

router.use(
  '/:Kingdom/castles/:Castle/lieges/:Liege/vassals/:Vassal/kingdoms',
  router
);

// Interrogate req.method and invoke corresponding function
function parseRouteAction(req, res, entity) {
  const method = req.method.toLowerCase();
  // Gracefully handle unsupported methods
  if (!Object.keys(actions).includes(method)) {
    return res.status(405).send('Method not supported bruh!');
  }

  // Invoke it.
  actions[method](req, res, entity);
}

module.exports = router;
