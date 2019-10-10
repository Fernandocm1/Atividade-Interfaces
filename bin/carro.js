"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(motor, rodado, direcao, cambio) {
        this.motor = motor;
        this.rodado = rodado;
        this.direcao = direcao;
        this.cambio = cambio;
    }
    Carro.prototype.writeMotor = function () {
        this.motor.write();
    };
    Carro.prototype.readMotor = function () {
        this.motor.read();
    };
    Carro.prototype.deleteMotor = function () {
        this.motor.delete();
    };
    Carro.prototype.writeRodado = function () {
        this.rodado.write();
    };
    Carro.prototype.readRodado = function () {
        this.rodado.read();
    };
    Carro.prototype.deleteRodado = function () {
        this.rodado.delete();
    };
    Carro.prototype.writeDirecao = function () {
        this.direcao.write();
    };
    Carro.prototype.readDirecao = function () {
        this.direcao.read();
    };
    Carro.prototype.deleteDirecao = function () {
        this.direcao.delete();
    };
    Carro.prototype.writeCambio = function () {
        this.cambio.write();
    };
    Carro.prototype.readCambio = function () {
        this.cambio.read();
    };
    Carro.prototype.deleteCambio = function () {
        this.cambio.delete();
    };
    return Carro;
}());
exports.Carro = Carro;
