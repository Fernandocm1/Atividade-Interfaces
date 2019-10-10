"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MotorFord = /** @class */ (function () {
    function MotorFord() {
    }
    MotorFord.prototype.write = function () {
        console.log("Motor da Ford! Função Write");
    };
    MotorFord.prototype.read = function () {
        console.log("Motor da Ford! Função read");
    };
    MotorFord.prototype.delete = function () {
        console.log("Motor da Ford! Função Delete");
    };
    return MotorFord;
}());
exports.MotorFord = MotorFord;
