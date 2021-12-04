const controller = require('../controllers/especialidadeControllers.js');

server.get('/especialidade', controller.especialidadeMenu)

server.get('/especialidade/:id', controller.especialidadeGetById)

server.put('/especialidade/:id', controller.especialidadeEdit)

server.post('/especialidade', controller.especialidadeNew)


