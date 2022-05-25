const express = require('express')
const router = express.Router()

const Venta = require('../models/venta')

router.get('/', async(req, res) =>{
    try {
        
        const arrayVentasDB = await Venta.find()
        console.log(arrayVentasDB)

        res.render('ventas',{
            arrayVentas : arrayVentasDB
           /*  arrayVentas:[
                { idVenta: 1, cantidad: 3, idProducto: 15, identificacion: 1873498517345, fecha:'2022-01-01' },
                { idVenta: 2, cantidad: 1, idProducto: 17, identificacion: 8435743577137, fecha: '2022-01-01'}
            ]*/
        }) 
    } catch (error) {
        console.log(error)
    }
})

module.exports = router