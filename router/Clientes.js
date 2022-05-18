const express = require('express')
const router = express.Router()

const Cliente = require('../models/cliente')

router.get('/', async(req, res)  =>{

    try{
       const arrayClientesDB = await Cliente.find()
       console.log(arrayClientesDB)

        res.render('clientes',{
        arrayClientes: arrayClientesDB 
    })  
    }catch(error){
        console.log(error)
    }

    
})

router.get('/agregar-cliente', (req,res) =>{
    res.render('agregar-cliente')
})

router.post('/', async(req, res) =>{
    const body = req.body 
    
    try {
        const clienteDB = new Cliente(body)
        await clienteDB.save()

        res.redirect('/clientes')
    }catch (error){
        console.log(error)
    }
})

router.get('/:id', async(req,res) =>{

    const id = req.params.id

    try {

        const clienteDB = await Cliente.findOne({_id : id})
        console.log(clienteDB)

        res.render('detalle-cliente',{
            cliente : clienteDB,
            error: false
        })
        
    } catch (error) {
        res.render('detalle-cliente',{
            cliente : clienteDB,
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

/* router.delete('/:id', async(req, res) =>{
    const id = req.params.id

    try {
       const clienteDB = await Cliente.findByIdAndDelete({_id : id}) 

       if(clienteDB){
           res.json({
               estado: true, 
               mensaje: 'Eliminado'
           })
       }else{
          res.json({
              estado: false, 
              mensaje: 'Fallo al eliminar'
        })
       }
    } catch (error) {
        console.log(error)
    }
}) */

router.put('/:id', async(req,res)=>{
    const id = req.params.id
    const body = req.body

    try {
        const clienteDB = await Cliente.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(clienteDB)

        res.json({
            estado: true,
            mensaje: 'editado'
        })
    } catch (error) {
        res.json({
            estado: false,
            mensaje: 'Fallo al Editar'
        })
    }
})

module.exports = router