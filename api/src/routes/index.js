var express = require('express');
var router = express.Router();
const Requests = require('./../requests/requests')

router.get('/', function(req, res){ 
    res.send('Hola mundooo!'); 
  });
  

router.get('/items', function(req, res) {
  const searchQuery = req.query.search;
  const error = function(errorMessage){
    res.status(500).json({ error: errorMessage });
  }
  if(searchQuery && searchQuery.trim().length > 0){
    Requests.getItemsEndpoint(searchQuery)
    .then(function(result){
      res.json(result);
    })
    .catch(function(errorResponse){
      error(errorResponse);
    });
  }else{
    error(`Error al tratar de encontrar items búsqueda "${searchQuery}".`);
  }
});


router.get('/items/:id', function(req, res) {
  const itemId = req.params.id;
  const error = function(errorMessage){
    res.status(500).json({ error: errorMessage });
  }
  if(itemId){
    Requests.getItemDetailEndpoint(itemId)
    .then(function(result){
      res.json(result);
    })
    .catch(function(errorResponse){
      error(errorResponse);
    });
  }else{
    error(`Item con id ${itemId} no encontrado.`);
  }
});


module.exports = router;