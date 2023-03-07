const {countries} = require('./countries');

const expectedResult = 120797034;
const getPopulation = () => {
  const populationTotal = countries
  .map((item) => item.population)
  .reduce((acc, curr) => acc + curr, 0);
return populationTotal;
}
console.log(getPopulation());

const expectedResultt = 4311757;
const getTotalArea = () => {
  const totalArea = countries
  .map((item) => item.area)
  .reduce((acc, curr) => acc + curr, 0);
return totalArea;
}
console.log(getTotalArea());