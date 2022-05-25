const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('ventas',{
        arrayVentas:[
            { idVenta: 1, cantidad: 3, idProducto: 15, identificacion: 1873498517345, fecha:'2022-01-01' },
            { idVenta: 2, cantidad: 1, idProducto: 17, identificacion: 8435743577137, fecha: '2022-01-01'}
        ]
    })
})

module.exports = router