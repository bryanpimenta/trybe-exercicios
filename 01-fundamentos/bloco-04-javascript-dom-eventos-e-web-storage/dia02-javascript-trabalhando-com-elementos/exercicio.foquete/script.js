//
document.querySelector('#elementoOndeVoceEsta');
const func = () => document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';
func();

let modText = document.querySelector('#pai').firstElementChild
modText.innerText = 'Killjoy é o melhor sentinela do Valorant!'

document.querySelector('#pai').firstElementChild // primeiro elemento filho
document.querySelector('#elementoOndeVoceEsta').previousElementSibling // elemento irmão anterior
document.querySelector('#elementoOndeVoceEsta').nextSibling // proximo irmão nó
document.querySelector('#elementoOndeVoceEsta').nextElementSibling
document.querySelector('#pai').lastElementChild.previousElementSibling // ultimo elemento irmão e elemento irmão anterior deste


let irmao = document.createElement('section');
let irmaoDoIrmao = document.createElement('section');
let filho = document.createElement('h1');
filho.innerHTML = 'É VERDADE'

document.querySelector('#pai').appendChild(irmao);
document.querySelector('#elementoOndeVoceEsta').appendChild(irmaoDoIrmao);
document.querySelector('#primeiroFilhoDoFilho').appendChild(filho);
document.querySelector('h1').parentElement.parentElement.nextElementSibling