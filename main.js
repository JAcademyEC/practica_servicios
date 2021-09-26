
const express = require('express');

const db = require("./db/db");
const rutas = require("./rutas");
const rutasPaginas = require("./rutasHtml");

const app = express();

app.set("view engine", 'ejs');

app.use("", rutasPaginas);
app.use("/mensajes", rutas);

db.sequelize.sync();

app.listen(80, function () {
	console.log("El servidor se ha iniciado");
});
