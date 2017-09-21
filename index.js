const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const jsonModule = require("./services/kingdom-store");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	var json = jsonModule.readJson();
	var kingdoms = jsonModule.getKingdoms();
	res.send(kingdoms);
});

const hbs = expressHandlebars.create({
	defaultLayout: "main"
});

//server
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
	console.log(`listening on ${host}/${port}`);
});
