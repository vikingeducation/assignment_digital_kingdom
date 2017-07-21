const express = require("express");
const kingdoms = require("./routes/kingdoms");
const routeIndex = require("./routes/index");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use("/", routeIndex);
app.use("/kingdoms", kingdoms);

app.listen(3000, () => {
	console.log("Listening...");
})