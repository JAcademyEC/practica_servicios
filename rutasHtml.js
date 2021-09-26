
const routerPaginas = require("express").Router()

const Usuario = require("./db/db").usuario;

routerPaginas.get("/home", function(request, response) {

    Usuario.findAll({})
    .then( (usuarios) => {
        
        response.render('index', {
            "listaUsuarios": usuarios
        });
    
    }).catch( (err) => response.status(500).json(err));

});

routerPaginas.get("/usuario", function(req, res) {

    Usuario.findAll({})
    .then( (usuarios) => res.json(usuarios))
    .catch( (err) => res.status(500).json(err) );

});

routerPaginas.post("/usuario", function( request, response) {

    Usuario.create({
        nombre: request.query.nombre,
        edad: request.query.edad,
        ci: request.query.ci,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then( (nuevoUsuario) => {

        response.status(201).json(nuevoUsuario);

    }).catch( (err) => response.status(500).json(err) );

});

module.exports = routerPaginas;
