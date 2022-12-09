"use strict";
class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    speak() {
        console.log(`nome: ${this.name} raça: ${this.breed} idade: ${this.age}`);
    }
    ;
}
const Dog1 = new Dog('doguinho', 10, 'vira-lata');
Dog1.speak();
class House {
    constructor(adress, color) {
        this.adress = adress;
        this.color = color;
    }
    info() {
        console.log(`endereço: ${this.adress}`);
    }
    ;
}
const House1 = new House('rua das pedras', 'azul');
House1.info();
class Voo {
    constructor(plane, numberVoo, date) {
        this.plane = plane;
        this.numberVoo = numberVoo;
        this.date = date;
    }
    ;
    info() {
        console.log(`${this.plane} solicitação de voo autorizada`);
    }
    ;
}
;
const Voo1 = new Voo('P-40', 173, Date.now());
Voo1.info();
const str = 'texto';
str.split('');
const num = '2';
num;
