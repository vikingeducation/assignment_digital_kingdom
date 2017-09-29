const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const morganToolkit = require('morgan-toolkit')(logger);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const helpers = require('./helpers');

const kingdoms = require('./routers/kingdoms');
const castles = require('./routers/castles');
const leiges = require('./routers/leiges');
const vassals = require('./routers/vassals');

const app = express();

// view engine setup
const hbs = exphbs.create({
  helpers: helpers,
  partialsDir: 'views/',
  defaultLayout: 'main_layout.hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(morganToolkit());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/kingdoms');
});

// Handle DELETE method overiding for helpers
app.use((req, res, next) => {
  if (req.query._method == 'delete') {
    req.method = 'DELETE';
    req.url = req.path;
  }
  next();
});

app.use('/kingdoms', kingdoms);
app.use('/castles', castles);
app.use('/leiges', leiges);
app.use('/vassals', vassals);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
