const PORT = process.env.PORT || process.argv[2] || 3000;
const HOST = 'localhost';

const app = require('express')();

// Handlebars
const expressHandlebars = require('express-handlebars');

// Build engine instance
const exphbs = expressHandlebars.create({
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

// Routers
app.use('/', require('./routes/realm'));
app.use('/kingdoms', require('./routes/kingdom'));

app.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});

// Reset JSON
require('./util/io').reset();
