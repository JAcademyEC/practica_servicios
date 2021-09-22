
const routerPaginas = require("express").Router()

routerPaginas.get("/home", function(request, response) {

    datos = {
        "listaUsuarios": [
            {
                "nombre": "Pepe",
                "edad": 21,
                "ci": "12020222323"
            },
            {
                "nombre": "Juana",
                "edad": 19,
                "ci": "12020222223"
            },
            {
                "nombre": "Mendoza",
                "edad": 22,
                "ci": "12220222323"
            },
            {
                "nombre": "Joel",
                "edad": 24,
                "ci": "120330222323"
            }        
        ]

    }

    response.render('index', datos);

});

module.exports = routerPaginas;
