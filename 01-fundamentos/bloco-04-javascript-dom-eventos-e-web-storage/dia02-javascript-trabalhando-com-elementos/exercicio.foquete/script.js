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