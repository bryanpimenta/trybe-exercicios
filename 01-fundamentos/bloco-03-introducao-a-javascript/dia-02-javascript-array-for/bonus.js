// Bubble Sort Crescente

/* let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

console.log(array) */

// Bubble Sort Decrescente

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

console.log(array)

//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = []

for (indexOne = 1; indexOne < numbers.length; indexOne +=1) {
    for (indexSec = indexOne - 1; indexSec < indexOne; indexSec +=1 )
    mult.push(numbers[indexSec] * numbers[indexOne])
}

console.log(mult) */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
