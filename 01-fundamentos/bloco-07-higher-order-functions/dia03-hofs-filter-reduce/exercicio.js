const {countries} = require('./countries');

const expectedResult = 120797034;
const getPopulation = () => {
  const populationTotal = countries
  .map((item) => item.population)
  .reduce((acc, curr) => acc + curr);
  return populationTotal;
}

console.log(getPopulation());
