const app = require('express')();

// Router
const router = require('./routes');

// Handlebars
const expressHandlebars = require('express-handlebars');

// Helpers
const helperLoader = new require('load-helpers')();
const helpers = require('./views/helpers');

// Create engine instance of handlebars
const exphbs = expressHandlebars.create({
	helpers: helpers,
	partialsDir: 'views/partials',
	defaultLayout: 'default'
});

const PORT = process.env.PORT || process.argv[2] || 3000;
const HOST = 'localhost';

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Load routes.
// app.use('/', router);
app.use('/kingdoms', router);

app.listen(PORT, HOST, () => {
	console.log(`Listening at http://${HOST}:${PORT}`);
});
