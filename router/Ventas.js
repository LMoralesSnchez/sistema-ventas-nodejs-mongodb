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

router.get('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const ventaDB = await Venta.findOne({_id: id})
        console.log(ventaDB)

        res.render('detalle-venta',{
            venta : ventaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle-venta',{
            error: false,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

/* router.delete('/:id', async(req, res) =>{
    const id = req.params.id

    try {
        const ventaDB = await Venta.findByIdAndDelete({_id: id})
        
        if(ventaDB){
            res.json({
                estado: true, 
                mensaje: "Eliminado"
            })
        }else{
            console.log(error)
            res.json({
                estado: false, 
                mensaje: "Fallo a eliminar"
            })
        }
    } catch (error) {
        console.log(error)
    }
}) */

module.exports = router