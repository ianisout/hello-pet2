const express = require('express');
const router = express.Router();
const PetController = require('../controllers/controller');

router.get("/listarPets", PetController.listar);

router.post("/adicionarPet", PetController.addPet);

module.exports = router;
