const a = 24;
const b = 11;
const c = 25;

// primeira atividade, fazer comparação entre duas variaveis de valor tipo number. Quem é o maior?
if (a > b) {
    console.log('O maior entre os doís valores é o (a)');
} 
else {
    console.log('O maior entre os doís valores é o (b)');
}

// segunda atividade, fazer comparação entre três variaveis de valor tipo number. Quem é o maior?
if (a > b && a > c) {
    console.log('(a) é o maior número!');
} 
else if (b > a && b > c){
    console.log('(b) é o maior número!');
}
else {
    console.log('(c) é o maior número!');
}

// terceira atividade, se o número for positivo, retorne no console dizendo que é positivo, se for negativo, retorne negativo :)
let d = -15;

if (d > 0) {
    console.log('Este número é positivo!')
} 
else {
    console.log('Este número é negativo!')
}

// quarta atividade, verificar se a soma dos angulos do triangulo são iguais a 180 graus && verificar se o angulo é maior que zero, retornando uma mensagem de erro caso seja!
let anguloC = 90;
let anguloA = 30;
let anguloB = -30;
const anguloTrianguloQualquer = 180;
const verificarAngulacao = anguloC > 0 && anguloB > 0 && anguloC > 0;

if (anguloC + anguloA + anguloB === anguloTrianguloQualquer) {
    console.log('É um Triângulo!');
} 
else {
    console.log('Não é um Triângulo!');
}
if (verificarAngulacao === false)   {
    console.log('Erro em algum ângulo')
}

