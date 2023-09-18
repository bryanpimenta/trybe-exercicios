// Exercício 1: Vamos modelar algumas partes de um software de uma escola. 
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos.
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class Student {
    private _registration: number;
    private _name: string;
    private _testNotes: number[];
    private _workNotes: number[];

    constructor(registration: number, name: string, testNotes: number[], workNotes: number[]) {
        this._registration = registration;
        this._name = name;
        this._testNotes = testNotes;
        this._workNotes = workNotes;
    }

    getRegistration(): number {
        return this._registration;
    }

    setRegistration(value: number) {
        if (value < 0) throw new Error('A matrícula não pode ser um valor negativo.');
        this._registration = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }

    sumTestNotes(): number {
        let soma = 0;
        for (let nota of this._testNotes) {
            soma += nota;
        }
        return soma;
    }

    avgTestNotes(): number {
        return this.avgTestNotes() / this._testNotes.length;
    }

    sumWorkNotes(): number {
        let soma = 0;
        for (let nota of this._workNotes) {
            soma += nota;
        }
        return soma;
    }

    avgWorkNotes(): number {
        return this.sumWorkNotes() / this._workNotes.length;
    }
};

// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. 
// Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

// Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos.
// A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

class Client {
    // _ underLine significa dizer que a chave é privada
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }
};

class Order {
    private _items: OrderItem[] = [];
    private _client: Client;
    private _formPayment: string;
    private _discount = 0;

    constructor(client: Client, items: OrderItem[], formPayment: string, discount: number) {
        this._client = client;
        this._items = items;
        this._formPayment = formPayment;
        this._discount = discount;
    }

    getClient(): Client {
        return this._client;
    }
    
    setClient(value: Client) {
        this._client = value;
    }

    getItems(): OrderItem[] {
        return this._items;
    }
    
    setItems(value: OrderItem[]) {
        if (value.length === 0) throw new Error('O pedido deve ter pelo meno um item.');
        this._items = value;
    }

    getFormPayment(): string {
        return this._formPayment;
    }
    
    setFormPayment(value: string) {
        this._formPayment = value;
    }


    getDiscount(): number {
        return this._discount;
    }
    
    setDiscount(value: number) {
        if (value < 0) throw new Error('O desconto não pode ser um valor negativo.');
        this._discount = value;
    }
    
};

class OrderItem {
    private _name: string;
    private _price: number;
    
    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }
    
    setName(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }
    
    getPrice(): number {
        return this._price;
    }
    
    setPrice(value: number) {
        if (value < 0) throw new Error('O preço deve ser positivo.');
        this._price = value;
    }
};


// Testando
const client = new Client('João');
const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);
const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

// output: 
/* Order {
    _items: [
      OrderItem { _name: 'Sanduíche Natural', _price: 5 },
      OrderItem { _name: 'Suco de Abacaxi', _price: 5 },
      OrderItem { _name: 'Gelatina de Uva', _price: 2.5 }
    ],
    _discount: 0.1,
    _client: Client { _name: 'João' },
    _formPayment: 'dinheiro'
} */
