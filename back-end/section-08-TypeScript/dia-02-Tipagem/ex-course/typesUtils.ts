type StatesOfMatter = "liquid" | "solid" | "gaseous";

type IdentifyingDocument = string | number;

type SO = "linux" | "mac os" | "windows";

type Vowels = "a" | "e" | "i" | "o" | "u";

class Person {
    name: string;
    birthDate: Date;
    age?: number;
   
    constructor(name: string, birthDate: Date, age?: number) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

