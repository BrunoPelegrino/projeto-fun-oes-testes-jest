const data = require('../data/zoo_data');
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];


function countEntrants(entrants) {
  const child = entrants.filter((childEntrants) => childEntrants.age < 18);
  const adult = entrants.filter((adultEntrants) => adultEntrants.age >= 18 && adultEntrants.age < 50);
  const senior = entrants.filter((seniorEntrants) => seniorEntrants.age >= 50);

  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length
  }
}
function calculateEntry(entrants) {
  if(entrants === undefined) {
    return 0
  }
  if (Object.keys(entrants).length === 0) {
    return 0
  }

  const entrantsQty = countEntrants(entrants);
  const sumChildEntry = entrantsQty.child * 20.99
  const sumAdultEntry = entrantsQty.adult * 49.99
  const sumSenioEntry = entrantsQty.senior * 24.99

  return sumAdultEntry + sumChildEntry + sumSenioEntry
  
}

console.log(calculateEntry(entrants))
module.exports = { calculateEntry, countEntrants };
