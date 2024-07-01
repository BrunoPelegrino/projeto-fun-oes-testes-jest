const data = require('../data/zoo_data');
const { species, hours } = data;
function getSchedule(scheduleTarget) {
  const findSpecie = species.find((specieName) => specieName.name === scheduleTarget)
  const weekDays = Object.keys(hours) 
  
  const schedule = weekDays.reduce((acc, day) => {
    const officeHour = (day === 'Monday') ? 'CLOSED' : `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const exhibition = (day === 'Monday') ? 'The zoo will be closed!' : species.filter((specie) => specie.availability.includes(day)).map((specie) => specie.name);

    acc[day] = {
      officeHour,
      exhibition,
    };
    return acc;
  }, {});
  if(!scheduleTarget || !schedule[scheduleTarget]){
    findSpecie
    if(findSpecie) {
      return findSpecie.availability
    }
    return schedule
  }
  return { [scheduleTarget]: schedule[scheduleTarget] };

}
console.log(getSchedule('Tuesday'))
module.exports = getSchedule;
