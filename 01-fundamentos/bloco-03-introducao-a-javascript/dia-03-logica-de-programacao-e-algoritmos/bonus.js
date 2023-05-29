
// Como fazer '*' ser adicionado na linha relativamente ao número de 'n'
// altura: feita
// base: feito


/* let n = 5
let tico = '*'
let aste = ''
//Quantidade na linha (base)
for(let indexTico = 0; indexTico < n; indexTico +=1){
    aste += tico
    console.log(aste)
}
//Quantidade de linhas (altura)
for (let index = 1; index <= n; index += 1) {
    console.log(aste)
} */


let n = 5
let tico = '*'
let aste = ''
let space = ' '


for(let indexTico = 0; indexTico < n; indexTico +=1){
    for (let indexSpace = n - 1; indexSpace >= 0; indexSpace -=1){
        (aste += space)
    }
    aste += tico
    console.log(aste)
}