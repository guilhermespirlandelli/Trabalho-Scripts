const controller = require('../controllers/hospitalControllers.js');

server.get('/hospital', controller.hospitalMenu)

server.get('/hospital/:id', controller.hospitalGetById)

server.put('/hospital/:id', controller.hospitalEdit)

server.post('/hospital', controller.hospitalNew)


