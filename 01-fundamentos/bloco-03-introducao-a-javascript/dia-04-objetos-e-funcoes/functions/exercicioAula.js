//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:


function addition (a, b){
    return a + b
}
function subtraction (a, b){
    return a - b
}
function multiplication (a, b){
    return a * b
}
function division (a, b){
    return a/b
}
function module (a, b){
    return a % b
}

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa,
// duas constantes com os valores que serão comparados.

function bigNumber (number1, number2) {
    if (number1 > number2){
        return `O maior número é o ${number1}`
    } else {
        return `O maior número é o ${number2}`
    }
}

console.log(bigNumber(1,2))


//Faça um programa que retorne o maior de três números. Defina, no começo do programa,
// três constantes com os valores que serão comparados

function bigNumber (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return `O maior número é o ${number1}`
    } else if (number2 > number1 && number2 > number3){
        return `O maior número é o ${number2}`
    } else {
        return `O maior número é o ${number3}`
    }
}

console.log(bigNumber(1,2,10))

//Faça um programa que, dado um valor recebido como parâmetro,
// retorne “positive” se esse valor for positivo, “negative” se for negativo,
// e caso não seja nem positivo e nem negativo retorne “zero”.


function positNegat(number4) {
    if (number4 > 0) {
        return `positive`
    } else if (number4 < 0){
        return `negative`
    } else {
        return `zero`
    }
}

console.log(positNegat(0))

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

function triangle(a,b,c){
    let tri = false
    if (a <= 0 || b <= 0 || c <= 0){
        return `Erro em algum ângulo!`
    } else if (a + b + c === 180){
        return tri = true
    } else {
        return tri = false
    }
}

console.log(triangle(30,90,60))