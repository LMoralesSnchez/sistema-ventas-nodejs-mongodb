const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    idProducto: Number,
    nombre: String, 
    descripcion: String,
    precio: Number
})

//Crear modelo 
const Producto = mongoose.model("Producto", productoSchema)

module.exports = Producto;