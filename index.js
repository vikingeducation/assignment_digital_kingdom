const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const jsonModule = require("./services/kingdom-store");
const kingdoms = require("./routes/kingdoms.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({
	defaultLayout: "main"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", kingdoms);

app.use(express.static(__dirname + "/public"));

//server
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
	console.log(`listening on ${host}/${port}`);
});
