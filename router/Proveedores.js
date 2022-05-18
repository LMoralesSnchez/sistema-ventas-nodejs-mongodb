const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render("proveedores", {
        arrayProveedores: [
            {idProveedor: 1, nombre: "proveedor_uno", telefono: 11111111, direccion: "direccion-proveedor1", ciudad: "ciudad-proveedor1"},
            {idProveedor: 2, nombre: "proveedor_dos", telefono: 222222222, direccion: "direccion-proveedor2", ciudad: "ciudad-proveedor2"}
        ]
    })
})

module.exports = router;