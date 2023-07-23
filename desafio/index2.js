
const GODD_CODE_EXEMPLE = "aaabbbbhijjjm";  //"0/13“  significa que houve 0 erros e a string tem 13 caracteres
const BAD_CODE_EXEMPLE = "aaaxbbbbyyhwawiwjjjwwm";  //"8/22" significa que houveram 8 erros numa string que contêm 22 caracteres

const qualityOfCode = (code) => {
    const lettersNotIncluded = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'z', 'w', 'y'];
    let errors = 0;
    let codeInput = code;
    let codeArray = code.split('');

    console.log(codeInput, '<--- code input');
    
    // Verificação de letras não permitidas e a retidada das mesmas da string
    for (i of lettersNotIncluded) {
        for (j of codeArray) {
            if (i === j) {
                errors += 1;
                codeInput = codeInput.replace(i, '');
            }
        }
    };

    const codeOrder = codeInput.split('').sort().join('');

    console.log(codeInput, '<--- code sem letras não permitidas');
    console.log(codeOrder, '<--- code sem letras não permitidas ordenada');

    let errorOrder = 0;

    for (i = 0; i <= codeInput.length; i += 1) {
        if (codeOrder[i] !== codeInput[i]) {
            errorOrder += 1;
        };
    }

    errors += (errorOrder/2);

    // Remover letras repetidas em sequencia da string
    console.log('-----------------------------------------------------------------');
    let newCodeString = '';

    for (let i = 0; i < codeInput.length; i += 1) {
        if (codeInput[i] !== codeInput[i + 1]) {
            newCodeString += codeInput[i];
        };
    };

    return `error_printer(s): ${parseInt(errors)}/${code.length}`;
};

console.log(qualityOfCode(BAD_CODE_EXEMPLE));

