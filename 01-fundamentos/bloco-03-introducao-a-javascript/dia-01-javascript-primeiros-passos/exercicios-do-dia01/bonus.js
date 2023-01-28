// Utilizar três variáveis const e adicionar um número em cada 
// Verificar com o If se um dos três são pares.
// Fazer o mesmo, só que descobrir se são ímpares

const num1 = 2;
const num2 = 6;
const num3 = 8;
let resposta1 = false;
let resposta2 = false;

// Pares
if(num1 % 2 === 0 || num2 % 2 === 0 || num3%2 === 0) {
    console.log(resposta1 = true)
}
// Ímpares
if(num1 % 2 > 0 || num2 % 2 > 0 || num3%2 > 0) {
    console.log(resposta2 = true)
}

console.log(resposta1)
console.log(resposta2)

/* Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);
 */

const custo = 100
const venda = 220

if (custo >= 0 && venda >= 0){
    const custoTotal = custo * 1.2;
    const lucro = 1000*(venda - custoTotal)
    console.log(lucro)
} else {
    console.log('Erro, os valores não podem ser abaixo de zero')
}


