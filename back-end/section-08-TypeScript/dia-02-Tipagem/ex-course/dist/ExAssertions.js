"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToJson = void 0;
function stringToJson(str, id) {
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
exports.stringToJson = stringToJson;
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());
const address = stringToJson('{"street":"Rua Tamarindo","number":1}', '#01');
user.id;
address.id;
function identity(value, message) {
    console.log(message);
    return value;
}
const returnNumber = identity(100, "Olá");
const returnString = identity("100", "Mundo");
const returnBoolean = identity(true, "Olá, Mundo!");
function getArray(items) {
    return new Array().concat(items); // construindo um Array que só pode conter elementos do tipo T
}
const numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
const stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
