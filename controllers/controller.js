const PetModel = require("../models/model");

const PetController = {
  listar: (req, res) => {
    const pets = PetModel.findAll();
    res.json(pets);
  },
  addPet: (req, res) => {
    const pet = req.body;

    PetModel.create(pet);

    res.status(201).json(pet);
  }
};

module.exports = PetController;
