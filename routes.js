const express = require('express');
const routes = express.Router();

const APIs = require('./controllers')

routes.post('/POST/v1/tasks' , APIs.postTasks)
routes.get('/GET/v1/tasks' , APIs.getTasks)
routes.get('/GET/v1/tasks/:id' , APIs.getOne)
routes.delete('/DELETE/v1/tasks/:id' , APIs.deleteTask)
routes.put('/PUT/v1/tasks/:id' , APIs.editTask)
routes.delete('/DELETE/v1/tasks' , APIs.deleteMany)


module.exports = routes