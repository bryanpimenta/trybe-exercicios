let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 Percorrer o array imprimindo todos os valores dele

/* for (let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index])
}  */

//2 Somar todos os valores do array e imprimir o resultado

/* let soma = 0;

for (let index = 0; index < numbers.length; index +=1){
    console.log(soma = soma + numbers[index])
} */

//3 Calcular a média dos valores do array (somar todos e dividir pela contidade de valores)

/* let media = 0;
console.log(media = soma/numbers.length);
console.log('A média de numbers é: ' + media); */

//4 Caso seja maior que 20 'mensagem' caso seja menor que 20 ' mensagem2'

/* if (media > 20){
    console.log('Valor maior que 20')
}
else {
    console.log('Valor menos que 20')
} */

//5 Descobrir o maior valor contido em numbers e imprimir
// Fazer com que um For pecorrar o Array
// Fazer if (comparar o valor imprimido com o valor dentro da variavel maiorNumber)
// Atribuir o maior numero dentro da variavel maiorNumber

/* let maiorNumber = 0

for (let indexMaiorN = 0 ; indexMaiorN < numbers.length; indexMaiorN += 1){ 
    console.log(numbers[indexMaiorN]);  
    if (maiorNumber < numbers[indexMaiorN]) {
           console.log(maiorNumber = numbers[indexMaiorN])
        }
    } 

console.log('O maior número do array number é: ' + maiorNumber); */

//6  Quantos valores em number são ímpares e imprimir o resultado
//   Caso não tenha nenhum: 'nenhym valor ímpar encontrado';
//   Obs: n%2 = 0 é par se não é ímpar

/* for (index = 0; index < numbers.length; index +=1) {
  if (numbers[index]%2 === 0) {
    console.log('Nenhum valor ímpar encontrado')
  }
  else {
    console.log(numbers[index] + ' é ímpar!')
  }
} */

//7 Descobrir qual é o menor número do array e imprimir

/* let menorNumber = 1000;

for (let indexMenorN = 0; indexMenorN < numbers.length; indexMenorN += 1){
    if (menorNumber > numbers[indexMenorN]) {
        console.log(menorNumber = numbers[indexMenorN]);
        console.log('O menor número da váriavel numbers é: ' + menorNumber);
    }
} */

/* let dora = [];
for (let index = 1; index <= 50; index +=1) {
    dora.push(index)
}
console.log(dora);
 */

/* const n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado); */

/* let soma = 0;

for (let index = 1; index < 101; index +=1){
    soma += index;
    console.log(soma)
} */

// Quantas vezes consigo subtrair 5 de 100?
// Subtrair o 100 ate o 0 usando For
// Contar quantas vezes ele foi subtraido

let numero = 100; 
let vezesSub = 0;

for (let index = 5; numero > 0; index = 5) {
    console.log(numero -= index);
    vezesSub +=1;
    console.log(vezesSub);
} 
