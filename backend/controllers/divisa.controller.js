const Divisa = require('../models/divisa');
const divisaCtrl = {}

divisaCtrl.getDivisas = async (req, res) => {
    filter = {};
    filter2 = {};
    if(req.query.emailCliente !=null && req.query.emailCliente != ""){
        filter.emailCliente = req.query.emailCliente
    }
    if((req.query.monedaOrigen !=null && req.query.monedaOrigen != "")){

        // if ((req.query.monedaDestino !=null && req.query.monedaDestino != "")) {
        // }
        
        filter2.monedaDestino = req.query.monedaOrigen
        filter.monedaOrigen = req.query.monedaOrigen
    }
    if((req.query.monedaDestino !=null && req.query.monedaDestino != "")){

        // if ((req.query.monedaDestino !=null && req.query.monedaDestino != "")) {
        // }
        
        filter2.monedaDestino = req.query.monedaDestino
        filter.monedaOrigen = req.query.monedaDestino
    }

    let divisas = {}
    divisas.monedaOrigen = (await Divisa.find(filter)) //await Divisa.find(filter2);
    divisas.monedaDestino = (await Divisa.find(filter2))
    res.json(divisas); // res.status(200).json(divisas) => el status(200) codigos de respuesta con valores verdaderos en http
}

divisaCtrl.createDivisa = async (req, res) => {
    var divisa = new Divisa(req.body);
    try {
        await divisa.save();
        res.json({
            'status': '1',
            'msg': 'Divisa guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}


divisaCtrl.getDivisa = async (req, res) => {
    console.log(req.params.id);
    try {
        const divisa = await Divisa.findById(req.params.id);
        res.json(divisa);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacione.'
        })
    }
    
}
divisaCtrl.editDivisa = async (req, res) => {
    const vdivisa = new Divisa(req.body);
    try {
        await Divisa.updateOne({ _id: req.body._id }, vdivisa);
        res.json({
            'status': '1',
            'msg': 'Divisa updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
divisaCtrl.deleteDivisa = async (req, res) => {
    try {
        await Divisa.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Divisa removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = divisaCtrl;