"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SO = /** @class */ (function () {
    function SO(driver) {
        this.driver = driver;
    }
    SO.prototype.writeDisc = function () {
        this.driver.write();
    };
    SO.prototype.readDisc = function () {
        this.driver.read();
    };
    SO.prototype.deleteDisc = function () {
        this.driver.delete();
    };
    return SO;
}());
exports.SO = SO;
