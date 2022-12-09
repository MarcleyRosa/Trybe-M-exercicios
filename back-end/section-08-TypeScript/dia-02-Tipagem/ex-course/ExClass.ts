class Dog {
    name: string
    age: number
    breed: string

    constructor(name: string, age: number, breed: string) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    speak(): void {
        console.log(`nome: ${this.name} raça: ${this.breed} idade: ${this.age}`);
    };


}

const Dog1 = new Dog('doguinho', 10, 'vira-lata');

Dog1.speak()

class House {
    adress: string;
    color: string
    constructor(adress: string, color: string) {
        this.adress = adress;
        this.color = color
    }

    info(): void {
        console.log(`endereço: ${this.adress}`);
    };
}

const House1 = new House('rua das pedras', 'azul');

House1.info();

class Voo {
    plane: string;
    numberVoo: number
    date: number
    constructor(plane: string, numberVoo: number, date: number) {
        this.plane = plane;
        this.numberVoo = numberVoo;
        this.date = date;
    };

    info(): void {
        console.log(`${this.plane} solicitação de voo autorizada`);
    };
};

const Voo1 = new Voo('P-40', 173, Date.now())

Voo1.info();

interface Automobile {
    name: string;
    brand: string;
    color: string;
    doors: number;
    gears: number;
    turnOn: () => void;
    turnOff: () => void;
    speedUp: () => void;
    speedDown: () => void;
    break: () => void;
}

type Address = {
    street: string,
    number: number | null,
}
  
type User = {
    name: string,
    email: string,
    password: string,
}

const str: unknown = 'texto';

(str as string).split('');

const num: string = '2';

(num as unknown) as number
