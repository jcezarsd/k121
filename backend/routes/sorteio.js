var express = require('express');
var router = express.Router();

var sorteioController = require('../controllers/sorteio');

router.get('/', sorteioController.sortear);

module.exports = router;
