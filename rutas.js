
const router = require('express').Router()

router.get('/hola', respuesta);
router.get('/saludo-formal', function(request, response) {
    
    response.send("Bienvenido usuario invitado.");
    
});

function respuesta(request, response) {
    
	response.send("Hola");

}

module.exports = router
