//1 Criar um algoritmo que imprima o 10 fatorial (10!)
//  10!= 10 x 9 x 8 x...2 x 1 = ?
//  Fazer com que o 10 seja multiplicado por 9 e o resultado seja colocado em uma variável

let fatorial = 10;

for (let index = fatorial; index >= 2; index -= 1){
    fatorial *= (index - 1)
} 
console.log(fatorial)

// Este código imprime qualquer fatorial, basta mudar o valor da variável
// Estrutura do for:
// for (ínicio; verificação; atualização) {código}
// for (10; 10 >= 2; index -=1){fatorial = 10* (10-9)= 90}
// O resultado é atualizado o valor de fatorial e repetido o ciclo sobre este valor


//2  Inverter uma String

let fruta = 'mamao'
let frutaReverse = ''

for (let indexFruit = fruta.length - 1; indexFruit > -1; indexFruit -= 1) {
    console.log(fruta[indexFruit])
    frutaReverse += fruta[indexFruit]
}
console.log(frutaReverse)

// Invertendo a palavra tryber

let word = 'tryber'
let wordReverse = ''

for (let indexWord = word.length -1; indexWord > -1; indexWord -=1) {
    console.log(word[indexWord])
    wordReverse = word[indexWord]
}
console.log(wordReverse)

