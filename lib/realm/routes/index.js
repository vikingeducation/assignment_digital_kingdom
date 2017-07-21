const router = require('express').Router();

// Add our routes.
router.get('/', require('./realm'));

module.exports = router;
