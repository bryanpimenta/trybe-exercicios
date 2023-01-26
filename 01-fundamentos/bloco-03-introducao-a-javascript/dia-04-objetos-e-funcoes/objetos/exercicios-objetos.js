
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

//01 Criar uma variável player e atribuir um objeto contendo as váriaveis acima

let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

//02 Acessar as chaves name, lastName, age utilizando uma sintaxe
//  e imprimir uma mensagem:
//    “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player.nome +' '+ player.lastName + ' tem ' + player.age + ' anos de idade.');

//03 Adicionar uma chave e atribuir os valores
// chave = bestInTheWorld
// valor = Datas em que Marta foi a melhor do mundo

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//04 Acessar a chave bestInTheWorld e colocar o valor na frase:
// “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes! '+ player['bestInTheWorld'])