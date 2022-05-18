const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema({
    idProveedor: Number, 
    nombre: String, 
    telefono: Number,
    direccion: String, 
    ciudad: String 
})

const Proveedor = mongoose.model('Proveedor', proveedorSchema)

module.exports = Proveedor