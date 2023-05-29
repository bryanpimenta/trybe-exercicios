//01 Criar um algoritmo que imprima o 10 fatorial (10!)
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


//02  Inverter uma String

let fruta = 'Killjoy'
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
    wordReverse += word[indexWord]
}
console.log(wordReverse)

//03 Utilizando a estrutura de repetição For
//Escrever dois algoritmos
//  Um que imprima a maior palavra dessa lista
/// A outra a de menor quantidade

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorWord = ''
let menorWord = 'java'

// Imprimir cada String da lista  (for)(repetição)
// Contar a quantidade de letras de cada String (.length)(quantidade)
// Comparar cada quantidade por quantidade (if)(condição)

for (indexLista = 0; indexLista < array.length; indexLista +=1) {
/*     console.log(array[indexLista])
    console.log(array[indexLista].length) */
    if (array[indexLista].length > maiorWord.length) {
        maiorWord = array[indexLista]
    }
    if (array[indexLista].length < menorWord.length) {
        menorWord = array[indexLista]
    }
}
console.log(maiorWord)
console.log(menorWord)

//04 Escrever um algoritmo que imprima o maior número primo entre 2 e 50.
// Número é primo quando o número é dividido por 1 e por ele mesmo(somente), tendo o resto 0.
// Exemplo: 12 é divisivel por 1, 2, 3, 6, 12 logo não é um número primo 
//          17 é divisivel por 1 e 17 somente, sendo um número primo :)

// Fazer um algoritmo que diz se o número é ou não é primo 
// (for): fazer todas divisões ate o próprio número
// (if) e (%)

/* let number2 = 47;
let primo = 0;
for (let index2 = 1; index2 <= number2; index2 +=1) {
    console.log(number2%index2);
    if (number2 % index2 === 0) {
        primo += 1
    }
}
console.log(primo)
if (primo === 2) {
    console.log(number2 + ' é primo!')
}
else {
    console.log(number2 + ' não é primo')
}
 */
// Tentando Novamente

let maiorNum = 0
let primo = false

for (index = 2; index <= 50; index +=1) {
    primo = true
    for (div = 2; div < index; div +=1){
        if (index % div === 0){
            primo = false
        }
    }
    if (primo){
        maiorNum = index
    }
}

console.log(maiorNum)



