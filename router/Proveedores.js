const express = require('express')
const router = express.Router()

const Proveedor = require('../models/proveedor')

router.get('/', async(req, res) =>{

    try {
        const arrayProveedoresDB = await Proveedor.find()
        console.log(arrayProveedoresDB)

        res.render("proveedores", {
            arrayProveedores : arrayProveedoresDB
            /* [
                {idProveedor: 1, nombre: "proveedor_uno", telefono: 11111111, direccion: "direccion-proveedor1", ciudad: "ciudad-proveedor1"},
                {idProveedor: 2, nombre: "proveedor_dos", telefono: 222222222, direccion: "direccion-proveedor2", ciudad: "ciudad-proveedor2"}
            ] */
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;