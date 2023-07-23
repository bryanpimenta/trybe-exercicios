
const GODD_CODE_EXEMPLE = "aaabbbbhijjjm";  //"0/13“  significa que houve 0 erros e a string tem 13 caracteres
const BAD_CODE_EXEMPLE = "aaaxbbbbyyhwawiwjjjwwm";  //"8/22" significa que houveram 8 erros numa string que contêm 22 caracteres

const qualityOfCode = (code) => {
    const lettersNotIncluded = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'z', 'w', 'y'];
    let errors = 0;
    let codeString = code;
    let codeArray = code.split('');

    console.log(codeString, '<--- code input');
    
    // Verificação de letras não permitidas e a retidada das mesmas da string
    for (i of lettersNotIncluded) {
        for (j of codeArray) {
            if (i === j) {
                errors += 1;
                codeString = codeString.replace(i, '');
            }
        }
    };
    console.log(codeString, '<--- code sem letras não permitidas');

    // Remover letras repetidas em sequencia da string
    console.log('-----------------------------------------------------------------');
    let newCodeString = '';

    for (let i = 0; i < codeString.length; i += 1) {
        if (codeString[i] !== codeString[i + 1]) {
            newCodeString += codeString[i];
        };
    };

    // Colocar newCodeString em ordem alfabetica e comparar com a string original
    const newCodeStringOrder = newCodeString.split('').sort().join('');
    console.log(newCodeString, '<--- Sem repetições');
    console.log(newCodeStringOrder, '<--- Sem repetições e ordenada');
    let codeFinally = '';

    for (i = 0; i < newCodeStringOrder.length; i += 1) {
        if (newCodeStringOrder[i] !== newCodeStringOrder[i + 1]) {
            codeFinally += newCodeStringOrder[i];
        };
    };
    
    errors += (newCodeStringOrder.length - codeFinally.length);
    console.log(codeFinally, '<--- Sem repetições, ordenada e sem letras repetidas em sequencia novamente');
    console.log('-----------------------------------------------------------------');

    return `error_printer(s): ${errors}/${code.length}`;
};

console.log(qualityOfCode(BAD_CODE_EXEMPLE));

// const lettersIncluded = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

/*   let codeArray = code.split('');
  let codeOrder = codeArray.sort();

  console.log(codeArray)
  console.log(codeOrder) */