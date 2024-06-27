const data = require('../data/zoo_data');
const { species } = data

function getAnimalsOlderThan(animal, age) {
  const findSpecie = species.find((animals) => animals.name === animal);
  const verifyAge = findSpecie.residents.every((resident) => resident.age >= age);
  return verifyAge
  
}

console.log(getAnimalsOlderThan('lions', 5));

module.exports = getAnimalsOlderThan;
