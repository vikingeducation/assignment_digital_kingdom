const router = require('express').Router();

// Add our routes.
router.get('/:kingdomId?', require('./realm'));
router.get('/:kingdomId/king', require('./king'));
router.get('/:kingdomId/queen', require('./queen'));
router.get('/:kingdomId/castles/:castleId?', require('./castles'));
router.get(
  '/:kingdomId/castles/:castleId/lieges/:liegeId?',
  require('./lieges')
);
router.get(
  '/:kingdomId/castles/:castleId/vassals/:vassalId?',
  require('./vassals')
);
router.use('/:kingdomId/castles/:castleId/vassals/:vassalId/kingdoms', router);

module.exports = router;
