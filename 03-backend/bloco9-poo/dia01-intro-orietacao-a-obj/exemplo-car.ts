class Carro {
    private speed: number = 0
    private name: string

    constructor (nameCar: string) {
        this.name = nameCar
    }

    public getSpeed() {
        return this.speed
    }

    public getName() {
        return this.name
    }

    public setName(name: string) {
        if (name.length < 3) return
        this.name = name
    }

    public setSpeed(speed: number) {
        this.speed = speed
    }

    public acelerar() {
        if (this === fiatEscada){
            this.speed += 9999
        }
        this.speed += 5
    }

    public freiar() {
        const result = this.speed - 5;

        if (result >= 0) {
            this.speed = result
        } else {
            this.speed = -5
        }
    }
}

const fiatEscada = new Carro('Fiat com Escada');
const uno = new Carro('Uno');

fiatEscada.acelerar();
uno.acelerar();

console.log(fiatEscada);
console.log(uno);