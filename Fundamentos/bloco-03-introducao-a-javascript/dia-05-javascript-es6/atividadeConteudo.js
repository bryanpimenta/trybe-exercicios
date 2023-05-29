let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;


// Usando o objeto abaixo, utilize for/in e imprima um console.log
// com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car){
    console.log(key, car[key])
}


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let n in names){
    console.log(`Bão dia, ${names[n]}!`)
}