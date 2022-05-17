const express = require('express')
const router = express.Router()

router.get('/', (req, res)  =>{
    res.render('clientes',{
        arrayClientes: [
            {identificacion: 11111111, nombre: "Rosa Melano", telefono: 22222222, direccion: "Av. La Puteria", ciudad: "Chupundu"}, 
            {identificacion: 22222222, nombre: "Aitor Tilla", telefono: 33333333, direccion: "Av. La Droga", ciudad: "Tangandapio"}
    ]
    })
})

module.exports = router