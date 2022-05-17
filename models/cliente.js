const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema({
    identificacion: Number,
    nombre: String, 
    telefono: Number, 
    direccion: String, 
    ciudad: String
})

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente