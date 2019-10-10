"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HardDisk = /** @class */ (function () {
    function HardDisk() {
    }
    HardDisk.prototype.write = function () {
        console.log("Classe HardDisk método write");
    };
    HardDisk.prototype.read = function () {
        console.log("Classe HardDisk método read");
    };
    HardDisk.prototype.delete = function () {
        console.log("Classe HardDisk método delete");
    };
    return HardDisk;
}());
exports.HardDisk = HardDisk;
