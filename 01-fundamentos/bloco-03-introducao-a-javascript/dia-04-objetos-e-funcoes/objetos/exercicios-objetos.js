
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

//1 Criar uma variável player e atribuir um objeto contendo as váriaveis acima

let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

//2 Acessar as chaves name, lastName, age utilizando uma sintaxe
//  e imprimir uma mensagem:
//    “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player.nome +' '+ player.lastName + ' tem ' + player.age + ' anos de idade.');