'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true}).then(()=>{
    console.log('La conexion a la base de datos se ha realizado Correctamente!!');

    //Crear servidor y ponerme a escuchar peticiones http
    app.listen(port, ()=>{
        console.log('El servidor corriendo en http://localhost: '+ port);
    }) 
});