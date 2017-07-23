const router = require('express').Router();
const actions = require('./actions');

router.all('/:kingdom', (req, res) => {
  parseRouteAction(req, res, 'kingdom');
});

router.all('/:kingdom/castles/:castle', (req, res) => {
  parseRouteAction(req, res, 'castle');
});

router.all('/:kingdom/castles/:castle/lieges/:liege', (req, res) => {
  parseRouteAction(req, res, 'liege');
});

router.all(
  '/:kingdom/castles/:castle/lieges/:liege/vassals/:vassal',
  (req, res) => {
    parseRouteAction(req, res, 'vassal');
  }
);

router.use(
  '/:kingdom/castles/:castle/lieges/:liege/vassals/:vassal/kingdoms',
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
