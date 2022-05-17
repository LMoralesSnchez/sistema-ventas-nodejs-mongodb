const express = require('express');
const router = express.Router();

const Producto = require('../models/producto')

router.get('/', async(req, res) =>{

    try {
        const arrayProductosDB = await Producto.find()
        console.log(arrayProductosDB)

        res.render("productos", {
            arrayProductos: arrayProductosDB
            /*arrayProductos: [
               {id: 1, nombre: "Coca-Cola", descripcion: "Coca-Cola 2L", precio: 3500},
               {id: 2, nombre: "Doritos", descripcion:"Doritos pequeño", precio: 1800 },
               {id: 3, nombre: "Salchicha", descripcion: "Salchicha Ranchera", precio: 4000},
               {id: 4, nombre: "Pan", descripcion: "Pan Sanchopan", precio: 500},
               {id: 5, nombre: "Queso", descripcion: "Queso Costeño", precio: 7000}, 
               {id: 6, nombre: "Leche", descripcion: "Leche 1L", precio: 4500},
               {id: 7, nombre: "Atun", descripcion: "Atun Van Camps", precio: 3800},
               {id: 8, nombre: "Sandia", descripcion: "Sandia", precio: 12000},
               {id: 9, nombre: "Papaya", descripcion: "Papaya", precio: 5000},
               {id: 10, nombre: "Red-Bull", descripcion: "Red-Bull 500ml", precio: 7000} 
           ]*/
       })
    } catch (error) {
        console.log(error)
        
    }
    
})

router.get('/crear', (req, res) =>{
    res.render('crear') 
})

router.post('/', async(req, res)=>{
    const body = req.body
    try {
        const productoDB = new Producto(body)
        await productoDB.save()

        res.redirect('/productos')

        console.log('Producto Agregado: ', productoDB)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res)=>{

    const id = req.params.id

    try {
        const productoDB = await Producto.findOne({_id: id})

        console.log(productoDB)
        res.render('detalle', {
            producto: productoDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true, 
            mensaje: 'no se encuentra el id seleccionado'
        })
   }
})

router.delete('/:id', async(req, res) =>{
    const id = req.params.id

    try {
        const productoDB = await Producto.findByIdAndDelete({_id: id})
        
        if(productoDB){
            res.json({
                estado: true,
                mensaje: 'eliminado'
            })
        } else{
            res.json({
                estado: false,
                mensaje: 'fallo al eliminar'
            })
        }
    } catch (error) {
        
    }
})

router.put('/:id', async(req, res) =>{
    const id = req.params.id
    const body = req.body 

    try {
        const productoDB = await Producto.findByIdAndUpdate(id, body, { useFindAndModify: false})
        console.log(productoDB)

        res.json({
            estado: true, 
            mensaje: 'Editado'
        })
    } catch (error) {
        console.log(error)

        res.json({
            estado: false, 
            mensaje: 'Fallo al editar'
        })
    }
})

module.exports = router; 

