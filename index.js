const PORT = process.env.PORT || process.argv[2] || 3000;
const HOST = 'localhost';

const db = require('../util/verbs');

const app = require('express')();

// Router
const router = require('./routes');

// Handlebars
const expressHandlebars = require('express-handlebars');

// Build engine instance
const exphbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: 'views/partials',
  defaultLayout: 'default'
});

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Body parser to get post data
app.use(require('body-parser').urlencoded({ extended: false }));

// Delete transmogrifier.
app.use((req, res, next) => {
  if (req.query.delete) req.method = 'delete';
  next();
});

// Load routes.
// app.use('/', router);
app.use('/kingdoms', router);

// View the realm.
app.get('/', (req, res) => {
  const options = {
    title: 'The Realm',
    entities: db.get('kingdom'),
    paths: null // build_path function/module?
  };
  return res.render('realm', options);
});

app.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
