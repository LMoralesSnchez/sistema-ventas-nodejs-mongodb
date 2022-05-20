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

router.get('/agregar-proveedor', (req,res) =>{
   res.render('agregar-proveedor') 
})

router.post('/', async(req, res) =>{
    const body = req.body
    try {
        const proveedorDB = new Proveedor(body)
        await proveedorDB.save()
        console.log(proveedorDB)

        res.redirect('/proveedores')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) =>{

    const id = req.params.id

    try {

        const proveedorDB = await Proveedor.findOne({_id: id})
        console.log(proveedorDB)

        res.render('detalle-proveedor',{
            proveedor: proveedorDB,
            error: false
        })

    } catch (error) {
        res.render('/detalle-proveedor',{
            proveedor: proveedorDB,
            error: false, 
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async(req, res)=>{
    const id = req.params.id

    try {
        const proveedorDB = await Proveedor.findByIdAndDelete({_id: id})

        if(proveedorDB){
            res.json({
                estado: true, 
                mensaje: 'Eliminado'
            })
        } else {
            res.json({
                estado: false, 
                mensaje: 'fallo al eliminar'
            })
        }
    } catch (error) {
        console.log(error)    
    }
} )

router.put('/:id', async(req,res)=>{
    const id = req.params.id
    const body = req.body

    try {
        
        const proveedorDB = await Proveedor.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(proveedorDB)

        res.json({
            estado: true, 
            mensaje: 'Editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: true, 
            mensaje: 'Editado'
        })
    }
})

module.exports = router;