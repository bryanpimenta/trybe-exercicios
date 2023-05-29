// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

/* const hydrate = (string) => {
    const numeros = string.match(/\d+/g);
    let sum = 0;

    for (let j = 0; j < numeros.length; j += 1) {
        sum += Number(numeros[j])
    }

    if (sum === 1) {
        return `${sum} copo de água`;
    }
    return `${sum} copos de água`;
} */

const hydrate = (string) => {
    const numeros = string.match(/\d+/g) || [];
    const sum = numeros.reduce((acc, cur) => acc + Number(cur), 0);
  
    return `${sum} copo${sum === 1 ? '' : 's'} de água`;
  }

module.exports = hydrate;