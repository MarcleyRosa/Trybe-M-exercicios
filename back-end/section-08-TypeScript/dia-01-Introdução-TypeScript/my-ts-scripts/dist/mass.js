"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = unitsMass.indexOf(fromUnit);
    const toIndex = unitsMass.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log((0, utils_1.exec)(convertMass));
