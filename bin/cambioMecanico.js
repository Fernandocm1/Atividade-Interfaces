"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CambioMecanico = /** @class */ (function () {
    function CambioMecanico() {
    }
    CambioMecanico.prototype.write = function () {
        console.log("Cambio Mecânico! Função Write");
    };
    CambioMecanico.prototype.read = function () {
        console.log("Cambio Mecânico! Função read");
    };
    CambioMecanico.prototype.delete = function () {
        console.log("Cambio Mecânico! Função Delete");
    };
    return CambioMecanico;
}());
exports.CambioMecanico = CambioMecanico;
