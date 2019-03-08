const EXPRESS = require('express');
const EXPHBS = require('express-handlebars');
const APP = EXPRESS();
const ROUTER = EXPRESS.Router();

const KINGDOM_INDEX_ROUTER = require('./routes/kingdomIndex');
const KINGDOM_SHOW_ROUTER = require('./routes/kingdomShow');

const BODYPARSER = require('body-parser');

APP.engine('handlebars', EXPHBS({defaultLayout: 'main'}));
APP.set('view engine', 'handlebars');

APP.use( EXPRESS.static(__dirname + "/public") );
APP.use( BODYPARSER.urlencoded({extended: true}) );


APP.use('/', KINGDOM_INDEX_ROUTER);
APP.use('/kingdoms', KINGDOM_SHOW_ROUTER);


APP.listen(3000, () => {
  console.log(`Listening at localhost:3000`);
});
