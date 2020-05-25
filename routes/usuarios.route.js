// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usaurioController = require('../controllers/usuario.controller');

// Crear un usuario
// api/usuarios
router.post('/', usaurioController.crearUsuario);

module.exports = router;
