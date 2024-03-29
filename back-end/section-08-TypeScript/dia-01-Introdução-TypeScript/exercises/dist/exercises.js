"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreaCirculo = exports.getAreaTrapezio = exports.getLosango = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(height, base) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getLosango(maiorD, menorD) {
    return (maiorD * menorD) / 2;
}
exports.getLosango = getLosango;
;
function getAreaTrapezio(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.getAreaTrapezio = getAreaTrapezio;
;
function getAreaCirculo(r) {
    return Math.PI * (r ** 2);
}
exports.getAreaCirculo = getAreaCirculo;
;
