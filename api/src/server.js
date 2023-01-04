
const express = require("express");
const server = express();
server.name = 'API';

server.use(function(req,res,next){ // acá puede tener una ruta especifica, o puede ser para todas
    console.log('estoy en: ',req.url) // USO ESTO, EN VEZ DE PONER UN CONSOLE.LOG EN CADA RUTA   
     next() // PARA PODER RUTEAR EL MIDDLEWARE
})

server.use(express.json()) // no hace falta poner .next, porque lo hace internamente


module.exports = { server };