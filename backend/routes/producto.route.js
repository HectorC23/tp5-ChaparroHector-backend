//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.get('/', productoCtrl.getProductos);                 //Recuperar todos los productos
router.post('/', productoCtrl.createProducto);              //Dar de alta un Producto (POST)
router.get('/:id', productoCtrl.getProducto);    //Recuperar los productos DESTACADOS(GET)-------------
router.put('/:id', productoCtrl.editProducto);              //Modificar un producto (PUT)
router.delete('/:id', productoCtrl.deleteProducto);         //Eliminar un producto (DELETE)

//exportamos el modulo de rutas
module.exports = router;