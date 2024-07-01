const data = require('../data/zoo_data');
const { species } = data

const ne = species.filter((element) => element.location === 'NE')
const nw = species.filter((element) => element.location === 'NW')
const se = species.filter((element) => element.location === 'SE')
const sw = species.filter((element) => element.location === 'SW')

function getAnimalMap(options = {}) {
  const animalMap = species.reduce((acc, { name, location, residents }) => {
    if (!acc[location]) acc[location] = [];

    let animalResidents = residents;

    if (options.sex) {
      animalResidents = animalResidents.filter((resident) => resident.sex === options.sex);
    }

    if (options.includeNames) {
      let names = animalResidents.map((resident) => resident.name);

      if (options.sorted) {
        names = names.sort();
      }

      acc[location].push({ [name]: names });
    } else {
      acc[location].push(name);
    }

    return acc;
  }, {});

  return animalMap;
};

console.log(getAnimalMap({includeNames: true}))
// console.log(ne);

module.exports = getAnimalMap;
