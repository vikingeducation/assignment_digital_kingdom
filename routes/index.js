const router = require('express').Router();
const db = require('../util/verbs');

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

function display(req, res, entity) {
	let title;
	var kingdoms = [];
	if (!req.params.kingdomId) {
		// Display all kingdoms for realms.
		title = entity[0].toUpperCase() + entity.slice(1);
		kingdoms = db.get(entity);
	} else {
		// We got one, display single kindom.
		title = entity[0].toUpperCase() + entity.slice(1);
		kingdoms = [db.get(entity, req.params.id)];
	}

	// Render our page.
	res.render('index', {
		title: title,
		entities: kingdoms
	});
}

module.exports = router;
