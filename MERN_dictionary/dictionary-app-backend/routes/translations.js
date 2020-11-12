/*
    Events Routes
    /api/translations
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getTranslations, crearTranslations, eliminarTranslations } = require('../controllers/translations');

const router = Router();

// Todas tienen que pasar por la validación del JWT. Haciendo esta llamada aplicamos este middleware en todos los eventos de aqui.
router.use( validarJWT );

// Obtener translations
router.get( '/', getTranslations );

// Crear un nuevo evento
router.post( 
    '/',
    [
        check('wordEsp','La traducción en ESP es obligatoria').not().isEmpty(),
        check('wordIta','La traducción en ITA es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearTranslations 
);

// Borrar evento
router.delete( '/:id', eliminarTranslations );

module.exports = router;