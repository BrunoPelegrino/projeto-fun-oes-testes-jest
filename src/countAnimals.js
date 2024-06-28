const data = require('../data/zoo_data');
const { species } = data

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      
      acc[specie.name] = specie.residents.length
      return acc
      /* let acc = {};
const specie = { name: "lions", residents: ["Simba", "Nala", "Mufasa"] };
acc[specie.name] = specie.residents.length;

console.log(acc); */
    }, {})
  }
  const { specie , sex } = animal;
  const findSpecie = species.find((target) => target.name === specie)
  
  if (sex) {
    
    const filterSex = findSpecie.residents.filter(resident => resident.sex === sex);

    return filterSex.length
    
  }
  return findSpecie.residents.length

  // const x = species.find((target) => target.name === specie)
  // return x.residents.length
}

console.log(countAnimals({ specie: 'penguins'}));

module.exports = countAnimals;
