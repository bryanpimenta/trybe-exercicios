// Exercício 1: Vamos modelar algumas partes de um software de uma escola. 
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos.
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class Student {
    public registration: number = 0;
    public name: string = "";
    public testNotes: number[] = [];
    public workNotes: number[] = [];

    public sumNotes(): number {
        let soma = 0;
        for (let nota of this.testNotes) {
            soma += nota;
        }
        return soma;
    }

    public avgNotes(): number {
        return this.avgNotes() / this.testNotes.length;
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
    private _name: string();

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
      
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

    public totalOrder(): number {
        let total = 0;
        for (let item of this.itens) {
            total += item.price;
        }
        return total;
    }

    public totalOrderWithDiscount(): number {
        return this.totalOrder() - (this.totalOrder() * this.discount);
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
