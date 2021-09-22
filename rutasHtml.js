
const routerPaginas = require("express").Router()

routerPaginas.get("/home", function(request, response) {

    datos = {
        "mensaje": "Este es un mensaje desde el servidor!",
        "mensaje2": "Este es un mensaje de respaldo"
    }

    response.render('index', datos);

});

module.exports = routerPaginas;
