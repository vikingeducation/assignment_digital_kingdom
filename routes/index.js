const router = require('express').Router();

// Add our routes.
router.all('/:kingdomId?', require('./realm'));
router.all('/:kingdomId/king', require('./king'));
router.all('/:kingdomId/queen', require('./queen'));
router.all('/:kingdomId/castles/:castleId?', require('./castle'));
router.all(
	'/:kingdomId/castles/:castleId/lieges/:liegeId?',
	require('./liege')
);
router.all(
	'/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId?',
	require('./vassal')
);
router.use(
	'/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId/kingdoms',
	router
);

module.exports = router;
