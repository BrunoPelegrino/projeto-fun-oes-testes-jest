const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } if (ids.length === 1) {
    const filterId = data.species.filter((specie) => specie.id === ids[0]);
    return filterId;
  } if (ids.length > 1) {
    const filterId = data.species.filter(
      (specie) => specie.id === ids.find((id) => id === specie.id)
    );
    return filterId;
  }
}
console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    'e8481c1d-42ea-4610-8e11-1752cfc05a46'
  )
);

module.exports = getSpeciesByIds;
