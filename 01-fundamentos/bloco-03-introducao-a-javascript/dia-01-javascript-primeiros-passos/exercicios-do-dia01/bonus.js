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


/* Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

