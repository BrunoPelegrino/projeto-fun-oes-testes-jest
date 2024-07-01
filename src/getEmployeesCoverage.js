const data = require('../data/zoo_data');
const { employees, species } = data


const getSpeciesAndLocations = (employeeInfo) => {
  
  const speciesNames = employeeInfo.responsibleFor.map((specieId) => {
    const specie = species.find((specie) => specie.id === specieId);
    return specie.name;
  });
  const locations = employeeInfo.responsibleFor.map((specieId) => {
    const specie = species.find((specie) => specie.id === specieId);
    return specie.location;
  });
  return {
    id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: speciesNames,
    locations: locations,
  }
}

function getEmployeesCoverage(obj) {

  if (!obj) {
    return employees.map((employee) => getSpeciesAndLocations(employee))
  }
  const findById = employees.find((employeeId) => employeeId.id === obj.id);
  const findByName = employees.find((employee) => employee.firstName === obj.name || employee.lastName === obj.name);
  if (obj.id && !findById) {
    throw new Error('Informações inválidas');
  }
  if (obj.name && !findByName) {
    throw new Error('Informações inválidas');
  }
   if(obj.id) {
    return getSpeciesAndLocations(findById)
   }
   if(obj.name) {
    return getSpeciesAndLocations(findByName)
   }
}
// console.log(getEmployeesCoverage('invalida'))
// console.log(getEmployeesCoverage({ id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8' }))
module.exports = getEmployeesCoverage;
