/**
Requisito 1: Selecione a tag em que está escrito "Lista de Tarefas" e guarde em 
uma variável com o nome titleHeader.
​
ps: dê um console.log() na variável para verificar se está selecionando o item correto. 
​
Lembre-se de usar o console do navegador para testar.
 */

const titleHeader = document.getElementsByClassName('title')[0];
const mudarCor = () => titleHeader.style.color = 'purple';
mudarCor();

/* Requisito 2: Agora troque a cor desse titúlo para sua cor preferida :) 
​
​
/*-------------------------*/

//Agora iremos começar a criar nossa lista de tarefa:

/*
Requisito 3: Crie duas váriaveis com nome input e button para capturar o input e o button.
​
ps: dê um console.log() na variável para verificar se está selecionando o item correto. 
​
Lembre-se de usar o console do navegador para testar.
​
*/

const input = document.querySelector('input');
const button = document.querySelector('.send');



/* 
Agora que capturamos nosso input vamos precisar pegar o valor que for digitado no input, 
assim que for clicado no botão de enviar. Vamos por parte:
*/

/*
Requisito 4: Crie um evento para que toda vez que for clicado no botão exiba 
inicialmente um console.log('estou disparando um evento')
​
Fazemos isso para testar nosso código e verificar se o evento de click
está funcionando
​
Lembre-se de usar o console do navegador para testar.
​
*/

/*
Requisito 5: Agora dentro do console.log('estou disparando um evento')
troque esse valor pelo valor escrito no input
​
Dica: Pesquise como pegar o valor de um input no javascript.
​
- Já temos esse input selecionado e armazendo em uma variável.
​
Lembre-se de usar o console do navegador para testar.
​
*/ 

/* 
Boa! Já temos uma boa parte funcionando. 
​
Requisito 6: Crie uma variável com nome inputValue armazenando o valor do input. 
​
ps:Como o valor do input existe somento dentro do console.log, 
vamos retirar ele de lá e colocar dentro de uma váriavel. 
*/

let inputValue = '';

// função do click
const addValue = () => {
    // capturando valor
    inputValue = input.value;
    let lista = document.querySelector('#task');
    let addText = document.createElement('li');
    addText.innerText = input.value;
    lista.appendChild(addText);
}
/*
Agora precisamos pegar esse valor do input e adicionarmos em uma lista!
​
Para isso dê uma olhada no arquivo index.html lá temos a estrutura de uma
lista, que no caso é nossa tag <ul></ul>
​
Requisito 7: Ainda dentro da nossa função de click, capture essa lista <ul></ul> 
usando seu ID e armazene em uma variável chamada listElement.
​
ps: dê um console.log() na variável para verificar se está selecionando
o item correto. 
​
*/



/* 
Requisito 7: Crie uma tag <li></li> dentro da nossa função de click.
​
Agora toda vez que for clicado no button precisamos também criar um <li></li>
que será justamente cada item da nossa lista de tarefa.
​
Além de criar esse <li></li> a cada click, devemos lembrar que ele deve ser
inserido dentro da nossa tag <ul></ul>
Massss vamos por parte:
​
Requisito 8: Crie uma variável chamada listItem responsável pro criar e armazenar o elemento <li></li>
ps: dê um console.log() na variável para verificar se está tudo certo
​
Dica: Pesquise como criar elementos HTML usando javascript
​
Requisito 9: Agora precisamos inserir isso no nosso HTML. 
Adicione esse <li></li> criado (listItem) dentro da nossa lista (listElement) <ul></ul>.
​
Dica: Para isso use o appendChild. Se não sabe como utilizar dê uma olhada na documentacão
​
*/

/* 
​
Requisito 10: Agora precisamos adicionar o valor do input dentro de cada li. (listItem)
​
Dica: Como podemos adicionar um texto dentro de uma tag html? 
​
Depois disso já teremos nossos textos sendo inseridos na nosssa lista 
de tarefas :) 
​
*/