//defino controlador para el manejo de CRUD
const divisaCtrl = require('./../controllers/divisa.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de divisa
router.get('/', divisaCtrl.getDivisas);                 //Recuperar todos los divisas
router.post('/', divisaCtrl.createDivisa);              //Dar de alta un Divisa (POST)
router.get('/:id', divisaCtrl.getDivisa);    //Recuperar los divisas DESTACADOS(GET)-------------
router.put('/:id', divisaCtrl.editDivisa);              //Modificar un divisa (PUT)
router.delete('/:id', divisaCtrl.deleteDivisa);         //Eliminar un divisa (DELETE)

//exportamos el modulo de rutas
module.exports = router;