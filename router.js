const express = require('express');
const router = express.Router();
const controller = require('./controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const lista = controller.listarTodosServicos();
  res.json(lista);
});

module.exports = router;
