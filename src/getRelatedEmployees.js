const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  
  const verifyId =  employees.find(
    (employee) =>
      employee.id === id
  );
  if(verifyId.id === stephanieId || verifyId.id === olaId || verifyId.id === burlId) {
    return true
  }
  else return false
}


function getRelatedEmployees(managerId) {
  const verify = isManager(managerId)
  if (verify === false ) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if(verify === true) {
    const managedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
    return managedEmployees.map((employees) => {
      return `${employees.firstName} ${employees.lastName}`
    })

  }
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))
module.exports = { isManager, getRelatedEmployees };
