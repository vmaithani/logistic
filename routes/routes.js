const routes = require('express').Router();
const controller = require('../controller/controller');

routes.post('/logistics' , controller.addItem);
routes.get('/logistics/:id' , controller.getItem);
routes.patch('/logistics/:id' , controller.updateItem);
routes.delete('/logistics/:id' , controller.deleteItem);


module.exports = routes;