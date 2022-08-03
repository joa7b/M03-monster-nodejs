const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');

route.get('/todos-personagens', controllerPersonagens.findAllPersonagensController);
route.get('/todos-personagens/:id', controllerPersonagens.findByIdPersonagensController);
route.post('/create', controllerPersonagens.createPersonagensController);
route.put('/update/:id', controllerPersonagens.updatePersonagensController);
route.delete('/delete/:id', controllerPersonagens.deletePersonagensController);

module.exports = route;
