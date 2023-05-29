//8 Criar um Array que vai de 1 ate 25 e imprimir o resultado

let array = []

for (index = 1; index <= 25; index +=1) {
  array.push(index)
}

console.log(array)

//9 Dividir por 2 cada item do array e imprimir

// Percorrer o Array 
// Dividir o item por 2

for (index = 0; index < array.length; index +=1) {
    console.log(`A divisão de ${array[index]} por 2 é ${array[index]/2}`)
}