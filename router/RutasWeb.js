const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {titulo: "En este sistema puedes ver el listado de tus productos"})
})

router.get('/servicios', (req, res)=>{
    res.render("servicios", {tituloServicios: "Esta es la pagina de servicios"})
})

module.exports = router;
