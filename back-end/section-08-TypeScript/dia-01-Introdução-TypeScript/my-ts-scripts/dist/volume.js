"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
console.log((0, utils_1.exec)(convert));
