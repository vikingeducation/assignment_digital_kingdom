const router = require('express').Router();
const actions = require('./actions');
const db = require('../util/verbs');

// View the realm.
router.get('/', (req, res) => {
  const options = {
    title: 'The Realm',
    entities: db.get('Kingdom'),
    gcType: 'Liege'
  };
  return res.render('realm', options);
});

router.post('/', (req, res) => {
  actions.post(req, res, 'Vassal');
});

module.exports = router;
