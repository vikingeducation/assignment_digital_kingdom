const app = require('express')();

// Router
const router = require('./routes');

// Handlebars
const expressHandlebars = require('express-handlebars');

// Helpers
const url = require('url');
const helperLoader = new require('load-helpers')();
const helpers = require('./views/helpers');

// Create engine instance of handlebars
const exphbs = expressHandlebars.create({
	helpers: helpers,
	partialsDir: 'views/partials',
	defaultLayout: 'default'
});

// Body parser.
app.use(require('body-parser').urlencoded({ extended: false }));

// Delete transmogrifier.
app.use((req, res, next) => {
	if (req.query.delete) req.method = 'delete';
	next();
});

const PORT = process.env.PORT || process.argv[2] || 3000;
const HOST = 'localhost';

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Load routes.
// app.use('/', router);
app.use('/kingdoms', router);

// Add our routes.
app.all('/', (req, res) => {
	res.status(301).redirect('/kingdoms');
});

app.listen(PORT, HOST, () => {
	console.log(`Listening at http://${HOST}:${PORT}`);
});
