const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
    idVenta: Number, 
    cantidad: Number, 
    idProducto: Number, 
    identificacion: Number, 
    fecha: Date
})

const Venta = mongoose.model('Venta', ventaSchema)

module.exports = Venta;