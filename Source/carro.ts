import { Cambio } from './cambio';
import { Direcao } from './direcao';
import { Rodado } from './rodado';
import { Motor } from './motor';

export class Carro{
    private motor : Motor;
    private rodado : Motor;
    private direcao : Direcao;
    private cambio : Cambio;

    constructor(motor : Motor,rodado : Rodado,direcao : Direcao,cambio : Cambio){
        this.motor = motor;
        this.rodado = rodado;
        this.direcao = direcao;
        this.cambio = cambio;
    }

    public writeMotor() : void{
        this.motor.write();
    }
    public readMotor() : void {
        this.motor.read();
    }
    public deleteMotor() : void {
        this.motor.delete();
    }
    public writeRodado() : void{
        this.rodado.write();
    }
    public readRodado() : void {
        this.rodado.read();
    }
    public deleteRodado() : void {
        this.rodado.delete();
    }
    public writeDirecao() : void{
        this.direcao.write();
    }
    public readDirecao() : void {
        this.direcao.read();
    }
    public deleteDirecao() : void {
        this.direcao.delete();
    }
    public writeCambio() : void{
        this.cambio.write();
    }
    public readCambio() : void {
        this.cambio.read();
    }
    public deleteCambio() : void {
        this.cambio.delete();
    }

}