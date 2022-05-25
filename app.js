const express = require('express');
const bodyParser = require('body-parser')
const app = express(); 

require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

const user = 'testuser';
const password = 'testuser';
const dbname = 'tienda';
const uri = `mongodb+srv://${user}:${password}@cluster0.3d7ld.mongodb.net/${dbname}?retryWrites=true&w=majority`; 

mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//Motor de plantillas
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');

app.use(express.static (__dirname + "/public"))

//Rutas Web
app.use('/', require('./router/RutasWeb'))
app.use('/productos', require('./router/Productos'))
app.use('/clientes', require('./router/Clientes'))
app.use('/proveedores', require('./router/Proveedores'))
app.use('/ventas', require('./router/Ventas'))

app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Pagina no encontrada"
    })
})

app.listen(port, () =>{
    console.log('servidor a su servicio en el puerto', port)
})
