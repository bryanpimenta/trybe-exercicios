// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0;

for (let index = 0; index <= 50; index +=1) {
    soma += index
}
console.log(soma);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let index = 2; index <= 150; index +=1) {
    if (index%3 === 0 ){
       contador += 1
       console.log(index)
    } 
}
console.log(contador);
 if (contador === 50){
    console.log ('Mensagem secreta.')
 }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
 
 let player1 = 'pedra'
let player2 = 'tesoura'

if (player1 === 'pedra' && player2 === 'tesoura'){
    console.log('Player 1 won!')
} else if (player1 === 'pedra' && player2 === 'pedra') {
    console.log('A Ties')
} else {
    console.log('Player 2 won!')
}
 

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.



// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.


/* Danilo Shimofusa 
Lucas Gomes 
Junior Coelho */