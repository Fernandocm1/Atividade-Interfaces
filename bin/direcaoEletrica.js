"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirecaoEletrica = /** @class */ (function () {
    function DirecaoEletrica() {
    }
    DirecaoEletrica.prototype.write = function () {
        console.log("Direção Elétrica! Função Write");
    };
    DirecaoEletrica.prototype.read = function () {
        console.log("Direção Elétrica! Função read");
    };
    DirecaoEletrica.prototype.delete = function () {
        console.log("Direção Elétrica! Função Delete");
    };
    return DirecaoEletrica;
}());
exports.DirecaoEletrica = DirecaoEletrica;
