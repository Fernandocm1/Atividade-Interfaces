"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CambioAutomatico = /** @class */ (function () {
    function CambioAutomatico() {
    }
    CambioAutomatico.prototype.write = function () {
        console.log("Cambio Automático! Função Write");
    };
    CambioAutomatico.prototype.read = function () {
        console.log("Cambio Automático! Função read");
    };
    CambioAutomatico.prototype.delete = function () {
        console.log("Cambio Automático! Função Delete");
    };
    return CambioAutomatico;
}());
exports.CambioAutomatico = CambioAutomatico;
