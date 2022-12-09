export function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
  
const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());
  
const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')
  
user.id;
address.id;


function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}
  
const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
  
const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
