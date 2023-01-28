// Algoritmo que retorna uma nota em letra para cada faixa de porcentagem de nota
/* Porcentagem >= 90 -> A
/* Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */ 

let nota = -1

if (nota > 100) {
    console.log('Erro!')
} else if (nota >= 90 ) {
    console.log(nota = 'A')
} else if (nota >= 80 ) {
    console.log(nota = 'B')
} else if (nota >= 70 ) {
    console.log(nota = 'C')
} else if (nota >= 60) {
    console.log(nota = 'D')
} else if (nota >= 50 ) {
    console.log(nota = 'E')
} else if (nota < 50 && nota > 0 ) {
    console.log(nota = 'F')
} else if (nota > 100 || nota < 0) {
    console.log('Erro!')
}
console.log(nota)