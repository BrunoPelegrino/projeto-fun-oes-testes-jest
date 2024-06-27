const data = require("../data/zoo_data");
const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findEmployee = employees.find(
    (emplyee) =>
      emplyee.firstName === employeeName || emplyee.lastName === employeeName
  );
  return findEmployee
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
