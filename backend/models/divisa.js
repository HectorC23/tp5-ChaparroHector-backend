const mongoose = require('mongoose');
const { Schema } = mongoose;
const DivisaSchema = new Schema({
    monedaOrigen: { type: String, required: true },
    cantidadOrigen: { type: Number, required: true },
    monedaDestino: { type: String, required: true },
    cantidadDestino: { type: Number, required: true },
    emailCliente: { type: String, required: true },
    tasaConversion: { type: Number, required: true },
})

module.exports = mongoose.models.Divisa || mongoose.model('Divisa', DivisaSchema);
