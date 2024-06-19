const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    filter = {};
    if(req.query.destacado !=null && req.query.destacado != ""){
        filter.destacado = req.query.destacado
    }
    var productos = await Producto.find(filter);
    res.json(productos); // res.status(200).json(productos) => el status(200) codigos de respuesta con valores verdaderos en http
}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}


productoCtrl.getProducto = async (req, res) => {
    console.log(req.params.id);
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacione.'
        })
    }
    
}

// productoCtrl.getProductosDestacados = async (req, res) => {
//     console.log();
//     filter = {};
//     // if(req.query.destacado !=null && req.query.destacado != ""){
//     //     filter.destacado = req.query.destacado
//     // }
//     try {
//         let productosDestacados = await Producto.find();
//         res.status(200).json(productosDestacados);
//     } catch (error) {
//         res.status(400).json({
//             'status': '0',
//             'msg': 'Error procesando la operacionsss'
//         })
//     }
// }
productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = productoCtrl;
