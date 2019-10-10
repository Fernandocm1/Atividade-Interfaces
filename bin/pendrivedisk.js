"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PendriveDisk = /** @class */ (function () {
    function PendriveDisk() {
    }
    PendriveDisk.prototype.write = function () {
        console.log("Class PendriveDisk método write");
    };
    PendriveDisk.prototype.read = function () {
        console.log("Class PendriveDisk método read");
    };
    PendriveDisk.prototype.delete = function () {
        console.log("Class PendriveDisk método delete");
    };
    return PendriveDisk;
}());
exports.PendriveDisk = PendriveDisk;
