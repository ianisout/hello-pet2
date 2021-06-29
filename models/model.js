const pets = require("../database/pets.json");

//console.log(pets);

const PetModel = {
  findAll: () => pets,

  create: (pet) => {
    pets.push(pet);
  }
};

module.exports = PetModel;
