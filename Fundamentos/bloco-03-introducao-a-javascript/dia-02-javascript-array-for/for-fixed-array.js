let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Descobrindo o index de 'Portfólio' dentro do Array menu 
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);

//For - exibindo os itens da lista

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);
}

//For/Of

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

//For/of para imprimir os elementos da lista names com o console.log
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names) {
    console.log(nomes);
}


for(let index = 0; index < 10; index+=1 ){
    console.log('Oie');}
  