const data = require('../data/zoo_data');
const { employees, species } = data

function getOldestFromFirstSpecies(id) {
  const findPerson = employees.find((findById) => findById.id === id);
  const responsibleFor = findPerson.responsibleFor[0];
  const findSpecieById = species.find((specie) => specie.id === responsibleFor).residents;

  
  const teste = findSpecieById.reduce((acc, oldest) =>  acc.age > oldest.age ?  acc : oldest, 0)
  

  return [teste.name, teste.sex, teste.age]
}

module.exports = getOldestFromFirstSpecies;
