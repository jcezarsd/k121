var express = require('express');
var router = express.Router();

var pessoaController = require('../controllers/pessoa');

router.post('/', pessoaController.create);

router.get('/:id', pessoaController.getInfo);

router.get('/', pessoaController.getAll);

router.put('/:id', pessoaController.update);

router.delete('/:id', pessoaController.delete);

module.exports = router;
