import { CambioAutomatico } from './cambioAutomatico';
import { CambioMecanico } from './cambioMecanico';
import { DirecaoHidraulica } from './direcaoHidraulica';
import { Kilometros } from './kilometros';
import { TempoCarro } from './tempoCarro';
import { Carro } from './carro';
import { MotorFord } from './motorFord';
import { Vwtsi } from "./vwtsi";
import { DirecaoEletrica } from './direcaoEletrica';

let carro = new Carro(new Vwtsi,new TempoCarro, new DirecaoHidraulica, new CambioMecanico);
let carro2 = new Carro(new MotorFord,new Kilometros,new DirecaoEletrica, new CambioAutomatico);

carro.writeMotor();
carro.readMotor();
carro.deleteMotor();

carro2.writeMotor();
carro2.readMotor();
carro2.deleteMotor();

console.log("-------------");

carro.writeRodado();
carro.readRodado();
carro.deleteRodado();

carro2.writeRodado();
carro2.readRodado();
carro2.deleteRodado();

console.log("-------------");

carro.writeDirecao();
carro.readDirecao();
carro.deleteDirecao();

carro2.writeDirecao();
carro2.readDirecao();
carro2.deleteDirecao();

console.log("-------------");

carro.writeCambio();
carro.readCambio();
carro.deleteCambio();

carro2.writeCambio();
carro2.readCambio();
carro2.deleteCambio();


