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

router.get('/agregar-venta', (req,res)=>{
    res.render('agregar-venta')
})

router.post('/', async(req, res) =>{
    const body = req.body
    console.log(body)
    try {
        const ventaDB = new Venta(body)
        await ventaDB.save()
        console.log(ventaDB)

        res.redirect('/ventas')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router