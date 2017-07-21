const router = require('express').Router();
const db = require('../util/verbs');
const parentMap = require('../util/io/parent_map');

// Add our routes.
router.all('/:kingdomId?', (req, res) => {
	display(req, res, 'kingdoms');
});

router.all('/:kingdomId/king', (req, res) => {
	display(req, res, 'kings');
});

router.all('/:kingdomId/queen', (req, res) => {
	display(req, res, 'queens');
});

router.all('/:kingdomId/castles/:castleId?', (req, res) => {
	display(req, res, 'castles');
});

router.all('/:kingdomId/castles/:castleId/lieges/:liegeId?', (req, res) => {
	display(req, res, 'lieges');
});

router.all(
	'/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId?',
	(req, res) => {
		display(req, res, 'vassals');
	}
);
router.use(
	'/:kingdomId/castles/:castleId/lieges/:liegeId/vassals/:vassalId/kingdoms',
	router
);

function display(req, res, entityType) {
	let title = entityType[0].toUpperCase() + entityType.slice(1);
	let entities = [];
	let entityId = req.params[entityType.slice(0, -1) + 'Id'];
	let parentId = req.params[parentMap[entityType].slice(0, -1) + 'Id'];
	if (!entityId) {
		// Display all entities.
		entities = db.get(entityType, undefined, parentId);
	} else {
		// We got one, display single entity.
		entities = [db.get(entityType, entityId)];
	}

	// Render our page.
	res.render('index', {
		title: title,
		entities: entities
	});
}

module.exports = router;
