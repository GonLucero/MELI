
const express = require("express");
const server = express();
server.name = 'API';

server.use(function(req,res,next){ 
    console.log('estoy en: ',req.url)  
     next() 
})

server.use(express.json()) 


module.exports = { server };